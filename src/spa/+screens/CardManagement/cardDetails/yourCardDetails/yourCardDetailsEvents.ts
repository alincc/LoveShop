import { IonicPage, NavController, Platform, Slides } from 'ionic-angular';
import { LoadingIndicatorService } from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { Subscription } from "rxjs/Rx";
import $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import { AppConfig as app } from "../../../../framework/appConfig";
import { RouteManagerService } from '../../../../framework/services/routeManager/routeManager.service';
import { YourCardDetailsApiGateway } from './yourCardDetailsApiGateway';
import { CardDetailSharingDataService } from '../cardDetailsSharing.services';
import { YourCardDetailsSharingDataService } from './yourCardDetailsSharingData.services';
import { ContentMessageService } from './contentMessage.service';
import { CardCategoryService } from './cardCategory.service';
import { CardType } from '../../../../models/card-type';
import { CardActiveService } from './cardActive.service';
import { AddCardEventService } from './addCardEvent.service';
import { Utils } from '../../../../framework/services/utilities/utilities';

export class YourCardDetailsEvents {
  lastIndex: number;
  imgBaseUrl;
  cardList: any = [];
  currentIndex: any = 0;
  baseResourceUrl;
  pauseSub: Subscription;

  //
  routeManager: RouteManagerService;
  platform: Platform;
  navCtrl: NavController;
  yourCardDetailsApiGateway: YourCardDetailsApiGateway;
  contentMessageService: ContentMessageService;
  cardCategoryService: CardCategoryService;
  cardActiveService: CardActiveService;
  addCardEventService: AddCardEventService;

  setupYourCardDetailsEvents(
    routeManager: RouteManagerService,
    platform: Platform,
    navCtrl: NavController,
    yourCardDetailsApiGateway: YourCardDetailsApiGateway,
    contentMessageService: ContentMessageService,
    cardCategoryService: CardCategoryService,
    cardActiveService: CardActiveService,
    addCardEventService: AddCardEventService
  ) {
    this.routeManager = routeManager;
    this.platform = platform;
    this.navCtrl = navCtrl;
    this.yourCardDetailsApiGateway = yourCardDetailsApiGateway;
    this.contentMessageService = contentMessageService;
    this.cardCategoryService = cardCategoryService;
    this.cardActiveService = cardActiveService;
    this.addCardEventService = addCardEventService;

    this.baseResourceUrl = app.Configuration.HttpService.baseResourceUrl;
    this.imgBaseUrl = app.Configuration.HttpService.baseResourceUrl;
    YourCardDetailsSharingDataService.getInstance().IsActiveYourCardDetailsPage = true;
    YourCardDetailsSharingDataService.getInstance().NumberOfCards = 0;
  }

  handleUpdateCardNickNameEvent(
    cardList,
    cardIndex,
    currentSlide,
    tempNickname,
    cardDetailsDataService
  ) {
    var promise1 = new Promise(function (resolve, reject) {
      const oldNickname = cardList[cardIndex].nickname;
      const currentCard = cardList[currentSlide];
      let cardNumber = '';
      if (currentCard.cardType === CardType.FLEXECODE || currentCard.cardType === CardType.FLEXECASH) {
        cardNumber = currentCard.cardNumber;
      }
      let modelNickName = {
        "propositionId": cardList[currentSlide].propositionId,
        "cardNumber": cardNumber,
        "nickname": tempNickname
      };

      LoadingIndicatorService.getInstance().showLoadingIndicator();
      const observer = {
        next: (res) => {
          if (!res.ok) {
            return;
          }
          cardList[cardIndex].nickname = tempNickname;
          resolve(tempNickname)
        },
        error: (error) => {
          reject(oldNickname);
        }
      };
      cardDetailsDataService
        .updateCardNickName(modelNickName)
        .finally(() => LoadingIndicatorService.getInstance().hideLoadingIndicator())
        .subscribe(observer);
    });

    return promise1;
  }

  handleViewAlertSettingsEventClick(currentCard, cardOpt) {
    let cardNumber = currentCard.cardNumber;
    const types = [CardType.PMASTERCARD, CardType.MASTERCARD];
    if (types.indexOf(currentCard.cardType.toUpperCase().trim()) !== -1) {
      cardNumber = currentCard.cardId;
    }
    this.navCtrl.push(cardOpt.cardOptLink, {
      cardNumber: cardNumber,
      cardId: cardOpt.cardId,
      balance: currentCard.balance
    });
  }


  yourCardDetailsEventsOnLoad() {
    $('.app-root').removeClass('not-show-tab');
    if (localStorage.getItem('no-reload-home-data')) {
      localStorage.removeItem('no-reload-home-data');
      return;
    }
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      YourCardDetailsSharingDataService.getInstance().resetState();
      this.retrieveCardsInfo();
      this.contentMessageService.getContentMessage();
    }
  }

  yourCardDetailsEventsOnLeave() {
    if (YourCardDetailsSharingDataService.getInstance().PauseSub) {
      YourCardDetailsSharingDataService.getInstance().PauseSub.unsubscribe();
      YourCardDetailsSharingDataService.getInstance().PauseSub = undefined;
    }
  }

  retrieveCardsInfo() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
        if (!res.ok) {
          return;
        }

        let body = res.response;
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
        if (Utils.isNotNull(body) && Utils.isNotNull(body.cards)) {
          YourCardDetailsSharingDataService.getInstance().NumberOfCards = body.cards.length;
          this.retrieveCardsInfoExtractData(body);
        }
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.yourCardDetailsApiGateway
      .getListCards()
      .subscribe(observer);
  }

  retrieveCardsInfoExtractData(body) {
    if (body.cards.length > 0) {
      let listCardInWallet = [];
      for (let card of body.cards) {
        let cardItem = this.cardCategoryService.buildCardItemBaseOnCategory(card);
        listCardInWallet.push(cardItem);
      }
      this.cardList = listCardInWallet;
      this.lastIndex = this.cardList.length - 1;
      YourCardDetailsSharingDataService.getInstance().saveCardsData(listCardInWallet);
      this.currentIndex = this.cardActiveService.getCardActiveIndex(this.cardList);
    } else {
      this.cardList = [];
      this.addCardEventService.raiseAddCardEvent();
    }
  }

  // tslint:disable-next-line:member-ordering
  private static _instance: YourCardDetailsEvents = new YourCardDetailsEvents();
  public static getInstance(): YourCardDetailsEvents {
    return YourCardDetailsEvents._instance;
  }
  constructor() {
    if (YourCardDetailsEvents._instance) {
      throw new Error('Error: Instantiation failed: '
        + 'Use YourCardDetailsEvents.getInstance() instead of new.');
    }

    YourCardDetailsEvents._instance = this;
  }
}
