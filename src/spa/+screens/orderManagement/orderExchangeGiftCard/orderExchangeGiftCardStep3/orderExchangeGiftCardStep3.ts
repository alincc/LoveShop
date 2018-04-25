import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RouteManagerService } from '../../../../framework/services/routeManager/routeManager.service';
import { MyShoppingBasketSharingDataService } from "../../../myShoppingBasket/myShoppingBasketSharingData.services";
import { Utils } from "../../../../framework/services/utilities/utilities";
import { AppConfig as app } from "../../../../framework/appConfig";
import $ from 'jquery';
import {YourCardDetailsSharingDataService} from "../../../CardManagement/cardDetails/yourCardDetails/yourCardDetailsSharingData.services";
@IonicPage()
@Component({
  selector: 'page-orderExchangeGiftCardStep3',
  templateUrl: 'orderExchangeGiftCardStep3.html'
})
export class OrderExchangeGiftCardStep3 {
  private primaryCard;
  private orderAfterGenerate;
  private currency;

  totalFee = 0;
  totalFeeDelivery = 0;
  totalPrice = 0;
  totalPotentialFee = 0;
  currentIndexDelivery = 0;
  allProductsOnBasket;
  baseResourceUrl;
  order_confirmation_default_p_title = app.Configuration.ContentMessage.order_confirmation_default_p_title;
  order_confirmation_default_p_strapline = app.Configuration.ContentMessage.order_confirmation_default_p_strapline;
  constructor(public routeManager: RouteManagerService,
    public navCtrl: NavController,
    private navParams: NavParams) {
    this.baseResourceUrl = app.Configuration.HttpService.baseResourceUrl;
  }

  ionViewWillEnter() {
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      this.primaryCard = MyShoppingBasketSharingDataService.getInstance().getPrimaryCard();
      this.orderAfterGenerate = MyShoppingBasketSharingDataService.getInstance().getDataAfterGenerateOrder();

      let dataBasket = MyShoppingBasketSharingDataService.getInstance().getDataBasket();
      this.allProductsOnBasket = dataBasket.productsOnBasket;

      if (this.navParams.get('deliveryIndex')) {
        this.currentIndexDelivery = this.navParams.get('deliveryIndex');
      }
      if (Utils.isNotNull(this.primaryCard)) {
        this.currency = Utils.convertCurrency(this.primaryCard.currency);
      }
      if (Utils.isNotNull(this.orderAfterGenerate)) {
        this.calculateTotal(this.orderAfterGenerate.orderlines, this.currentIndexDelivery);
      }
    }
  }

  ionViewWillLeave() {
    MyShoppingBasketSharingDataService.getInstance().resetState();
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

  gotoBenefit() {
      $('.app-root').removeClass('not-show-tab');
    YourCardDetailsSharingDataService.getInstance().updateListCard$.next('update');
    YourCardDetailsSharingDataService.getInstance().updateListCard$.asObservable().take(1).subscribe(() => {
      this.navCtrl.parent.select(2);
    });
  }
}
