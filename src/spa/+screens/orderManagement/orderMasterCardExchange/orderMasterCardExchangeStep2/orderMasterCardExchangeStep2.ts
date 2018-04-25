import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RouteManagerService} from '../../../../framework/services/routeManager/routeManager.service';
import {OrderMasterCardExchangeSharingDataService} from "../orderMasterCardExchangeSharingData.services";
import {CardDetailSharingDataService} from "../../../CardManagement/cardDetails/cardDetailsSharing.services";
import $ from 'jquery';
import {YourCardDetailsApiGateway} from "../../../Others/home/yourCardDetailsApiGateway";
import {AppConfig as app} from "../../../../framework/appConfig";
import {YourCardDetailsSharingDataService} from "../../../CardManagement/cardDetails/yourCardDetails/yourCardDetailsSharingData.services";
@IonicPage()
@Component({
  selector: 'page-orderMasterCardExchangeStep2',
  templateUrl: 'orderMasterCardExchangeStep2.html'
})
export class OrderMasterCardExchangeStep2 {
  cardId;
  orderComplete;
  orderInforAfterGenerate;
  cardPrimary;
  cardVirtualToShowOnCard;
  imageMasterCard;
  baseResourceUrl;
  masterCardTypeSelected;
  purchasemastercard_form_label_card_details= app.Configuration.ContentMessage.purchasemastercard_form_label_card_details;
  order_confirmation_card_tfoot= app.Configuration.ContentMessage.order_confirmation_card_tfoot;

  constructor(public routeManager: RouteManagerService,
              private navParams: NavParams,
              public navCtrl: NavController,) {
  }

  ionViewWillEnter() {
    $('.app-root').addClass('not-show-tab');
    this.baseResourceUrl = app.Configuration.HttpService.baseResourceUrl;
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      if (this.navParams.get('orderSuccess')) {
        this.orderComplete = this.navParams.get('orderSuccess');
      }
      if (this.navParams.get('orderInforAfterGenerate')) {
        this.orderInforAfterGenerate = this.navParams.get('orderInforAfterGenerate');
      }
      if (this.navParams.get('cardPrimary')) {
        this.cardPrimary = this.navParams.get('cardPrimary');
      }

      if (this.navParams.get('imageMasterCard')) {
        this.imageMasterCard = this.navParams.get('imageMasterCard');
      }

      this.orderComplete.orderNumber = this.orderInforAfterGenerate.orderNumber;
      this.orderComplete.logoPath = this.cardPrimary.cardLogoPath;
      this.orderComplete.title = this.orderInforAfterGenerate.title;
      this.orderComplete.lastName = this.orderInforAfterGenerate.lastName;
      this.orderComplete.firstName = this.orderInforAfterGenerate.firstName;
      this.orderComplete.totalPaymentAmount = this.orderInforAfterGenerate.orderlines[0].paymentAmount;

      let virtualCardNumber = this.orderComplete.cardNumber;
      this.cardVirtualToShowOnCard = virtualCardNumber.replace(/(\d{4})/g, '$1 ');

    }
  }

  ionViewWillLeave() {
    $('.app-root').removeClass('not-show-tab');
  }


  goCardDetails() {
    let card = {
      reloadData: true,
      cardNumber: this.orderComplete.cardNumber,
      cardId: this.orderComplete.cardID
    }
    CardDetailSharingDataService.getInstance().gotoCardDataReload = card;
    YourCardDetailsSharingDataService.getInstance().saveCardInforActive = card;
    this.navCtrl.popToRoot({animate: false, duration: 0});
    setTimeout(() => this.navCtrl.parent.select(0, {animate: false, duration: 0}), 200
    )
  }
}
