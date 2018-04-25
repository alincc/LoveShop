import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {RouteManagerService} from "../../../../framework/services/routeManager/routeManager.service";
import {Utils} from "../../../../framework/services/utilities/utilities";
import {LoadingIndicatorService} from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import $ from 'jquery';
import {OrderDiscountGiftCard3DSService} from "./orderDiscountGiftCard3DS.service";
import {OrderDiscountGiftCardSharingDataService} from "../orderDiscountGiftCardSharingData.services";
import {AppConfig as app} from "../../../../framework/appConfig";

@IonicPage()
@Component({
  selector: 'page-orderDiscountGiftCard3DS',
  templateUrl: 'orderDiscountGiftCard3DS.html',
  providers: [
    OrderDiscountGiftCard3DSService
  ]
})

export class OrderDiscountGiftCard3DSPage {
  bankPayment;
  dataAfterGenerateOrder;
  dataBeforeGenerateOrder;
  cardIndex;
  deliveryMethod;
  total;

  constructor(public alertCtrl: AlertController,
              public routeManager: RouteManagerService,
              public orderDiscountGiftCard3DSService: OrderDiscountGiftCard3DSService,
              public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewWillEnter() {

    this.submitedParesponse = false;
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      if (this.navParams.get('bankPayment')) {
        this.bankPayment = this.navParams.get('bankPayment');
      }

      if (this.navParams.get('dataAfterGenerateOrder')) {
        this.dataAfterGenerateOrder = this.navParams.get('dataAfterGenerateOrder');
      }

      if (this.navParams.get('dataBeforeGenerateOrder')) {
        this.dataBeforeGenerateOrder = this.navParams.get('dataBeforeGenerateOrder');
      }
      this.cardIndex = this.navParams.get('cardIndex');

      if (this.navParams.get('deliveryMethod')) {
        this.deliveryMethod = this.navParams.get('deliveryMethod');
      }

      if (this.navParams.get('total')) {
        this.total = this.navParams.get('total');
      }
    }
    setTimeout(() => {
      $('#submitIframe3D').click();
    }, app.Configuration.OrderDiscountGiftCard3DS.submitIframe3D);

    setTimeout(() => {
      this.autoSubmitPaResponse();
    }, app.Configuration.OrderDiscountGiftCard3DS.autoSubmitPaResponse);
  }


  ionViewDidLeave() {
    this.submitedParesponse = false;
    clearTimeout(this.timerAutoSubmit);
  }

  private timerAutoSubmit: any;

  autoSubmitPaResponse() {
    this.timerAutoSubmit = setTimeout(() => {
      let found: boolean = false;
      let PaRes: any;
      let PaResTextarea: any;

      PaResTextarea = localStorage.getItem('PaResponse');
      localStorage.removeItem('PaResponse');
      if (Utils.isNotNull(PaResTextarea) && PaResTextarea !== '') {
        PaRes = PaResTextarea;
        if (PaRes !== '') {
          found = true;
          this.paymentResume(PaRes);
          clearTimeout(this.timerAutoSubmit);
          return;
        }
      }
      if (!found) {
        this.autoSubmitPaResponse();
      }

    }, app.Configuration.OrderDiscountGiftCard3DS.checkPaymentResume)
  }

  private submitedParesponse: boolean = false;

  paymentResume(Pares) {
    // only submit PaResponse once time;
    if (this.submitedParesponse === true) return;
    this.submitedParesponse = true

    let body = {
      "orderNumber": this.dataAfterGenerateOrder.orderNumber,
      "paRes": Pares
    };

    LoadingIndicatorService.getInstance().showLoadingIndicator();
    this.orderDiscountGiftCard3DSService.paymentResume(body)
      .subscribe((res) => {
        if (!res.ok) {
          return;
        }
        this.navCtrl.push('OrderDiscountGiftCardComplete', {
          dataAfterGenerateOrder: this.dataAfterGenerateOrder,
          dataBeforeGenerateOrder: this.dataBeforeGenerateOrder,
          cardIndex: this.cardIndex,
          deliveryMethod: this.deliveryMethod,
          total: this.total
        });

      }, (error) => {


        LoadingIndicatorService.getInstance().hideLoadingIndicator();
        if (Utils.isNotNull(error) && Utils.isNotNull(error.data) && Utils.isNotNull(error.data.response)) {
          let orderNumber = error.data.response.orderNumber;
          OrderDiscountGiftCardSharingDataService.getInstance().setNewOrderNumber(orderNumber);
        }

        let errorObject = null;

        if (Utils.isNotNull(error) && Utils.isNotNull(error.data) && Utils.isNotNull(error.data.errors[0])) {
          errorObject = error.data.errors[0];
        }
        this.navCtrl.push('OrderDiscountGiftCardPaymentCardPage', {
          dataAfterGenerateOrder: this.dataAfterGenerateOrder,
          cardIndex: this.cardIndex,
          deliveryMethod: this.deliveryMethod,
          total: this.total,
          errorObject: errorObject
        }).then(() => {
          const startIndex = this.navCtrl.getActive().index - 2;
          this.navCtrl.remove(startIndex, 2);
        });

      }, () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      });
  }


  goBack() {
    this.navCtrl.push('OrderDiscountGiftCardPaymentCardPage', {
      dataAfterGenerateOrder: this.dataAfterGenerateOrder,
      cardIndex: this.cardIndex,
      deliveryMethod: this.deliveryMethod,
      total: this.total,
      errorObject: null
    }).then(() => {
      const startIndex = this.navCtrl.getActive().index - 2;
      this.navCtrl.remove(startIndex, 2);
    });
  }
}
