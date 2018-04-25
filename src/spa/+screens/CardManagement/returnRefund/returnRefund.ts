import {Component} from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';
import {ReturnService} from "./return.service";
import {LoadingIndicatorService} from "../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {Utils} from "../../../framework/services/utilities/utilities";
import {ToastMessageService} from "../../../framework/services/toastMessageService/toastMessage.service";
import {RouteManagerService} from "../../../framework/services/routeManager/routeManager.service";

@IonicPage()
@Component({
  selector: 'page-returnRefund',
  templateUrl: 'returnRefund.html',
  providers: [
    ReturnService
  ]
})
export class ReturnRefundPage {

  constructor(public routerManager: RouteManagerService,
    public navCtrl: NavController,
              private returnService: ReturnService) {
  }

  returnContent: any;

  ionViewWillEnter() {
    if (this.routerManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      this.getReturnContent();
    }
  }


  public getReturnContent() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (!res.ok) {
          return;
        }
        let body = res.response;
        this.returnContent = body.content;
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.returnService
      .getReturn()
      .subscribe(observer);
  }
}
