import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CardOfferRequestBody, MAP_BENEFIT_EXCHANGE_PAGE } from './../benefits.service';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, Slides, NavController, App, NavParams, AlertController } from 'ionic-angular';
import { BenefitsService, RequestRetrieveCatalogue } from "../benefits.service";
import { RouteManagerService } from "../../../framework/services/routeManager/routeManager.service";
import { MyShoppingBasketSharingDataService } from "../../myShoppingBasket/myShoppingBasketSharingData.services";
import { LoadingIndicatorService } from "../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { BenefitsDataService } from "../benefitsData.service";
import $ from 'jquery';
import { AppConfig as app } from "../../../framework/appConfig";
import {Utils} from "../../../framework/services/utilities/utilities";
import {YourCardDetailsSharingDataService} from "../../CardManagement/cardDetails/yourCardDetails/yourCardDetailsSharingData.services";

interface CataloguesResponsePayload {
  card?: any;
  benefit?: any;
  catalogues?: any;
}

@IonicPage()
@Component({
  selector: 'page-exchange',
  templateUrl: 'exchange.html',
  providers: [
    BenefitsService,
    InAppBrowser
  ]
})
export class ExchangePage {
  disableBuyTab: boolean;
  slideDirection: number;
  lastIndex: number;
  categoryName = 'Exchange';
  baseImgUrl;
  baseResourceUrl;
  @ViewChild(Slides) slidesCard: Slides;

  showLoading: boolean = false;
  defaultCardNumber: string;
  atLeastOneCardMSG: string;
  currentCard: any;
  currentCardNumber: string;

  listCards: any = [];
  listOffers: any = [];

  productsOnBasket = 0;
  private _getCardDataSub: Subscription;
  private _getOfferSub: Subscription;

  constructor(private benefitsService: BenefitsService,
    public routeManager: RouteManagerService,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public navCtrl: NavController,
    private iab: InAppBrowser) {
    this.baseImgUrl = app.Configuration.HttpService.baseResourceUrl;
    this.baseResourceUrl = app.Configuration.HttpService.baseResourceUrl;
  }

  getCardsData() {
    let cards = YourCardDetailsSharingDataService.getInstance().getCardsList();
    if (!cards || cards.length <= 0) {
      this.gotoAddCard();
      return;
    }

    cards = this._filterShowCardList(cards);
    if (!cards || cards.length <= 0) {
      this.disableBuyTab = true;
      this.alertNoBenefit();
      return;
    }

    this.listCards = cards.map((card) => {
      card.last4DigitCardNumber = this._get4LastDigitsCardNumber(card);
      card.schemeNumber = card.scheme;
      return card;
    });

    this.lastIndex = this.listCards.length - 1;
    this.selectDefaultCard();
    this.updateOfferList();
  }

  selectDefaultCard() {
    if (!Array.isArray(this.listCards)) {
      this.currentCard = 0;
      return;
    }

    let cardInforActive = YourCardDetailsSharingDataService.getInstance().getCardInforActive;
    if(Utils.isNotNull(cardInforActive)) {
      if (Utils.isNotNull(cardInforActive) && Array.isArray(this.listCards)) {
        let cardIndex;
        let breakCheckIndex = false;
        if (Utils.isNotNull(cardInforActive.cardID) && cardInforActive.cardID !== '') {
          if (cardInforActive.cardID.indexOf('-') > 0) {
            cardIndex = this.listCards.findIndex(x => x.cardId === cardInforActive.cardID);
          } else {
            for (let i = 0; i < this.listCards.length; i++) {
              if (this.listCards[i].cardId && this.listCards[i].cardId.indexOf('-') > 0) {
                if (this.listCards[i].cardId.replace(/-/g, "") === cardInforActive.cardID) {
                  cardIndex = i;
                }
              } else if (this.listCards[i].cardId === cardInforActive.cardID) {
                cardIndex = i;
              }
            }
          }
          breakCheckIndex = true;
        }
        if (Utils.isNotNull(cardInforActive.cardNumber) && breakCheckIndex !== true && cardInforActive.cardNumber !== '') {
          cardIndex = this.listCards.findIndex(x => x.cardNumber === cardInforActive.cardNumber);
        }

        if (Utils.isNotNull(cardIndex) && cardIndex !== -1) {
          this.currentCard = cardIndex;
          if (this.slidesCard) {
            this.slidesCard.update();
          }
          if (Utils.isNotNull(this.slidesCard)) {
            setTimeout(() =>
              this.slidesCard && this.slidesCard.slideTo(this.currentCard, 0), 200
            )
          }

        } else {
          const currentIndex = 0;
          this.currentCard = 0;
          let card = {
            cardNumber: this.listCards[currentIndex].cardNumber,
            cardID: this.listCards[currentIndex].cardId,
          };
          if (Utils.isNotNull(this.slidesCard)) {
            this.slidesCard.slideTo(0, 0);
          }

          YourCardDetailsSharingDataService.getInstance().saveCardInforActive = card;
        }
      }
    } else {
      if (Utils.isNotNull(this.slidesCard) ) {
        const currentIndex = 0;
        this.currentCard = 0;
        let card = {
          cardNumber: this.listCards[currentIndex].cardNumber,
          cardID: this.listCards[currentIndex].cardId,
        };

        this.slidesCard.slideTo(0, 0);
        YourCardDetailsSharingDataService.getInstance().saveCardInforActive = card;
      }
    }
  }

