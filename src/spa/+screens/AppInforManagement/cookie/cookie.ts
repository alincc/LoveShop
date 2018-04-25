import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {CookieService} from "./cookieService.service";
import {LoadingIndicatorService} from "../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {RouteManagerService} from "../../../framework/services/routeManager/routeManager.service";

@IonicPage()
@Component({
  selector: 'page-cookie',
  templateUrl: 'cookie.html',
  providers: [
    CookieService
  ]
})
export class CookiePage {

  constructor(public routerManager: RouteManagerService,
    public navCtrl: NavController,
              private cookieService: CookieService) {
  }

  cookieContent : any;

  ionViewWillEnter() {
    if (this.routerManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      this.getCookieContent();
    }
  }

  getCookieContent() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (!res.ok) {
          return;
        }
        let body = res.response;
        this.cookieContent = body.content;
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.cookieService
      .getCookie()
      .subscribe(observer);
  }
}
