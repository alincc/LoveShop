import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { RouteManagerService } from '../../../../framework/services/routeManager/routeManager.service';
import { ToastMessageService } from "../../../../framework/services/toastMessageService/toastMessage.service";
import { OrderManagementSharingDataService } from "../../orderManagementSharingData.services";
import { Utils } from "../../../../framework/services/utilities/utilities";
import { LoadingIndicatorService } from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { OrderSuperMarketSharingDataService } from "../orderSuperMarketSharingData.services";
import { OrderSupermarketStep1Service } from "./orderSupermarketStep1.service";
import { MyShoppingBasketSharingDataService } from "../../../myShoppingBasket/myShoppingBasketSharingData.services";
import {AppConfig as app} from "../../../../framework/appConfig";

@IonicPage()
@Component({
  selector: 'page-orderSupermarketStep1',
  templateUrl: 'orderSupermarketStep1.html',
  providers: [
    OrderSupermarketStep1Service
  ]
})
export class OrderSupermarketStep1 {
  orderGenerateSuperMarket: any;
  primaryCard: any;
  _confirmOrder;
  empty_top_up_card_later= app.Configuration.ContentMessage.empty_top_up_card_later;
  constructor(public routeManager: RouteManagerService,
    public navCtrl: NavController,
    public orderSupermarketStep1Service: OrderSupermarketStep1Service) {
  }

  ionViewWillEnter() {
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      this.primaryCard = OrderManagementSharingDataService.getInstance().getPrimaryCard();
      this.orderGenerateSuperMarket = OrderManagementSharingDataService.getInstance().getOrderGenerateOrderSupermaket();
    }
  }

  confirmOrder() {
    this._unsubscribe();
    let orderData = this._buildGenerateOrderEcodeRequest();
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    this._confirmOrder = this.orderSupermarketStep1Service.confirmOrder(orderData)
      .subscribe((res) => {
        if (!res.ok) {
          return;
        }
        this.navCtrl.push('OrderSupermarketStep2');
      }, (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }, () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      });
  }

  private _buildGenerateOrderEcodeRequest() {
    let orderSummary = {
      'orderNumber': this.orderGenerateSuperMarket.orderNumber,
    }
    return orderSummary;
  }

  private _unsubscribe() {
    if (this._confirmOrder) {
      this._confirmOrder.unsubscribe();
    }
  }
}