  onSlideDidChange(event) {
    const currentIndex = this.slidesCard.getActiveIndex();
    if (currentIndex >= 0 && currentIndex < this.listCards.length) {
      this.slideDirection = (this.currentCard <= currentIndex) ? 1 : -1;
      this.currentCard = currentIndex;
      this.currentCardNumber = this.listCards[currentIndex].cardNumber;

      let card = {
        cardNumber: this.listCards[currentIndex].cardNumber,
        cardID: this.listCards[currentIndex].cardId,
      }

      YourCardDetailsSharingDataService.getInstance().saveCardInforActive = card;
      YourCardDetailsSharingDataService.getInstance().saveCardCurrent = card;
      BenefitsDataService.getInstance().currentCardNumber = this.currentCardNumber;
      this.updateOfferList();
    }
  }

  slideTo(index) {

    this.slidesCard.slideTo(index);
  }

  gotoAddCard() {
    this.navCtrl.push('AddCardNumberPage');
  }

  updateOfferList() {
    if (this._getOfferSub) {
      this._getOfferSub.unsubscribe();
    }
    this.listOffers = [];
    const card = this.listCards[this.currentCard];
    const body = this._buildCardRequest(card);
    this.showLoading = true;
    this.benefitsService.getOffersByCard(body).subscribe(res => {
      if (!res.ok) {
        return;
      }
      const cats = res.response.categories;
      const offfers = this._filterOffersList(cats);
      const otherOffers = this._filterOffersList(cats, 'buy');

      if (offfers && offfers.length > 0) {
        this.listOffers = offfers.map(this._buildOffer.bind(this));
      }

      if (!otherOffers || otherOffers.length <= 0) {
        this.disableBuyTab = true;
      } else {
        this.disableBuyTab = false;
      }
    }, (error) => {
      this.showLoading = false;
    }, () => {
      this.showLoading = false;
    });
  }

  onBenefitClick(benefit) {
    const card = this.listCards[this.currentCard];
    const key = benefit.name.toLowerCase();
    const screenTarget = MAP_BENEFIT_EXCHANGE_PAGE[key];
    if (screenTarget) {
      const urlKey = benefit.url;
      LoadingIndicatorService.getInstance().showLoadingIndicator();
      const catalogueReq: RequestRetrieveCatalogue = this.benefitsService.buildCatalogueRequestFromCard(card, urlKey);
      this.benefitsService.getRetrieveCatalogue(catalogueReq).subscribe(res => {
        if (res && res.response && res.response.catalogues) {
          if (!res || !res.response || !Array.isArray(res.response.catalogues) || res.response.catalogues.length <= 0) {
            return;
          }
          const catalogues = res.response.catalogues;
          this.navCtrl.push(screenTarget, { card, benefit, catalogues, 'cardIndex': this.currentCard  });
        } else {
        }
      }, (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
        () => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        });
    } else {
      if (!benefit || !benefit.url) {
        return;
      }
      const browser = this.iab.create(''  + benefit.url, "_system", "location=true");
    }
  }

  goCardDetails() {
    this.navCtrl.push("YourCardDetailsPage", { 'cardNumber': this.currentCardNumber });
  }

  gotoBuyPage() {
    this.navCtrl.setRoot('BuyPage', { 'cardNumber': this.currentCardNumber }).then(() => {
    });
  }

  ionViewWillEnter() {
    this.getContentHardCode();
  }

  ionViewDidEnter() {
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
        $('.app-root').removeClass('not-show-tab');
      this.showLoading = false;
      this.slideDirection = 1;
      this.listCards = [];
      this.listOffers = [];
      this.getCardsData();
    }

