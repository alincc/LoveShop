import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RouteManagerService} from '../../../../framework/services/routeManager/routeManager.service';
import {MyShoppingBasketSharingDataService} from "../../../myShoppingBasket/myShoppingBasketSharingData.services";
import {OrderDiscountGiftCardSharingDataService} from "../orderDiscountGiftCardSharingData.services";
import $ from 'jquery';
import {AppConfig as app} from "../../../../framework/appConfig";
import {YourCardDetailsSharingDataService} from "../../../CardManagement/cardDetails/yourCardDetails/yourCardDetailsSharingData.services";

@IonicPage()
@Component({
  selector: 'page-orderDiscountGiftCardComplete',
  templateUrl: 'orderDiscountGiftCardComplete.html'
})
export class OrderDiscountGiftCardComplete {
  dataAfterGenerateOrder;
  deliveryMethod;
  total;
  dataBeforeGenerateOrder;
  order_confirmation_default_p_title = app.Configuration.ContentMessage.order_confirmation_default_p_title;
  order_confirmation_default_p_strapline = app.Configuration.ContentMessage.order_confirmation_default_p_strapline;
  constructor(public routeManager: RouteManagerService, public navParams: NavParams, public navCtrl: NavController,) {

  }


  ionViewWillEnter() {
    OrderDiscountGiftCardSharingDataService.getInstance().resetNewOrderNumber();

    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {

      if (this.navParams.get('dataAfterGenerateOrder')) {
        this.dataAfterGenerateOrder = this.navParams.get('dataAfterGenerateOrder');
      }

      if (this.navParams.get('dataBeforeGenerateOrder')) {
        this.dataBeforeGenerateOrder = this.navParams.get('dataBeforeGenerateOrder');
      }
      if (this.navParams.get('deliveryMethod')) {
        this.deliveryMethod = this.navParams.get('deliveryMethod');
      }

      if (this.navParams.get('total')) {
        this.total = this.navParams.get('total');
      }
    }
  }

  ionViewWillLeave() {
    MyShoppingBasketSharingDataService.getInstance().resetState();
    OrderDiscountGiftCardSharingDataService.getInstance().resetData();
  }

  backtoDiscountPage() {
    $('.app-root').removeClass('not-show-tab');
    YourCardDetailsSharingDataService.getInstance().updateListCard$.next('update');
    YourCardDetailsSharingDataService.getInstance().updateListCard$.asObservable().take(1).subscribe(() => {
      this.navCtrl.parent.select(2);
    })
  }
}
