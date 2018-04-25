import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { CardType } from "../../../../../models/card-type";
import { LoadingIndicatorService } from "../../../../../framework/services/loadingIndicatorService/loadingIndicator.service";
import { HttpService } from "../../../../../framework/services/httpService/http.service";
import { ToastMessageService } from "../../../../../framework/services/toastMessageService/toastMessage.service";

@IonicPage()
@Component({
  selector: 'page-topupinfo',
  templateUrl: 'topupinfo.html'
})
export class TopUpInfoPage {
  textContent: any;
  constructor(public navCtrl: NavController, public http: HttpService, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    if(this.navParams.get('cardType')){
      let code = '';
      const type = this.navParams.get('cardType');
      if(type == CardType.SAINSBURYS){
        code = 'sainsburys-topup-times-content';
      } else if(type == CardType.TESCO){
        code = 'tesco-top-up-times-content';
      }

      LoadingIndicatorService.getInstance().showLoadingIndicator();
      this.http.get("cms/content/urlTitle=" + code).subscribe(res => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
        if(res && res.response && res.response.content){
          this.textContent = res.response.content;
        }
      }, (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      })
    }
  }
}
