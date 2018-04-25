import { Component, ViewChild } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, Slides, Platform } from 'ionic-angular';
import { CardDetailsDataService } from "../cardDetailsData.service";
import { LoadingIndicatorService } from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { Utils } from "../../../../framework/services/utilities/utilities";
import { ToastMessageService } from "../../../../framework/services/toastMessageService/toastMessage.service";
import { CardDetailSharingDataService } from "../cardDetailsSharing.services";
import { RouteManagerService } from "../../../../framework/services/routeManager/routeManager.service";
import { CardType } from "../../../../models/card-type";
import { Where2SpendSharingDataService } from "../../../whereToSpend/where2SpendSharingData.services";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { HttpService } from "../../../../framework/services/httpService/http.service";
import {
  RetriveRetailerRequest,
  VIRTUAL_MASTERCARD,
  Where2SpendServices
} from "../../../whereToSpend/where2Spend.services";
import { RefundValueService } from "../../refundValue/refundValue.service";
import { ViewCardStatementService } from "../../viewCardStatement/viewCardStatement.service";
import { BenefitsDataService } from "../../../benefits/benefitsData.service";
import { TabsPage } from '../../../Others/tabs/tabs';
import { DestroyWL } from '../../../../../decorators';
import { Subject } from 'rxjs/Subject';
import { NavService } from "../../../../shared/nav.service";
import { AppConfig as app } from "../../../../framework/appConfig";
import {Observable} from 'rxjs/Observable';
import { YourCardDetailsApiGateway } from './yourCardDetailsApiGateway';
import { ContentMessageService } from './contentMessage.service';
import { CardCategoryService } from './cardCategory.service';
import { CardActiveService } from './cardActive.service';
import { AddCardEventService } from './addCardEvent.service';
import { CardInfoService } from "./cardInfo.service";
import {YourCardDetailsEvents} from "./yourCardDetailsEvents";
import {YourCardDetailsSharingDataService} from "./yourCardDetailsSharingData.services";
import $ from 'jquery';
const DEFAULT_ERROR_MSG = app.Configuration.HttpService.DEFAULT_ERROR_MSG;

@IonicPage()
@Component({
  selector: 'page-yourCardDetails',
  templateUrl: 'yourCardDetails.html',
  providers: [
    CardDetailsDataService,
    Where2SpendServices,
    InAppBrowser,
    ViewCardStatementService,
    YourCardDetailsSharingDataService,
    RefundValueService,
    YourCardDetailsApiGateway,
    ContentMessageService,
    CardCategoryService,
    CardActiveService,
    AddCardEventService,
    CardInfoService
  ]
})
export class YourCardDetailsPage {
  opemMsCardSub: any;
  lastIndex: number;
  @ViewChild(Slides) cardSlides: Slides;
  initialSlide: number = 0;

  isEditCardTitle: boolean = false;
  showMasterCardDetail: boolean = false;
  currentMasterCard: any = {};
  masterCardInfor: any = {};
  canShowMoreButton: boolean = false;

  tempNickname: string = '';

  defaultCardId: string = '';
  currentSlide: any = 0;
  cardButtons: any = [];
  cardOptions: any = [];

  cardList: any = [];
  baseResourceUrl;
  showMoreCardOptions: boolean = false;
  suspend_card_portlet_suspend_card;
  remove_card_confirm;
  enter_account_password_to_view_card = app.Configuration.ContentMessage.enter_account_password_to_view_card;

