import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {ContactUsService} from "./contactUs.service";
import {LoadingIndicatorService} from "../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {Utils} from "../../../framework/services/utilities/utilities";
import {ToastMessageService} from "../../../framework/services/toastMessageService/toastMessage.service";
import {RouteManagerService} from "../../../framework/services/routeManager/routeManager.service";

@IonicPage()
@Component({
  selector: 'page-contactUs',
  templateUrl: 'contactUs.html',
  providers: [
    ContactUsService
  ]
})
export class ContactUsPage {

  constructor(public routerManager: RouteManagerService,
    public navCtrl: NavController,
              private contactUsService: ContactUsService) {
  }

  contactUsContent : any;

  ionViewWillEnter() {
    if (this.routerManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      this.getContactUsContent();
    }
  }

  getContactUsContent() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (!res.ok) {
          return;
        }
        let body = res.response;
        this.contactUsContent = body.content;
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.contactUsService
      .getContactUs()
      .subscribe(observer);
  }
}
