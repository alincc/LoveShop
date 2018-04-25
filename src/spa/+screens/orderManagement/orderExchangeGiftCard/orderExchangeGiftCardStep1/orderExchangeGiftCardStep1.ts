import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RouteManagerService } from '../../../../framework/services/routeManager/routeManager.service';
import { Utils } from "../../../../framework/services/utilities/utilities";
import { MyShoppingBasketSharingDataService } from "../../../myShoppingBasket/myShoppingBasketSharingData.services";
import { ToastMessageService } from "../../../../framework/services/toastMessageService/toastMessage.service";
import { OrderExchangeGiftCardStep1Service } from "./orderExchangeGiftCardStep1.service";
import { LoadingIndicatorService } from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { AppConfig as app } from "../../../../framework/appConfig";

const DEFAULT_ERROR_MSG = app.Configuration.HttpService.DEFAULT_ERROR_MSG;

@IonicPage()
@Component({
  selector: 'page-orderExchangeGiftCardStep1',
  templateUrl: 'orderExchangeGiftCardStep1.html',
  providers: [
    OrderExchangeGiftCardStep1Service
  ]
})
export class OrderExchangeGiftCardStep1 {
  primaryCard: any;
  orderAfterGenerate: any;
  currency: any;
  totalFee = 0;
  totalFeeDelivery = 0;
  totalPrice = 0;
  totalPotentialFee = 0;
  dataFromBasket: any;
  currentIndexDelivery = 0;
  _updateDeliveryMethod;
  allProductsOnBasket;
  baseResourceUrl;
  constructor(public routeManager: RouteManagerService,
    public navCtrl: NavController,
    private orderExchangeGiftCardStep1Service: OrderExchangeGiftCardStep1Service, ) {
    this.baseResourceUrl = app.Configuration.HttpService.baseResourceUrl;
  }

  ionViewWillEnter() {
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      this.primaryCard = MyShoppingBasketSharingDataService.getInstance().getPrimaryCard();
      this.orderAfterGenerate = MyShoppingBasketSharingDataService.getInstance().getDataAfterGenerateOrder();

      let dataBasket = MyShoppingBasketSharingDataService.getInstance().getDataBasket();
      this.allProductsOnBasket = dataBasket.productsOnBasket;

      if (Utils.isNotNull(this.primaryCard)) {
        this.currency = Utils.convertCurrency(this.primaryCard.currency);
      }

      if (Utils.isNotNull(this.orderAfterGenerate)) {
        this.calculateTotal(this.orderAfterGenerate.orderlines, 0);
      }
    }
  }

  calculateTotal(products, index) {
    this.totalFee = 0;
    this.totalPrice = 0;
    this.totalFeeDelivery = 0;
    this.totalPotentialFee = 0;
    if (Utils.isNotNull(products) && products.length > 0) {
      for (let i = 0; i < products.length; i++) {
        this.totalFee += products[i].feeAmount;
      }
      this.totalFeeDelivery = this.orderAfterGenerate.availableDeliveryMethods[index].cost;

      this.totalPotentialFee = this.totalFee + this.totalFeeDelivery;
      this.totalPrice = this.orderAfterGenerate.totalPaymentAmount + this.totalPotentialFee;
    }
  }

  setActiveIndex(index) {
    this.currentIndexDelivery = index;
    this.calculateTotal(this.orderAfterGenerate.orderlines, index);
  }

  updateDelivery() {
    if (this._updateDeliveryMethod) {
      this._updateDeliveryMethod.unsubscribe();
    }
    let orderData = this._buildUpdateDeliveryMethodRequest();
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    this._updateDeliveryMethod = this.orderExchangeGiftCardStep1Service.updateDeliveryMethod(orderData)
      .subscribe((res) => {
        if (!res.ok) {
          return;
        }

        this.navCtrl.push('OrderExchangeGiftCardStep2', { deliveryIndex: this.currentIndexDelivery });
      }, (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }, () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      });
  }

  private _buildUpdateDeliveryMethodRequest() {
    let orderSummary =
      {
        "propositionId": this.primaryCard.propositionId,
        "orderNumber": this.orderAfterGenerate.orderNumber,
        "title": this.orderAfterGenerate.title,
        "firstName": this.orderAfterGenerate.firstName,
        "lastName": this.orderAfterGenerate.lastName,
        "addressLine1": this.orderAfterGenerate.addressLine1,
        "addressLine2": this.orderAfterGenerate.addressLine2,
        "town": this.orderAfterGenerate.town,
        "county": this.orderAfterGenerate.county,
        "postcode": this.orderAfterGenerate.postcode,
        "country": this.orderAfterGenerate.country,
        "deliveryMethodCode": this.orderAfterGenerate.availableDeliveryMethods[this.currentIndexDelivery].code,
      }

    return orderSummary;
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