    this.calculateProductOnbasket();
  }

  calculateProductOnbasket() {
    this.productsOnBasket = 0;
    let dataBasket = MyShoppingBasketSharingDataService.getInstance().getDataBasket();

    for (let i = 0; i < (<any>dataBasket).productsOnBasket.length; i++) {
      this.productsOnBasket += parseInt(dataBasket.productsOnBasket[i].quantity);
    }
  }

  ionViewDidLeave() {
    this._unsubscribe();
  }

  _get4LastDigitsCardNumber(card) {
    if (!card.cardId) {
      return null;
    }
    let cardId = card.cardNumber;
    if (card.cardType === 'FLEXECODE_2.0' && cardId.indexOf('-') > 0) {
      cardId = cardId.replace(/-/g, "");
    }
    return cardId.substr(cardId.length - 4);
  }

  private _checkNocardHasBenefit() {
    const requests = this.listCards
      .map((card) => this._buildCardRequest(card))
      .map((body) => this.benefitsService.getOffersByCard(body))
      .map(request => request.do((res) => {
        const cats = res.response.categories;
        const buyOffers = this._filterOffersList(cats, 'buy');
        const exhangeOffers = this._filterOffersList(cats, 'exchange');
        if (buyOffers && exhangeOffers && buyOffers.length + exhangeOffers.length !== 0) {
          throw new Error(this.atLeastOneCardMSG);
        }
      }));

    const noCardHasBenefit$ = Observable.forkJoin(...requests);
    noCardHasBenefit$.subscribe(() => {
      this.alertNoBenefit();
    }, (error) => { });
  }

  public getContentHardCode() {
    const observer = {
      next: (res) => {
        if (Utils.isNotNull(res[0]) && Utils.isNotNull(res[0].response) && Utils.isNotNull(res[0].response.message)) {
          this.atLeastOneCardMSG = res[0].response.message;
        }

        if (Utils.isNotNull(res[1]) && Utils.isNotNull(res[1].response) && Utils.isNotNull(res[1].response.message)) {
          app.Configuration.ContentMessage.enter_csc = res[1].response.message;

        }

        if (Utils.isNotNull(res[2]) && Utils.isNotNull(res[2].response) && Utils.isNotNull(res[2].response.message)) {
          app.Configuration.ContentMessage.ecodes_mailed_to = res[2].response.message;
        }


        if (Utils.isNotNull(res[3]) && Utils.isNotNull(res[3].response) && Utils.isNotNull(res[3].response.message)) {
          app.Configuration.ContentMessage.add_card_important_card_info = res[3].response.message;
        }
      },
      error: (error) => {
      },
      complete: () => {
      }
    };
    Observable.combineLatest(
      this.benefitsService.getContentFromRetreiveContent("at-least-one-card"),
      this.benefitsService.getContentFromRetreiveContent("enter-csc"),
      this.benefitsService.getContentFromRetreiveContent("ecodes-mailed-to"),
      this.benefitsService.getContentFromRetreiveContent("add-card.important-card-info"),
    ).subscribe(observer)
  }

  alertNoBenefit() {
    let alert = this.alertCtrl.create({
      title: '',
      message: 'There are no benefits available.',
      cssClass: 'l2s-alert--default l2s-alert--flat  l2s-alert--centered',
      buttons: [{
        text: 'Ok',
        handler: data => { }
      },{
        text: '',
        cssClass: 'close-button icon icon-ios ion-ios-close',
        handler: data => {
        }
      }]
    });

    alert.present();
  }

  private _unsubscribe() {
    if (this._getCardDataSub) {
      this._getCardDataSub.unsubscribe();
    }
    if (this._getOfferSub) {
      this._getOfferSub.unsubscribe();
    }
  }

  private _getCardOffers(): Observable<any> {
    return this.benefitsService.getGenericsOffers()
  }

  private _buildCardRequest(card: any) {
    const body: CardOfferRequestBody = {
      propositionId: card.propositionId,
      productCode: card.productCode,
      scheme: card.scheme,
      series: card.series
    };
    return body;
  }

  private _filterShowCardList(cards: any) {
    if (!Array.isArray(cards)) {
      return [];
    }
    return cards.filter((card) => card.showBenefits == true);
  }

  private _buildOffer(offer: any) {
    offer.image = this._selectOfferImage(offer);
    return offer;
  }

  private _filterOffersList(offers: any, category?: string) {
    if (!category) {
      category = this.categoryName.toLocaleLowerCase();
    }
    if (offers && Array.isArray(offers)) {
      const cat = offers.find((offer) =>
        (offer.name.toLowerCase() == category));
      if (cat && Array.isArray(cat.subCategories)) {
        return cat.subCategories;
      }
    }

    return [];
  }

  private _selectOfferImage(offer: any) {
    return offer.images && Array.isArray(offer.images) && offer.images[0];
  }
}
