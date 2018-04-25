import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RouteManagerService } from '../../../../framework/services/routeManager/routeManager.service';
import { MyShoppingBasketSharingDataService } from "../../../myShoppingBasket/myShoppingBasketSharingData.services";
import { AppConfig as app } from "../../../../framework/appConfig";
import { YourCardDetailsSharingDataService } from '../../../CardManagement/cardDetails/yourCardDetails/yourCardDetailsSharingData.services';

@IonicPage()
@Component({
  selector: 'page-orderMixBasketStep3',
  templateUrl: 'orderMixBasketStep3.html'
})
export class OrderMixBasketStep3 {
  private primaryCard;
  private orderAfterGenerate;
  allProductsOnBasket;
  baseResourceUrl;
  constructor(public routeManager: RouteManagerService,
    public navCtrl: NavController) {
    this.baseResourceUrl = app.Configuration.HttpService.baseResourceUrl;
  }

  ionViewWillEnter() {

    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      this.primaryCard = MyShoppingBasketSharingDataService.getInstance().getPrimaryCard();
      this.orderAfterGenerate = MyShoppingBasketSharingDataService.getInstance().getDataAfterGenerateOrder();
      let dataBasket = MyShoppingBasketSharingDataService.getInstance().getDataBasket();
      this.allProductsOnBasket = dataBasket.productsOnBasket;
    }
  }

  ionViewWillLeave() {
    MyShoppingBasketSharingDataService.getInstance().resetState();
  }

  gotoBenefit() {
    YourCardDetailsSharingDataService.getInstance().updateListCard$.next('update');
    YourCardDetailsSharingDataService.getInstance().updateListCard$.asObservable().take(1).subscribe(() => {
      this.navCtrl.parent.select(2);
    });
  }
}
