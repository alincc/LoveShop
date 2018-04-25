import {Component} from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';
import {HttpService} from "../../../framework/services/httpService/http.service";
import {LoadingIndicatorService} from "../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {RouteManagerService} from "../../../framework/services/routeManager/routeManager.service";
import {FAQService} from "./faq.service";

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
  providers: [
    FAQService
  ]
})
export class FAQPage {
  textContent: any;

  constructor(public navCtrl: NavController,
              public routerManager: RouteManagerService,
              public faqService: FAQService,
              public http: HttpService) {

  }

  ionViewWillEnter() {
    if (this.routerManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      this.getContent();
    }
  }

  getContent() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (!res.ok) {
          return;
        }
        if (res && res.response && res.response.message) {
          let body = res.response;
          this.textContent = body.message;
        }
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.faqService
      .getfaq()
      .subscribe(observer);
  }

}
