import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import {RouteManagerService} from '../../../../framework/services/routeManager/routeManager.service';
import {OrderManagementSharingDataService} from "../../orderManagementSharingData.services";
import {Utils} from "../../../../framework/services/utilities/utilities";
import $ from 'jquery';
import {YourCardDetailsSharingDataService} from "../../../CardManagement/cardDetails/yourCardDetails/yourCardDetailsSharingData.services";
@IonicPage()
@Component({
  selector: 'page-oderSupermarketStep2',
  templateUrl: 'orderSupermarketStep2.html'
})
export class OrderSupermarketStep2 {
  primaryCard: any;
  orderGenerateSuperMarket: any;
  currency: any;

  constructor(
    public routeManager: RouteManagerService,
    public navCtrl: NavController
  ) {
  }

  ionViewWillEnter() {
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      this.primaryCard = OrderManagementSharingDataService.getInstance().getPrimaryCard();
      this.orderGenerateSuperMarket = OrderManagementSharingDataService.getInstance().getOrderGenerateOrderSupermaket();
      if(Utils.isNotNull(this.primaryCard)) {
        this.currency = Utils.convertCurrency(this.primaryCard.currency);
      }
    }
  }

  gotoBenefit() {
      $('.app-root').removeClass('not-show-tab');
    YourCardDetailsSharingDataService.getInstance().updateListCard$.next('update');
    YourCardDetailsSharingDataService.getInstance().updateListCard$.asObservable().take(1).subscribe(() => {
      this.navCtrl.popToRoot();
    });
  }

}