  constructor(private navParams: NavParams,
    public navCtrl: NavController,
    public routeManager: RouteManagerService,
    public alertCtrl: AlertController,
    private where2SpendServices: Where2SpendServices,
    private viewCardStatementService: ViewCardStatementService,
    private iab: InAppBrowser,
    private http: HttpService,
    private returnService: RefundValueService,
    private cardDetailsDataService: CardDetailsDataService,
    private navSvc: NavService,
    private platform: Platform,
    private yourCardDetailsApiGateway: YourCardDetailsApiGateway,
    private contentMessageService: ContentMessageService,
    private cardCategoryService: CardCategoryService,
    private cardActiveService: CardActiveService,
    private addCardEventService: AddCardEventService
  ) {
    this.baseResourceUrl = app.Configuration.HttpService.baseResourceUrl;
    
    // setting up your card details events
    YourCardDetailsEvents.getInstance().setupYourCardDetailsEvents(
      this.routeManager,
      this.platform,
      this.navCtrl,
      this.yourCardDetailsApiGateway,
      this.contentMessageService,
      this.cardCategoryService,
      this.cardActiveService,
      this.addCardEventService
    );

    YourCardDetailsSharingDataService.getInstance().updateListCard$.asObservable().subscribe((action) => {
      if (action == 'update') {
        this.retrieveCardsInfo();
      }
    });
    // refresh list cards after top up successfully.
    YourCardDetailsSharingDataService.getInstance().refreshListCards$.asObservable().subscribe((action) => {
      if (action == 'update-list-cards-after-topup-successfully') {
        this.retrieveCardsInfo();
      }
    });
  }

  getCardNickname(card): string {
    return (card && card.nickname) ? card.nickname : '';
  }

  gotoAddCardNumber() {

    YourCardDetailsSharingDataService.getInstance().needBackToYourCard = true;
    this.navCtrl.push('AddCardNumberPage');
  }

  ionViewDidLeave() {
    YourCardDetailsEvents.getInstance().yourCardDetailsEventsOnLeave();

    YourCardDetailsSharingDataService.getInstance().goToFromAddCard = false;
    if (Utils.isNotNull(this.cardSlides) && Utils.isNotNull(this.cardSlides.getActiveIndex())) {
      let index = this.cardSlides.getActiveIndex();
      CardDetailSharingDataService.getInstance().gotoCardData = this.cardList[index];
    }
  }

