import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import {EMoneyService} from "./eMoneyTrust.service";
import {LoadingIndicatorService} from "../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {Utils} from "../../../framework/services/utilities/utilities";
import {ToastMessageService} from "../../../framework/services/toastMessageService/toastMessage.service";
import {RouteManagerService} from "../../../framework/services/routeManager/routeManager.service";

@IonicPage()
@Component({
  selector: 'page-eMoneyTrust',
  templateUrl: 'eMoneyTrust.html',
  providers: [
    EMoneyService
  ]
})
export class EMoneyTrustPage {

  constructor(public routerManager: RouteManagerService,
    public navCtrl: NavController,
              private eMoneyTrustService: EMoneyService) {
  }

  eMoneyContent : any;

  ionViewWillEnter() {
    if (this.routerManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      this.getEMoneyContent();
    }
  }

  getEMoneyContent() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (!res.ok) {
          return;
        }
        let body = res.response;
        this.eMoneyContent = body.message;
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.eMoneyTrustService
      .getEMoneyTrust()
      .subscribe(observer);
  }

}
