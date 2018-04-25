import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { CardType } from "../../../../../models/card-type";
import { LoadingIndicatorService } from "../../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { HttpService } from "../../../../../framework/services/httpService/http.service";
@IonicPage()
@Component({
  selector: 'page-cardfaq',
  templateUrl: 'cardfaq.html'
})
export class CardFAQPage {
  textContent: any;

  constructor(public navCtrl: NavController, public http: HttpService, public navParams: NavParams) {

  }

  ionViewWillEnter(){
    if(this.navParams.get('cardType')){
      let code = '';
      const type = this.navParams.get('cardType');
      if(type == CardType.SAINSBURYS){
        code = 'sainsburys-faqs-content';
      } else if(type == CardType.TESCO){
        code = 'tesco-faqs-content';
      }

      LoadingIndicatorService.getInstance().showLoadingIndicator();
      this.http.get("cms/content/urlTitle=" + code).subscribe(res => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
        if(res && res.response && res.response.content){
          this.textContent = res.response.content;
        }
      })
    }

  }

}
