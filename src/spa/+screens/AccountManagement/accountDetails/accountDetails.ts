import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {AccountDetailsService} from './accountDetails.service';
import {Utils} from "../../../framework/services/utilities/utilities";
import {ToastMessageService} from "../../../framework/services/toastMessageService/toastMessage.service";
import {LoadingIndicatorService} from "../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {RouteManagerService} from "../../../framework/services/routeManager/routeManager.service";
import {DatePipe} from "@angular/common";
import $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-accountDetails',
  templateUrl: 'accountDetails.html',
  providers: [
    AccountDetailsService
  ]
})
export class AccountDetailsPage {

  model: any = {}
  showContent = false;
  dob;

  constructor(public routeManager: RouteManagerService,
              public navCtrl: NavController,
              private accountDetailsService: AccountDetailsService) {
    this.model = {};
  }

  ionViewWillEnter() {
    $('.app-root').addClass('not-show-tab');
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      // place code load data for this page here
      this.getUserDataDetails();
    }
  }
  ionViewWillLeave() {
    $('.app-root').removeClass('not-show-tab');
  }

  formatDateStandard(date) {
    let arrStrDate = date.split('/');
    return arrStrDate[2] + '-' + arrStrDate[1] + '-' + arrStrDate[0];
  }


  public getUserDataDetails() {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (!res.ok) {
          return;
        }
        let body = res.response;

        this.showContent = true;

        let formatPhoneNumber = body.telephoneNumbers;
        formatPhoneNumber = formatPhoneNumber.substr(formatPhoneNumber.indexOf(':')+1,formatPhoneNumber.length);
        this.dob = body.dob;
        let formatDOB = this.formatDateStandard(body.dob);
        let datePipeEn: DatePipe = new DatePipe('en-GB');
        formatDOB = datePipeEn.transform(formatDOB, 'dd MMMM yyyy');

        this.model = {
          name: body.title + ' ' + body.firstName + ' ' + body.lastName,
          addressLine1: body.addressLine1,
          addressLine2: body.addressLine2,
          dob: formatDOB,
          county: body.county,
          postcode: body.postcode,
          town: body.town,
          country: body.country,
          phone: formatPhoneNumber
        }
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.accountDetailsService
      .getUserDetails()
      .subscribe(observer);
  }
}
