import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { LoadingIndicatorService } from "../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { HttpService } from "../../../../framework/services/httpService/http.service";
import $ from 'jquery';
@IonicPage()
@Component({
  selector: 'page-businessEnquiries',
  templateUrl: 'businessEnquiries.html'
})
export class BusinessEnquiriesPage {
  textContent: any;
  constructor(public navCtrl: NavController, public http: HttpService) {
  }

  ionViewWillEnter() {
    $('.app-root').addClass('not-show-tab');
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    this.http.get("cms/message/code=app.l2s.business-enquiry").subscribe(res => {
      LoadingIndicatorService.getInstance().hideLoadingIndicator();
      if (res && res.response && res.response.message) {
        this.textContent = res.response.message;
      }
    })
  }

  ionViewWillLeave() {
    $('.app-root').removeClass('not-show-tab');
  }
}
