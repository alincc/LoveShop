import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {AboutUsService} from "./aboutUs.service";
import {LoadingIndicatorService} from "../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {RouteManagerService} from "../../../framework/services/routeManager/routeManager.service";

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [
    AboutUsService
  ]
})
export class AboutPage {

  constructor(public routerManager: RouteManagerService,
    public navCtrl: NavController,
    private aboutUsService: AboutUsService
            ) {
  }

  aboutContent: any;

  ionViewWillEnter() {
    if (this.routerManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      this.getAboutUsContent();
    }
  }

  getAboutUsContent() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (!res.ok) {
          return;
        }
        let body = res.response;
        this.aboutContent = body.content;
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.aboutUsService
      .getAboutUs()
      .subscribe(observer);
  }

}
