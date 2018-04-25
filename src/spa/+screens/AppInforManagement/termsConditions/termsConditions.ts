import {Component} from '@angular/core';
import {NavController, IonicPage, NavParams} from 'ionic-angular';
import {LoadingIndicatorService} from "../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {HttpService} from "../../../framework/services/httpService/http.service";
import {TermsConditionsService} from "./termsConditions.service";
import {RouteManagerService} from "../../../framework/services/routeManager/routeManager.service";

@IonicPage()
@Component({
  selector: 'page-termsConditions',
  templateUrl: 'termsConditions.html',
  providers: [
    TermsConditionsService
  ]
})
export class TermsConditionsPage {
  textContent: any;

  constructor(
    public navCtrl: NavController,
    public routerManager: RouteManagerService,
    public termsConditionsService: TermsConditionsService,
    public http: HttpService,
    public navParams: NavParams) {

  }

  ionViewWillEnter() {
    if (this.routerManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      this.getTermCondition();
    }
  }

  getTermCondition() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (!res.ok) {
          return;
        }
        let body = res.response;
        this.textContent = body.content;
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.termsConditionsService
      .getTermConditions()
      .subscribe(observer);
  }

}
