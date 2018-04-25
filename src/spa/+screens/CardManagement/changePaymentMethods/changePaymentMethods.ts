import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController } from 'ionic-angular';
import { PaymentMethodService } from "./paymentMethod.services";
import { LoadingIndicatorService } from "../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { ToastMessageService } from "../../../framework/services/toastMessageService/toastMessage.service";
import { Utils } from "../../../framework/services/utilities/utilities";
import $ from 'jquery';
import {AppConfig as app} from "../../../framework/appConfig";

@IonicPage()
@Component({
  selector: 'page-changePaymentMethods',
  templateUrl: 'changePaymentMethods.html',
  providers: [
    PaymentMethodService,
  ]
})
export class ChangePaymentMethodsPage {

  _getListPaymentMethod;
  _updateDefaut;
  _removeCard;
  listCards: any = [];
  alertRef;
  loadingCompleted = false;
  account_management_no_cards_available= app.Configuration.ContentMessage.account_management_no_cards_available;
  account_management_set_default_card= app.Configuration.ContentMessage.account_management_set_default_card;

  constructor(private paymentMethodService: PaymentMethodService,
    public navCtrl: NavController,
    public alertCtrl: AlertController, ) {
  }

  ionViewWillEnter() {
    $('.app-root').addClass('not-show-tab');
    this.resetData();
    this.getPaymentMethods();
  }

  ionViewWillLeave() {
    $('.app-root').removeClass('not-show-tab');
  }
  resetData() {
    this.loadingCompleted = false;
  }

  getPaymentMethods() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    this._getListPaymentMethod = this.paymentMethodService.getListPaymentMethod()
      .subscribe((res) => {
        if (!res.ok) {
          return;
        }
        let body = res.response;

        if (Utils.isNotNull(body)) {
          this.listCards = body.tokenizedCards;
        }
      }, (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }, () => {
        this.loadingCompleted = true;
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      });
  }

  removeCardExecute(index) {
    let body = {
      'token': this.listCards[index].token,
      'expiryDate': this.listCards[index].expiryDate,
    }
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    this._removeCard = this.paymentMethodService.removeTokenizedCard(body)
      .subscribe((res) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
        if (!res.ok) {
          return;
        }
        let body = res.response;

        if (Utils.isNotNull(body)) {
          this.listCards = body.tokenizedCards;
        }
      }, (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      });
  }

  removeCard(index) {
    let alert = this.alertCtrl.create({
      title: '',
      message: app.Configuration.ContentMessage.confirm_removal,
      cssClass: 'l2s-alert--flat l2s-alert--twobutton',
      buttons: [
        {
          text: 'Yes',
          cssClass: 'main-button',
          handler: () => {
            this.removeCardExecute(index);
          }
        },
        {
          text: 'No',
          cssClass: 'cancel-button',
          handler: () => {
          }
        },{
          text: '',
          cssClass: 'close-button icon icon-ios ion-ios-close',
          handler: data => {
          }
        }
      ]
    });
    this.alertRef = alert;
    alert.present();
  }

  updateCardToken(index) {
    let body = {
      'token': this.listCards[index].token,
      'expiryDate': this.listCards[index].expiryDate,
    }
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    this.loadingCompleted = false;
    this._updateDefaut = this.paymentMethodService.updateTokenizedCard(body)
      .subscribe((res) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
        if (!res.ok) {
          return;
        }
        let body = res.response;
        if (Utils.isNotNull(body)) {
          this.listCards = body.tokenizedCards;
        }
      }, (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }, () => {
        this.loadingCompleted = true;
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      });
  }
}
