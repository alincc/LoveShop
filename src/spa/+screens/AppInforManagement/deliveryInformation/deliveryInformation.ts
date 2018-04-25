import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {DeliveryInfomationService} from "./deliveryInformation.service";
import {LoadingIndicatorService} from "../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {RouteManagerService} from "../../../framework/services/routeManager/routeManager.service";

@IonicPage()
@Component({
  selector: 'page-deliveryInformation',
  templateUrl: 'deliveryInformation.html',
  providers: [
    DeliveryInfomationService
  ]
})
export class DeliveryInformationPage {

  constructor(public routerManager: RouteManagerService,
    public navCtrl: NavController,
              private deliveryInfomationService: DeliveryInfomationService) {

  }

  deliveryInformationContent: any;

  ionViewWillEnter() {
    if (this.routerManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      this.getDeliveryInformationContent();
    }
  }


  getDeliveryInformationContent() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (!res.ok) {
          return;
        }
        let body = res.response;
        this.deliveryInformationContent = body.content;
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.deliveryInfomationService
      .getDeliveryInfomationService()
      .subscribe(observer);
  }
}
