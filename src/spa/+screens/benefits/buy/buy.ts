import { CardOfferRequestBody, MAP_BENEFIT_BUY_PAGE } from './../benefits.service';
import { Component, ViewChild, OnChanges } from '@angular/core';
import { NavController, IonicPage, Slides, App, NavParams } from 'ionic-angular';
import { BenefitsService, RequestRetrieveCatalogue } from '../benefits.service';
import { RouteManagerService } from "../../../framework/services/routeManager/routeManager.service";
import { Subscription } from "rxjs/Subscription";
import { MyShoppingBasketSharingDataService } from "../../myShoppingBasket/myShoppingBasketSharingData.services";
import { LoadingIndicatorService } from "../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { BenefitsDataService } from "../benefitsData.service";
import $ from 'jquery';
import { AppConfig as app } from "../../../framework/appConfig";
import {Utils} from "../../../framework/services/utilities/utilities";
import { YourCardDetailsSharingDataService } from '../../CardManagement/cardDetails/yourCardDetails/yourCardDetailsSharingData.services';

@IonicPage()
@Component({
  selector: 'page-buy',
  templateUrl: 'buy.html',
  providers: [
    BenefitsService
  ]
})
export class BuyPage {
  disableExchangeTab: boolean;
  slideDirection: number;
  lastIndex: number;
  productsOnBasket: any = 0;
  baseImgUrl = 'https://uat.api.parkgroup.co.uk/';
  categoryName = 'buy';

  @ViewChild(Slides) slidesCard: Slides;

  showLoading: boolean = false;
  defaultCardNumber: string;
  currentCard: any;
  currentCardNumber: string;

  listCards: any = [];
  listOffers: any = [];
  baseResourceUrl;
  private _getCardDataSub: Subscription;
  private _getOfferSub: Subscription;

  constructor(
    private benefitsService: BenefitsService,
    public routeManager: RouteManagerService,
    public navParams: NavParams,
    public navCtrl: NavController, ) {
    this.baseResourceUrl = app.Configuration.HttpService.baseResourceUrl;
  }

  getCardsData() {
    let cards = YourCardDetailsSharingDataService.getInstance().getCardsList();
    cards = this._filterShowCardList(cards);
    this.listCards = cards.map((card) => {
      card.last4DigitCardNumber = this._get4LastDigitsCardNumber(card);
      card.schemeNumber = card.scheme;
      return card;
    });
    if (this.listCards.length <= 0) {
      this.gotoAddCard();
      return;
    }
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
              }  else  if (this.listCards[i].cardId === cardInforActive.cardID) {
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

  slideTo(index) {
    this.slidesCard.slideTo(index);
  }

  onSlideDidChange(event) {
    const currentCard = this.slidesCard.getActiveIndex();
    if (currentCard >= 0 && currentCard < this.listCards.length) {
      this.slideDirection = (this.currentCard <= currentCard) ? 1 : -1;
      this.currentCard = currentCard;
      this.currentCardNumber = this.listCards[currentCard].cardNumber;

      BenefitsDataService.getInstance().currentCardNumber = this.currentCardNumber;
      let card = {
        cardNumber: this.listCards[currentCard].cardNumber,
        cardID: this.listCards[currentCard].cardId,
      }
      YourCardDetailsSharingDataService.getInstance().saveCardInforActive = card;

      if (this._getOfferSub) {
        this._getOfferSub.unsubscribe();
      }
      this.updateOfferList();
    }
  }

  updateOfferList() {
    if (this._getOfferSub) {
      this._getOfferSub.unsubscribe();
    }
    this.listOffers = [];
    this.showLoading = true;
    const card = this.listCards[this.currentCard];
    const body = this._buildCardRequest(card);
    this.benefitsService.getOffersByCard(body).subscribe(res => {
      if (!res.ok) {
        return;
      }
      const cats = res.response.categories;
      const offfers = this._filterOffersList(cats);
      if (offfers && offfers.length > 0) {
        this.listOffers = offfers.map(this._buildOffer.bind(this));
      }
      const otherOffers = this._filterOffersList(cats, 'exchange');
      if (!otherOffers || otherOffers.length <= 0) {
        this.disableExchangeTab = true;
      } else {
        this.disableExchangeTab = false;
      }
    }, (error) => {
      this.showLoading = false;
    }, () => {
      this.showLoading = false;
    });
  }

  goCardDetails() {
    this.navCtrl.push("YourCardDetailsPage", { 'cardNumber': this.currentCardNumber });
  }

  gotoExchangePage() {
    this.navCtrl.setRoot('ExchangePage', { 'cardNumber': this.currentCardNumber });
  }

  gotoAddCard() {
    this.navCtrl.push('AddCardNumberPage');
  }

  onBenefitClick(benefit) {
    const card = this.listCards[this.currentCard];
    const screenTarget = MAP_BENEFIT_BUY_PAGE[benefit.name.toLowerCase()];
    if (screenTarget) {
      const urlKey = benefit.url;
      LoadingIndicatorService.getInstance().showLoadingIndicator();
      const catalogueReq: RequestRetrieveCatalogue = this.benefitsService.buildCatalogueRequestFromCard(card, urlKey);
      this.benefitsService.getRetrieveCatalogue(catalogueReq).subscribe(res => {
        if (!res || !res.response || !Array.isArray(res.response.catalogues) || res.response.catalogues.length <= 0) {
          return;
        }
        const catalogues = res.response.catalogues;
        this.navCtrl.push(screenTarget, { card, benefit, catalogues });
      }, (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
        () => {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
        });
    } else {
      this.navCtrl.push(MAP_BENEFIT_BUY_PAGE['default'], { benefit: benefit, card: card });
    }
  }

  ionViewDidEnter() {
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
        $('.app-root').removeClass('not-show-tab');
      if (BenefitsDataService.getInstance().currentCardNumber) {
        this.defaultCardNumber = BenefitsDataService.getInstance().currentCardNumber;
      }
      this.showLoading = false;
      this.slideDirection = 1;
      this.listCards = [];
      this.listOffers = [];
      this.getCardsData();
      this.calculateProductOnbasket();
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

  private _buildCardRequest(card: any) {
    const body: CardOfferRequestBody = {
      propositionId: card.propositionId,
      productCode: card.productCode,
      scheme: card.scheme,
      series: card.series
    };
    return body;
  }

  _get4LastDigitsCardNumber(card) {
    if (!card.cardId) {
      return null;
    }
    let cardId = card.cardId;
    if (card.cardType === 'FLEXECODE_2.0' && cardId.indexOf('-') > 0) {
      cardId = cardId.replace(/-/g, "");
    }
    return cardId.substr(cardId.length - 4);
  }

  private _unsubscribe() {
    if (this._getCardDataSub) {
      this._getCardDataSub.unsubscribe();
    }
    if (this._getOfferSub) {
      this._getOfferSub.unsubscribe();
    }
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
    };

    return [];
  }

  private _selectOfferImage(offer: any) {
    return offer.images && Array.isArray(offer.images) && offer.images[0];
  }

  private _filterShowCardList(cards: any) {
    const result = [];

    for (let card of cards) {
      if (card.showBenefits) {
        result.push(card);
      }
    }
    return result;
  }
}
