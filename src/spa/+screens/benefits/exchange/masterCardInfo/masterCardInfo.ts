import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RouteManagerService} from "../../../../framework/services/routeManager/routeManager.service";
import {AppConfig as app} from "../../../../framework/appConfig";

@IonicPage()
@Component({
  selector: 'page-masterCardInfo',
  templateUrl: 'masterCardInfo.html'
})
export class MasterCardInfoPage {
  content: any;
  card: any;
  baseResourceUrl;
  urlKeyMastercard;
  urlKeyAnywhereMastercard;
  feeMsg;
  products: any;
  indexOfTypeCard;
  primaryCard;
  masterCardTypeSelected;
  constructor(public routeManager: RouteManagerService,
              public navCtrl: NavController,
              public navParams: NavParams,) {
  }

  ionViewWillEnter() {
    this.baseResourceUrl = app.Configuration.HttpService.baseResourceUrl;
    this.urlKeyMastercard = app.Configuration.masterCardInfo.urlSelectMasterCard;
    this.urlKeyAnywhereMastercard = app.Configuration.masterCardInfo.urlSelectAnyWhereMasterCard;
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      if (this.navParams.get('card')) {
        this.card = this.navParams.get('card');
        this.content = this._validContentUrl(this.card.longDescription);
      }

      if (this.navParams.get('products')) {
        this.products = this.navParams.get('products');
      }

      if (this.navParams.get('masterCardTypeSelected')) {
        this.masterCardTypeSelected = this.navParams.get('masterCardTypeSelected');
      }

      if (this.navParams.get('primaryCard')) {
        this.primaryCard = this.navParams.get('primaryCard');
      }


      if (this.navParams.get('idx')) {
        this.indexOfTypeCard = this.navParams.get('idx');
      }
    }
  }

  close() {
    this.navCtrl.pop();
  }

  ionViewDidLeave() {
  }

  private _validContentUrl(content) {
    if (content) {
      content = content.replace(/src="\//g, 'src="https://www.love2shop.co.uk/')
        .replace(/href="\//g, 'href="https://www.love2shop.co.uk/');
    }
    return content;
  }

  showCardExchange() {
    const product = (this.card && Array.isArray(this.card.products)) ? this.card.products[0] : this.card;
    this.extracMsgFee(this.card);
    const indexCardInStack = this.navCtrl.getActive().index ;

    this.navCtrl.push("MasterCardExchangePage", {
      targetCard: product,
      masterCardTypeSelected: this.masterCardTypeSelected,
      primaryCard: this.primaryCard,
      feeMsg: this.feeMsg
    }).then(() => {
        this.navCtrl.remove(indexCardInStack, 1, {animate: false, duration: 0}).then(() => {
        });
      }
    );
  }

  extracMsgFee(contentMsg) {
    this.feeMsg = '';
    let indexString = contentMsg.shortDescription.indexOf('Please Note:');
    if (indexString > -1) {
      this.feeMsg = contentMsg.shortDescription.substr(indexString).replace(/<[^>]*>/g, "").replace("Please Note:", "").trim();
    }
  }

  gotoFAQ() {
    this.navCtrl.push('FAQPage')
  }

}
