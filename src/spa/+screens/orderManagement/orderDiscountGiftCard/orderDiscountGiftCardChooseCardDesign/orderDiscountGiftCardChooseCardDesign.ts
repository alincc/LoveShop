import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { RouteManagerService } from '../../../../framework/services/routeManager/routeManager.service';
import { OrderDiscountGiftCardSharingDataService } from "../orderDiscountGiftCardSharingData.services";
import { AppConfig as app } from "../../../../framework/appConfig";

@IonicPage()
@Component({
  selector: 'page-orderDiscountGiftCardChooseCardDesign',
  templateUrl: 'orderDiscountGiftCardChooseCardDesign.html'
})
export class OrderDiscountGiftCardChooseCardDesign {

  private baseImageUrl;
  constructor(public routeManager: RouteManagerService,
    public navParams: NavParams,
    public navCtrl: NavController) {
    this.baseImageUrl = app.Configuration.HttpService.baseResourceUrl;
  }

  productToChooseDesign;
  selectedIndex = 0;

  order_gwp_default_section1_action_h2 = app.Configuration.ContentMessage.order_gwp_default_section1_action_h2;
  order_gwp_default_section1_choice_p = app.Configuration.ContentMessage.order_gwp_default_section1_choice_p;
  ionViewWillEnter() {

    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      if (this.navParams.get('productToChooseDesign')) {
        this.productToChooseDesign = this.navParams.get('productToChooseDesign');
      }

      if (this.navParams.get('cardDesignIndex')) {
        this.selectedIndex = parseInt(this.navParams.get('cardDesignIndex'));
      }

    }
  }

  selectDeliveryMethod(index) {
    this.selectedIndex = index;
  }

  addSaveGreetingCard() {
    OrderDiscountGiftCardSharingDataService.getInstance().saveSelectedFreeGreetingCard(this.selectedIndex, this.productToChooseDesign[this.selectedIndex]);
    this.navCtrl.pop();
  }


}
