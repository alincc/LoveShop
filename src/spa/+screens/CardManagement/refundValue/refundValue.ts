import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { RefundValueService } from "./refundValue.service";
import { LoadingIndicatorService } from "../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { RouteManagerService } from "../../../framework/services/routeManager/routeManager.service";
import { Utils } from "../../../framework/services/utilities/utilities";
import { CardDetailSharingDataService } from "../cardDetails/cardDetailsSharing.services";
import { AppConfig as app } from "../../../framework/appConfig";
import {YourCardDetailsSharingDataService} from "../cardDetails/yourCardDetails/yourCardDetailsSharingData.services";

@IonicPage()
@Component({
  selector: 'page-refundValue',
  templateUrl: 'refundValue.html',
  providers: [
    RefundValueService
  ]
})
export class RefundValuePage {
  cardIndex;
  cardList: any;
  cardCurrent: any;
  cardFullInfor: any;
  showContent: boolean;
  returnContent: any;
  baseResourceUrl;
  account_management_refund_full_value= app.Configuration.ContentMessage.account_management_refund_full_value;
  account_management_full_refund_being_processed= app.Configuration.ContentMessage.account_management_full_refund_being_processed;
  account_management_click_to_refund_balance= app.Configuration.ContentMessage.account_management_click_to_refund_balance;
  constructor(private navParams: NavParams,
    private returnService: RefundValueService,
    public routeManager: RouteManagerService,
    public navCtrl: NavController,
    public alertCtrl: AlertController, ) {
    this.cardFullInfor = {
      'cardId': '',
      'nickname': '',
      'expiryDate': '',
      'last4DigitCardNumber': '',
      'cardLogoPath': '',
      'totalRefund': '',
      'currency': '',
      'productType': ''
    }
    this.showContent = false;
    this.baseResourceUrl = app.Configuration.HttpService.baseResourceUrl;
  }

  ionViewWillEnter() {
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      if (Utils.isNotNull(this.navParams.get('cardIndex'))) {
        this.cardIndex = this.navParams.get('cardIndex');
      }

      if (Utils.isNotNull(this.navParams.get('totalRefund'))) {
        this.cardFullInfor.totalRefund = this.navParams.get('totalRefund');
      }
      this.cardList = YourCardDetailsSharingDataService.getInstance().getCardsList();
      this.cardCurrent = this.cardList[this.cardIndex];
      this.cardFullInfor.nickname = this.cardList[this.cardIndex].nickname;
      this.cardFullInfor.expiryDate = this.cardList[this.cardIndex].expiryDate;
      this.cardFullInfor.last4DigitCardNumber = this.cardList[this.cardIndex].last4DigitCardNumber;
      this.cardFullInfor.cardLogoPath = this.cardList[this.cardIndex].cardLogoPath;
      this.cardFullInfor.cardId = this.cardList[this.cardIndex].cardId;
      this.cardFullInfor.productType = this.cardList[this.cardIndex].productType;
      if (this.cardFullInfor.productType === 'CLOSED') {
        this.getContentOfReturn('mastercard-refund-process-details-closed')
      } else if (this.cardFullInfor.productType === 'OPEN') {
        this.getContentOfReturn('mastercard-refund-process-details-open')
      }
    }
  }

  performVirtualMasterCard() {
    let cardID = {
      'cardID': this.cardFullInfor.cardId
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
        }
        this.showAlert();
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.returnService
      .postPerformVirtualMasterCard(cardID)
      .subscribe(observer);
  }

  showAlert() {
    let card = {
      reloadData: true,
      cardNumber: "",
      cardId: this.cardFullInfor.cardId
    }

    let alert = this.alertCtrl.create({
      message:this.account_management_full_refund_being_processed,
      cssClass: 'l2s-alert--flat l2s-alert--default',
      buttons: [
        {
          text: 'Return to your cards',
          cssClass: 'main-button',
          handler: data => {
            CardDetailSharingDataService.getInstance().gotoCardDataReload = card;
            this.navCtrl.parent.select(0);
          }
        },

        {
          text: '',
          cssClass: 'close-button icon icon-ios ion-ios-close',
          handler: data => {
            CardDetailSharingDataService.getInstance().gotoCardDataReload = card;
            this.navCtrl.parent.select(0);
          }
        }
      ],
      enableBackdropDismiss: false
    });
    alert.present();
  }

  getContentOfReturn(url) {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (!res.ok) {
          LoadingIndicatorService.getInstance().hideLoadingIndicator();
          return;
        }

        let body = res.response;
        this.showContent = true;
        if (Utils.isNotNull(body)) {
          var elem = document.createElement('textarea');
          elem.innerHTML = body.content;
          var decoded = elem.value;
          this.returnContent = decoded;
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
      .getContentFromRetreiveContent(url)
      .subscribe(observer);
  }
}
