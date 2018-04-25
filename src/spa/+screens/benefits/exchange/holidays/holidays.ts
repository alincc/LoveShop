import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import {RouteManagerService} from "../../../../framework/services/routeManager/routeManager.service";
import $ from 'jquery';
@IonicPage()
@Component({
  selector: 'page-holidays',
  templateUrl: 'holidays.html'
})
export class HolidaysPage {

  benefit: any;
  phoneNumber: string;

  constructor(
    public navCtrl: NavController,
    public routeManager: RouteManagerService,
    public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.phoneNumber = '';
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
        $('.app-root').addClass('not-show-tab');
      if (this.navParams.get('benefit')) {
        let benefit = this.navParams.get('benefit');
        benefit = this._selectBenefitImage(benefit);
        benefit = this._validContentImg(benefit);
        this.benefit = benefit;
      }
    }
  }

  private _selectBenefitImage(benefit){
    if(benefit && Array.isArray(benefit.images)){
      benefit.image = benefit.images[0];
    }
    return benefit;
  }

  private _validContentImg(benefit) {
    if(benefit && benefit.longDescription){
      benefit.longDescription = benefit.longDescription.replace(/src="\//g, 'src="https://www.love2shop.co.uk/');
    }
    return benefit;
  }

}
