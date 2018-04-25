import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {PrivacyPolicyService} from "./privacyPolicy.service";
import {LoadingIndicatorService} from "../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {Utils} from "../../../framework/services/utilities/utilities";
import {ToastMessageService} from "../../../framework/services/toastMessageService/toastMessage.service";
import {RouteManagerService} from "../../../framework/services/routeManager/routeManager.service";

@IonicPage()
@Component({
  selector: 'page-privacyPolicy',
  templateUrl: 'privacyPolicy.html',
  providers: [
    PrivacyPolicyService
  ]
})
export class PrivacyPolicyPage {

  constructor(public routerManager: RouteManagerService,
    public navCtrl: NavController,
              private privacyPolicyService: PrivacyPolicyService) {
  }

  privacyContent : any;

  ionViewWillEnter() {
    if (this.routerManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      this.getPrivacyContent();
    }
  }

  getPrivacyContent() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (!res.ok) {
          return;
        }
        let body = res.response;
        this.privacyContent = body.content;
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.privacyPolicyService
      .getPrivacyPolicy()
      .subscribe(observer);
  }
}
