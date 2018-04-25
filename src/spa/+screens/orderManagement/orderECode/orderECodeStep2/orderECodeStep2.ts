import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {RouteManagerService} from '../../../../framework/services/routeManager/routeManager.service';
import {MyShoppingBasketSharingDataService} from "../../../myShoppingBasket/myShoppingBasketSharingData.services";
import {AppConfig as app} from "../../../../framework/appConfig";
import $ from 'jquery';
import {YourCardDetailsSharingDataService} from "../../../CardManagement/cardDetails/yourCardDetails/yourCardDetailsSharingData.services";

@IonicPage()
@Component({
  selector: 'page-orderEcodeStep2',
  templateUrl: 'orderECodeStep2.html'
})
export class OrderEcodeStep2 {
  primaryCard: any;
  orderGenerateEcode: any;
  allProductsOnBasket;
  baseResourceUrl;
  ecodes_mailed_to = app.Configuration.ContentMessage.ecodes_mailed_to;
  constructor(public routeManager: RouteManagerService,
              public navCtrl: NavController) {
    this.baseResourceUrl = app.Configuration.HttpService.baseResourceUrl;
  }

  ionViewWillEnter() {
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      this.primaryCard = MyShoppingBasketSharingDataService.getInstance().getPrimaryCard();
      this.orderGenerateEcode = MyShoppingBasketSharingDataService.getInstance().getDataAfterGenerateOrder();
    }

    let dataBasket = MyShoppingBasketSharingDataService.getInstance().getDataBasket();
    this.allProductsOnBasket = dataBasket.productsOnBasket;
  }

  ionViewWillLeave() {
    MyShoppingBasketSharingDataService.getInstance().resetState();
  }

  ionViewDidLeave() {
    MyShoppingBasketSharingDataService.getInstance().resetState();
  }

  gotoBenefit() {
    $('.app-root').removeClass('not-show-tab');
    YourCardDetailsSharingDataService.getInstance().updateListCard$.next('update');
    YourCardDetailsSharingDataService.getInstance().updateListCard$.asObservable().take(1).subscribe(() => {
      this.navCtrl.popToRoot();
    });
  }
}
