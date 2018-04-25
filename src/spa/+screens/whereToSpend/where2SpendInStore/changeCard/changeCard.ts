import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, AlertController, Tabs } from 'ionic-angular';
import { RouteManagerService } from "../../../../framework/services/routeManager/routeManager.service";
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Where2SpendSharingDataService } from "../../where2SpendSharingData.services";
import { Subscription } from "rxjs/Subscription";
import { RetriveRetailerRequest, VIRTUAL_MASTERCARD, Where2SpendServices } from "../../where2Spend.services";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { ToastMessageService } from "../../../../framework/services/toastMessageService/toastMessage.service";
import { LoadingIndicatorService } from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { NavService } from "../../../../shared/nav.service";
import { TabsPage } from "../../../Others/tabs/tabs";
import { AppConfig as app } from "../../../../framework/appConfig";
import { YourCardDetailsSharingDataService } from '../../../CardManagement/cardDetails/yourCardDetails/yourCardDetailsSharingData.services';

const VALID_CARD_TYPES = [];

const DEFAULT_ERROR_MSG = app.Configuration.HttpService.DEFAULT_ERROR_MSG;
const MASTER_CARD_TYPES = ['MASTERCARD', 'PMASTERCARD'];
const L2S_CARD_TYPES = ['FLEXECASH', 'FLEXECODE', 'FLEXECODE_2.0'];

@IonicPage()
@Component({
  selector: 'page-changeCard',
  templateUrl: 'changeCard.html',
  providers: [
    Where2SpendServices,
    InAppBrowser
  ]
})
export class ChangeCardPage {

  @ViewChild("tabs") tabs: Tabs;

  opemMsCardSub: Subscription;

  validCardType = VALID_CARD_TYPES;
  imageBaseUrl = 'https://www.love2shop.co.uk';
  listCards: any;

  private _cardClickSub: Subscription;

  constructor(
    public navCtrl: NavController,
    private where2SpendServices: Where2SpendServices,
    private iab: InAppBrowser,
    private navSvc: NavService,
    private tabPage: TabsPage,
    public routeManager: RouteManagerService) {
  }

  ionViewWillEnter() {
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      if (Where2SpendSharingDataService.getInstance()) {
        let needBackToYourCard = Where2SpendSharingDataService.getInstance().needBackToYOurCardDetail;
        if (needBackToYourCard === true) {

          this.navCtrl.push('Where2SpendInStoreMapPage');
          return;
        }
      }
      if (YourCardDetailsSharingDataService.getInstance()) {
        let cards = YourCardDetailsSharingDataService.getInstance().getCardsList();
        if (!cards || cards.length <= 0) {
          this.gotoAddCard();
        }
        this.listCards = this._filterCardsList(cards);
      }

    }
  }

  gotoAddCard() {
  }

  pickCardItem(item) {
    Where2SpendSharingDataService.getInstance().selectedCard = item;
    YourCardDetailsSharingDataService.getInstance().saveCardInforActive = item;
    if (this._isL2SCard(item)) {
      this._gotoMapPage();
    } else if (this._isMasterCard(item)) {
      this.gotoVirtalMsCard();
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
      }
    }, (err) => {
    })
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

  private _showError(message) {
    ToastMessageService.getInstance().showToastMessage(message);
  }

  private _gotoMapPage() {
    Where2SpendSharingDataService.getInstance().keepData = false;
    Where2SpendSharingDataService.getInstance().useMyLocation = true;
    Where2SpendSharingDataService.getInstance().keepLocation = false;
    Where2SpendSharingDataService.getInstance().currenrLocation = null;
    Where2SpendSharingDataService.getInstance().categories = null;

    this.navCtrl.push('Where2SpendInStoreMapPage');
  }

  private _filterCardsList(cards: any[]): any[] {
    const result = [];

    for (let card of cards) {
      if (this._filterCardFn(card)) {
        result.push(card);
      }
    }
    return result;
  }

  private _filterCardFn(card): boolean {
    return card && this._isValidCardType(card) && this._cardCanShowWhere2Spend(card);
  }

  private _isValidCardType(card): boolean {
    return this._isMasterCard(card) || this._isL2SCard(card);
  }

  private _isMasterCard(card): boolean {
    return card && card.cardType && MASTER_CARD_TYPES.indexOf(card.cardType) > -1;
  }

  private _isL2SCard(card): boolean {
    return card && card.cardType && L2S_CARD_TYPES.indexOf(card.cardType) > -1;
  }

  private _cardCanShowWhere2Spend(card): boolean {
    return true;
  }
}
