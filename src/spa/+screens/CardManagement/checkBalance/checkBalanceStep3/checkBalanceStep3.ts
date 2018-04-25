import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { CardBalanceSharingDataService } from "../cardBalanceSharingData.service";
import { CardBalanceDataService } from "../cardBalanceData.service";
import { ChangeBalanceStep3Service } from './checkBalanceStep3.service';
import {RouteManagerService} from "../../../../framework/services/routeManager/routeManager.service";
import {Observable} from 'rxjs/Observable';
import {Utils} from "../../../../framework/services/utilities/utilities";

@IonicPage()
@Component({
  selector: 'page-checkBalanceStep3',
  templateUrl: 'checkBalanceStep3.html',
  providers: [
    CardBalanceDataService,
    CardBalanceSharingDataService,
    ChangeBalanceStep3Service
  ]
})

export class CheckBalanceStep3Page {
  balanceValue: any;
  cardnumber: any;
  cardInfor: any;
  register_or_login_MSG;
  view_transactions_MSG;

  constructor(
    public routeManager: RouteManagerService,
    public navParams: NavParams,
    public navCtrl: NavController,
    private checkBalanceService: ChangeBalanceStep3Service
  ) {
  }

  getBalanceDataInit() {
    if (this.navParams.get('balanceValue')) {
      this.balanceValue = this.navParams.get('balanceValue') || '';

    }
    if (this.navParams.get('cardNumber')) {
      this.cardnumber = this.navParams.get('cardNumber')|| '';
    }
  }

  ionViewWillEnter() {
    this.getBalanceDataInit();
    this.getContentMSG();
  }


  public getContentMSG() {
    const observer = {
      next: (res) => {
        if (Utils.isNotNull(res[0]) && Utils.isNotNull(res[0].response) && Utils.isNotNull(res[0].response.message)) {
          this.register_or_login_MSG = res[0].response.message;
        }

        if (Utils.isNotNull(res[1]) && Utils.isNotNull(res[1].response) && Utils.isNotNull(res[1].response.message)) {
          this.view_transactions_MSG = res[1].response.message;
        }

      },
      error: (error) => {
      },
      complete: () => {
      }
    };
    Observable.combineLatest(
      this.checkBalanceService.getContentFromRetreiveContent("register-or-login"),
      this.checkBalanceService.getContentFromRetreiveContent("view-transactions"),
    ).subscribe(observer)
  }


  gotoStep1() {
    this.navCtrl.setRoot('CheckBalanceStep1Page');
  }

}