  ionViewDidEnter() {
    $('.app-root').removeClass('not-show-tab');
    if (localStorage.getItem('no-reload-home-data')) {
      localStorage.removeItem('no-reload-home-data');
      return;
    }
    YourCardDetailsSharingDataService.getInstance().resetState();

    this.initialSlide = 0;
    this.showMoreCardOptions = false;
    this.currentSlide = 0;
    this.canShowMoreButton = true;
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      this.retrieveCardsInfo();
    }
  }

  goToActiveCard() {
    this.currentSlide = this.cardActiveService.getActiveCardIndex4Slide2(this.cardList);
    if (this.cardSlides) {
      this.cardSlides.update();
    }
    if (Utils.isNotNull(this.cardSlides)) {
      setTimeout(() =>
        this.cardSlides && this.cardSlides.slideTo(this.currentSlide, 0), 200
      )
    }
  }

  canEditCardTitle(card): boolean {
    return !!(card && (card.cardType === CardType.FLEXECASH) || (card.cardType === CardType.FLEXECODE));
  }

  showButtonCardItem(cardItem): boolean {
    if (cardItem.cardBtnName === 'YOUR BENEFITS' && !cardItem.showBenefits) {
      return false;
    }
    if (cardItem.cardBtnName === 'Top Up' && !cardItem.canTopUp) {
      return false;
    }
    if (cardItem.cardBtnName === 'TRANSACTIONS/BALANCE' && cardItem.canNotOpenLink) {
      return false;
    }
    return true;
  }

  slideChanged() {
    this.masterCardInfor = {};
    this.showMoreCardOptions = false;
    const currentSlide = this.cardSlides.getActiveIndex();
    const length = this.cardSlides.length();
    if (currentSlide < length && length > 0 && currentSlide >= 0
      && Array.isArray(this.cardList) && this.cardList.length > 0) {
      this.isEditCardTitle = false;
      this.currentSlide = currentSlide;
      const currentCard = this.cardList[currentSlide];
      this.tempNickname = currentCard.nickname || '';
      this.cardButtons = currentCard.buttons;
      this.cardOptions = currentCard.options;
      this.showMasterCardDetail = false;
      this.showMoreCardOptions = false;
      this.currentMasterCard = {};
      this.canShowMoreButton = this.checkCanShowMoreButton(currentCard);
      CardDetailSharingDataService.getInstance().gotoCardData = this.cardList[this.currentSlide];
      let card = {
        cardNumber: this.cardList[currentSlide].cardNumber,
        cardID: this.cardList[currentSlide].cardId,
      }
      YourCardDetailsSharingDataService.getInstance().saveCardCurrent = card;
      YourCardDetailsSharingDataService.getInstance().saveCardInforActive = card;
    }

    if (currentSlide >= length) {
      this.cardSlides && this.cardSlides.slideTo(length - 1, 0);
    }
  }

  checkCanShowMoreButton(cardItem): boolean {
    return !!cardItem && cardItem.walletType !== 'SUPERMARKET';
  }

  updateCardNickName(cardIndex) {
    this.isEditCardTitle = false;
    YourCardDetailsEvents.getInstance().handleUpdateCardNickNameEvent(
      this.cardList,
      cardIndex,
      this.currentSlide,
      this.tempNickname,
      this.cardDetailsDataService
    ).then(
      commitedName => {
        this.cardList[cardIndex].nickname = commitedName;
      },
      rollbackName => {
        this.cardList[cardIndex].nickname = rollbackName;
      }
    );
  }

  get4LastDigitsCardNumber(card) {
    let cardNumber = null;
    if (card.cardType === CardType.FLEXECODE) {
      cardNumber = card.cardId;
    } else {
      cardNumber = card.cardNumber;
    }

    if (!cardNumber) {
      return null;
    }

    if (card.cardType === CardType.FLEXECODE && cardNumber.indexOf('-') > 0) {
      cardNumber = cardNumber.replace(/-/g, "");
    }
    return cardNumber.substr(cardNumber.length - 4);
  }

  retrieveCardsInfo(reset = false) {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (!res.ok) {
          return;
        }
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
        let body = res.response;
        if (body.cards.length > 0) {
          let listCardInWallet = [];
          for (let card of body.cards) {
            let cardItem = card;
            let cardCategory = this.cardCategoryService.buildCardItemBaseOnCategory(card);
            cardItem.buttons = cardCategory.buttons;
            cardItem.options = cardCategory.options;
            listCardInWallet.push(cardItem);
          }
          this.cardList = listCardInWallet;

          this.lastIndex = this.cardList.length - 1;
          YourCardDetailsSharingDataService.getInstance().saveCardsData(listCardInWallet);
          if (reset && this.cardSlides) {
            this.cardSlides.slideTo(0, 0);
          }

          if (!Array.isArray(this.cardList) || this.cardList.length <= 0) {
            this.navCtrl.setRoot('TabsPage', { noVerify: true, keepData: true });
          }

          this.goToActiveCard();

          let cardIndexDataReload = this.cardActiveService.getActiveIndex4CardDataReload(this.cardList)
          if (cardIndexDataReload.cardActiveIndex !== -1) {
            this.currentSlide = cardIndexDataReload.cardActiveIndex;
            this.defaultCardId = cardIndexDataReload.defaultCardId;
            if(Utils.isNotNull(this.cardSlides)) {
              this.cardSlides.update();
              setTimeout(() =>
                this.cardSlides && this.cardSlides.slideTo(this.currentSlide, 0), 200
              )
            }
          } else {
            this.cardSlides && this.cardSlides.slideTo(0, 0)
          }

          if (Array.isArray(this.cardList) && this.cardList.length > this.currentSlide) {
            this.cardButtons = this.cardList[this.currentSlide].buttons;
            this.cardOptions = this.cardList[this.currentSlide].options;
          } else {
            this.cardButtons = [];
            this.cardOptions = [];
          }

          if (Utils.isNotNull(this.cardSlides) && Utils.isNotNull(this.cardSlides.getActiveIndex())) {
            const currentIndex = 0;
            let card = {
              cardNumber: this.cardList[currentIndex].cardNumber,
              cardID: this.cardList[currentIndex].cardId,
            }
            YourCardDetailsSharingDataService.getInstance().saveCardCurrent = card;
          }

        } else {
          this.cardList = [];
          this.addCardEventService.raiseAddCardEvent();
        }
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };

    this.yourCardDetailsApiGateway
      .getListCards()
      .subscribe(observer);
  }

  openEditCardName() {
    const index = this.cardSlides.getActiveIndex();
    const card = this.cardList[index];
    this.isEditCardTitle = true;
    this.tempNickname = card.nickname;
  }

  getCardButtonClass(item): string {
    let className;
    if (item && item.cardBtnName && item.cardBtnName == 'Top Up') {
      className = 'l2s-btn l2s-btn--default btn-uppercase card-btn m-b-10';
    } else if (item && item.cardBtnName && item.cardBtnName == 'YOUR BENEFITS') {
      className = 'l2s-btn l2s-btn--primary btn-uppercase card-btn';
    } else {
      className = 'l2s-btn l2s-btn--outline l2s-btn--outline-other btn-uppercase card-btn m-t-10';
    }

    return className;
  }

  getCardOptionClass(item): string {
    return 'l2s-btn l2s-btn--outline btn-uppercase card-btn';
  }

  slideTo(index) {
    this.cardSlides.slideTo(index, 0);
  }

  handleSuppendCard() {
    const currentCard = this.cardList[this.currentSlide];
    const status = currentCard && currentCard.status;
    let alertReportLostOrStolen;
    if (status && status.toUpperCase() === 'SUSPENDED') {
      alertReportLostOrStolen = this.alertCtrl.create({
        title: 'Card/e-code suspended',
        message: `<p>
        To unsuspend your card or arrange for a replacement card/e-code* please call
        <a href="tel:03443750739">0344 375 0739</a> between 9am and 5pm, Monday to Friday, excluding UK Bank Holidays.</p><p><small>
*A fee will be applied to cover administration and delivery costs - please see card/e-code
terms &amp; conditions for further details.
<br>
Allow 10 working days for delivery.
</small></p>
        `,
        cssClass: 'l2s-alert--default l2s-alert--flat l2s-alert--centered',
        buttons: [
          {
            text: 'Return to your cards',
            cssClass: ''
          }
          ,{
            text: '',
            cssClass: 'close-button icon icon-ios ion-ios-close',
            handler: data => {
            }
          }
        ]
      });
    } else {
      alertReportLostOrStolen = this.alertCtrl.create({
        title: 'Lost or Stolen',
        message: this.suspend_card_portlet_suspend_card,
        cssClass: 'l2s-alert--flat l2s-alert--twobutton',
        buttons: [
          {
            text: 'Suspend card/ e-code',
            cssClass: 'main-button',
            handler: data => {
              let cardModel = {
                "cardID": currentCard.cardNumber,
                "cardType": currentCard.cardType
              };
              if (currentCard.cardType === CardType.PMASTERCARD) {
                cardModel.cardID = currentCard.cardId;
              }
              LoadingIndicatorService.getInstance().showLoadingIndicator();
              this.cardDetailsDataService
                .suspendCard(cardModel)
                .subscribe(res => {
                  let alertSuppendSuccess = this.alertCtrl.create({
                    cssClass: 'l2s-alert--default l2s-alert--centered l2s-alert--flat',
                    title: 'Card/ e-code suspended',
                    message: `To unsuspend your card or arrange for a replacement card/e-code* please call <a href="tel:03443750739">0344 375 0739</a> between 9am and 5pm, Monday to Friday, excluding UK Bank Holidays. <br> <small>*A fee will be applied to cover administration and delivery cost - please see card/e-code terms & conditions for further details. Allow 10 working days for delivery.</small>`,
                    buttons: [{
                      text: 'Return to your cards',
                      handler: data => {
                        this.retrieveCardsInfo();
                      }
                    },{
                      text: '',
                      cssClass: 'close-button icon icon-ios ion-ios-close',
                      handler: data => {
                      }
                    }]
                  });
                  alertSuppendSuccess.present();
                }, () => {
                  LoadingIndicatorService.getInstance().hideLoadingIndicator();
                },
                () => {
                  LoadingIndicatorService.getInstance().hideLoadingIndicator();
                }
                );
            }
          },
          {
            text: 'Cancel',
            cssClass: 'cancel-button',
            handler: data => {
            }
          },

          {
            text: '',
            cssClass: 'close-button icon icon-ios ion-ios-close',
            handler: data => {
            }
          }
        ]
      });
    }
    alertReportLostOrStolen.present();
  }

  public getListCardStatement(cardData) {

    let req;
    if (cardData.cardType === 'MASTERCARD' || cardData.cardType === 'PMASTERCARD') {
      req = {
        "cardID": cardData.cardId,
        "issuer": cardData.issuer
      };
    } else {
      req = {
        "cardID": cardData.cardNumber
      };
    }
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    this.viewCardStatementService.getStatementList(req)
      .subscribe((res) => {

        if (!res.ok) {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
          return;
        }

        let body = res.response;
        this.navCtrl.push('ViewCardStatementPage', { cardCurrent: cardData, data: body })
      }, (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }, () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      });
  }

  removeCardConfirm() {
    let cardItem = this.cardList[this.currentSlide];
    let cardModel: any = {
      "propositionId": cardItem.propositionId,
      "cardNumber": cardItem.cardNumber
    };
    if (cardItem.cardType === CardType.SAINSBURYS) {
      cardModel.serialNumber = cardItem.serialNumber;
    }
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (!res.ok) {
          return;
        }

        let card = {
          reloadData: true,
          cardId: '',
          cardNumber: '',
        }
        CardDetailSharingDataService.getInstance().gotoCardDataReload = card;

        setTimeout(() => {
          this.retrieveCardsInfo();
        }, 100);
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.cardDetailsDataService
      .removeCard(cardModel)
      .subscribe(observer);
  }

  handleRemoveCard() {
    let promptConfirmRemove = this.alertCtrl.create({
      title: '',
      subTitle: '',
      cssClass: 'l2s-alert--flat l2s-alert--twobutton',
      message: app.Configuration.ContentMessage.wallet_remove_card_message,
      buttons: [
        {
          text: 'Cancel',
          cssClass: 'cancel-button',
          handler: data => {
          }
        },
        {
          text: 'Yes, Remove',
          cssClass: 'main-button',
          handler: data => {
            this.removeCardConfirm();
          }
        },

        {
          text: '',
          cssClass: 'close-button icon icon-ios ion-ios-close',
          handler: data => {
          }
        }
      ]
    });
    promptConfirmRemove.present();
  }

  handleCardOption(cardOpt) {
    const currentCard = this.cardList[this.currentSlide];
    if (cardOpt.cardOptLink != '') {
      if (cardOpt.cardOptName === 'Alerts') {
        if (currentCard.canRegisterSms === true) {
          this.viewAlertSettingsScreen(currentCard, cardOpt);
        } else {
          this.blockedCardShouldNotBeAble2SetupAlerts();
        }
      } else if (cardOpt.cardOptName === 'Refund value') {
        this.validateVirtualMasterCard(this.currentSlide);
      } else if (cardOpt.cardOptName == "Help") {
        let code = 'app.l2s.faqs';
        this.retrieveMessage(code);
      } else if (cardOpt.cardOptName == 'TERMS & CONDITIONS' && currentCard.termsPath) {
        const url = this._normalizeUrl(currentCard.termsPath);
        const browser = this.iab.create(url, "_system", "location=true");
      } else {
        this.navCtrl.setRoot(cardOpt.cardOptLink, { cardId: cardOpt.cardId });
      }
    } else if (cardOpt.cardOptName != null && cardOpt.cardOptName != '') {
      const optionName = cardOpt.cardOptName.toUpperCase().trim();
      if (optionName === 'REPORT LOST OR STOLEN' || optionName === 'SUSPEND') {
        this.handleSuppendCard();
      } else if (cardOpt.cardOptName.toUpperCase() === 'REMOVE') {
        this.handleRemoveCard();
      }
    }
  }

  viewAlertSettingsScreen(currentCard, cardOpt) {
    YourCardDetailsEvents.getInstance().handleViewAlertSettingsEventClick(currentCard, cardOpt);
  }

  blockedCardShouldNotBeAble2SetupAlerts() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
        if (!res.ok) {
          return;
        }

        if (Utils.isNotNull(res) && Utils.isNotNull(res.response) && Utils.isNotNull(res.response.message)) {
          ToastMessageService.getInstance().showToastMessage(res.response.message);
        }
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.cardDetailsDataService
      .getContentFromRetreiveContent("flexecash.sms.register.not-available")
      .subscribe(observer);
  }


  validateVirtualMasterCard(indexCard) {
    let cardCurrent = this.cardList[indexCard];
    let cardID = {
      'cardID': cardCurrent.cardId
    }

    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (!res.ok) {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
          return;
        }

        let body = res.response;
        if (Utils.isNotNull(body)) {
          this.navCtrl.push('RefundValuePage', {
            'cardIndex': this.currentSlide,
            'totalRefund': body.totalRefund
          })
        }
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.returnService
      .postValidateVirtualMasterCard(cardID)
      .subscribe(observer);
  }

  canPrintCardDetail(cardButtons) {
    return this.showMasterCardDetail && cardButtons.cardBtnName &&
      cardButtons.cardBtnName.toUpperCase().trim() === 'Retrieve Card Details'.toUpperCase();
  }

  hidePrintCardDetail() {
    this.showMasterCardDetail = false;
    this.masterCardInfor = false;
  }

  handleCardButton(cardButtons) {
    if (cardButtons.cardBtnName &&
      cardButtons.cardBtnName.toUpperCase().trim() === 'Retrieve Card Details'.toUpperCase()) {

      const currentCard = this.cardList[this.currentSlide];
      if (Utils.isNull(this.masterCardInfor.cvv)) {
        this.presentPrompt(currentCard.cardId);
      }

      this.currentMasterCard = {
        cardID: this.masterCardInfor.cardId || '',
        cardNumber: this.masterCardInfor.cardNumber || '',
        cvv: this.masterCardInfor.cvv || '',
        expiryDate: currentCard.expiryDate || '',
        nickname: this.masterCardInfor.nickname || ''
      }
    } else {
      const currentCard = this.cardList[this.cardSlides.getActiveIndex()];

      if (cardButtons.cardBtnLink == "SCardFAQPage" && cardButtons.cardSecondaryBtnLink == 'SCardFAQPage') {
        this.navCtrl.push('CardFAQPage', { cardType: currentCard.cardType })
        return;
      }

      if (cardButtons.cardBtnLink == 'ExchangePage') {
        BenefitsDataService.getInstance().currentCardNumber = currentCard.cardNumber;
        this.navCtrl.parent.select(2);
        return;
      }

      if (cardButtons.cardBtnLink == "AmountTopUpPage") {
        const currentSlide = this.cardSlides.getActiveIndex();
        let card = {
          cardNumber: this.cardList[currentSlide].cardNumber,
          cardID: this.cardList[currentSlide].cardId,
        }
        YourCardDetailsSharingDataService.getInstance().saveCardCurrent = card;

        this.navCtrl.push(cardButtons.cardBtnLink, {
          cardNumber: this.currentMasterCard.cardNumber,
          cardType: currentCard.cardType,
          cardSelected: this.cardList[this.cardSlides.getActiveIndex()],
          cardIndex: this.cardSlides.getActiveIndex(),
          rootPage: true
        })
        return;
      }

      if (cardButtons.cardBtnLink == "ViewCardStatementPage") {

        this.getListCardStatement(this.cardList[this.cardSlides.getActiveIndex()]);
        return;
      }

      if (cardButtons.cardBtnLink == 'ViewSCardStatementPage') {

        const rawUrl = this.cardList[this.cardSlides.getActiveIndex()].externalTransactionLink;
        if (rawUrl) {
          const url = this._normalizeUrl(rawUrl);
          const browser = this.iab.create(url, "_system", "location=true");
        }
        return;
      }

      if (cardButtons.cardBtnName == 'Top Up Information') {
        this.navCtrl.push('TopUpInfoPage', { cardType: currentCard.cardType });
        return;
      }

      if (cardButtons.cardBtnName == 'WHERE TO SPEND') {

        Where2SpendSharingDataService.getInstance().selectedCard = currentCard;
        const cardType: string = (currentCard && typeof currentCard.cardType == 'string') ? currentCard.cardType : '';
        if (cardType == CardType.MASTERCARD || cardType == CardType.PMASTERCARD) {
          this.gotoVirtalMsCard();
        } else {
          Where2SpendSharingDataService.getInstance().keepData = false;
          Where2SpendSharingDataService.getInstance().useMyLocation = true;
          Where2SpendSharingDataService.getInstance().keepLocation = false;
          Where2SpendSharingDataService.getInstance().currenrLocation = null;
          Where2SpendSharingDataService.getInstance().categories = null;
          Where2SpendSharingDataService.getInstance().needBackToYOurCardDetail = true;
          this.navCtrl.parent.select(1);
        }
        return;
      }

      this.navCtrl.push(cardButtons.cardBtnLink, {
        cardNumber: this.currentMasterCard.cardNumber,
        cardType: currentCard.cardType,
        cardSelected: this.cardList[this.cardSlides.getActiveIndex()]
      });
      this.currentMasterCard = {};
      this.showMasterCardDetail = false;
    }
  }

  gotoVirtalMsCard() {
    if (this.opemMsCardSub) {
      this.opemMsCardSub.unsubscribe();
    }
    const body: RetriveRetailerRequest = { requestType: VIRTUAL_MASTERCARD };
    this.opemMsCardSub = this.where2SpendServices.retriveRetailerLocation(body).subscribe(res => {
      if (res && res.response && res.response.link) {
        let url = res.response.link;
        const browser = this.iab.create(url, "_system", "location=true");
      } else {
        this._handleError(res);
      }
    }, (err) => {
      this._handleError(err);
    })
  }

  presentPrompt(cardId) {
    let alert = this.alertCtrl.create({
      title: '',
      message: this.enter_account_password_to_view_card,
      cssClass: 'l2s-alert--flat l2s-alert--default  alert-has-validation validate-password',
      inputs: [
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Submit',
          cssClass: 'main-button validate-target validate-field-password',
          handler: data => {
            let body = {
              "cardID": cardId,
              "password": data.password
            };
            this.updateCardToken(body);
          }
        },
        {
          text: '',
          cssClass: 'close-button icon icon-ios ion-ios-close',
          handler: data => {
          }
        }
      ],
      enableBackdropDismiss: false
    });
    alert.didEnter.subscribe(() => {
      this.injectAlertInputStyle();
      this.initAlertPasswordValidator();
    });
    alert.present();
  }

  injectAlertInputStyle() {
    const alert = document.querySelector('.alert-has-validation');
    const passwordInput = alert && alert.querySelectorAll('.alert-input').item(0);
    if (passwordInput) {
      passwordInput.classList.add('l2s-input-md');
    }
  }

  initAlertPasswordValidator() {
    const alert = document.querySelector('.alert-has-validation');
    const passwordInput = alert && alert.querySelectorAll('.alert-input').item(0);
    if (!passwordInput) {
      return;
    }
    const button = document.querySelector('.validate-target.validate-field-password');
    button.setAttribute('disabled', 'true');

    passwordInput.addEventListener('input', (avent: Event) => {
      const value = (<HTMLInputElement>(event.target)).value;
      if (!button) {
        return;
      }

      if (value) {
        button.removeAttribute('disabled');
      } else {
        button.setAttribute('disabled', 'true');
      }
    });
  }

  retrieveMessage(code) {
    this.http.get("cms/message/code=" + code).subscribe(res => {
      if (res && res.response && res.response.message) {
        const url = res.response.message;
        const browser = this.iab.create(url, "_system", "location=true");
      }
    });
  }

  retrieveContent(urlTitle) {
    this.http.get("cms/content/urlTitle=" + urlTitle).subscribe(res => {
      if (res && res.response && res.response.content) {
        const url = res.response.content;
        const browser = this.iab.create(url, "_system", "location=true");
      }
    });
  }


  public getContentMSG() {
    const observer = {
      next: (res) => {
        if (Utils.isNotNull(res[0]) && Utils.isNotNull(res[0].response) && Utils.isNotNull(res[0].response.message)) {
          app.Configuration.ContentMessage.cardCsc_required = res[0].response.message;
        }

        if (Utils.isNotNull(res[1]) && Utils.isNotNull(res[1].response) && Utils.isNotNull(res[1].response.message)) {
          this.suspend_card_portlet_suspend_card = res[1].response.message;

        }

        if (Utils.isNotNull(res[2]) && Utils.isNotNull(res[2].response) && Utils.isNotNull(res[2].response.message)) {
          this.remove_card_confirm = res[2].response.message;
        }
      },
      error: (error) => {
      },
      complete: () => {
      }
    };
    Observable.combineLatest(
      this.yourCardDetailsApiGateway.getMessageByCode("to_usnuspend"),
      this.yourCardDetailsApiGateway.getMessageByCode("suspend-card-portlet-suspend-card"),
      this.yourCardDetailsApiGateway.getMessageByCode("remove-card-confirm")
    ).subscribe(observer)
  }



  private _normalizeUrl(url) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      if (url.startsWith('/')) {
        return 'https://www.love2shop.co.uk' + url;
      }
      return 'http://' + url;
    }

    return url;
  }

  updateCardToken(body) {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    this.cardDetailsDataService.retrieveMasterCardInfo(body)
      .subscribe((res) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
        if (!res.ok) {
          return;
        }
        let body = res.response;

        this.masterCardInfor = body;
        const currentCard = this.cardList[this.currentSlide];
        this.currentMasterCard = {
          cardID: this.masterCardInfor.cardId || '',
          cardNumber: this.masterCardInfor.cardNumber || '',
          cvv: this.masterCardInfor.cvv || '',
          expiryDate: currentCard.expiryDate || '',
          nickname: this.masterCardInfor.nickname || ''
        };
        this.showMasterCardDetail = !this.showMasterCardDetail;
      }, (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }, () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      });
  }

  private _showError(message) {
    ToastMessageService.getInstance().showToastMessage(message);
  }

  private _handleError(res) {
    LoadingIndicatorService.getInstance().hideLoadingIndicator();
    let msg = DEFAULT_ERROR_MSG;
    try {
      let body = JSON.parse(res._body);
      msg = body.errors[0].message;
    } catch (e) {
      msg = DEFAULT_ERROR_MSG;
    }
    this._showError(msg);
  }
}
