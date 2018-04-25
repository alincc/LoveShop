import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { RouteManagerService } from "../../../../framework/services/routeManager/routeManager.service";
import $ from 'jquery';
import { AppConfig as app } from "../../../../framework/appConfig";
import { Platform } from 'ionic-angular';

declare var window: any;
declare var cordova: any;

const BASE_URL = 'https://www.love2shop.co.uk';

@IonicPage()
@Component({
  selector: 'page-buySpecSavers',
  templateUrl: 'buySpecSavers.html',
  providers: [
    InAppBrowser
  ]
})
export class BuySpecSaversPage {
  benefit: any;
  showLink: boolean = false;
  baseResourceUrl;
  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser,
    public routeManager: RouteManagerService,
    public platform: Platform,
    public navParams: NavParams) {
    this.baseResourceUrl = app.Configuration.HttpService.baseResourceUrl;
  }

  ionViewWillLeave() {
    $('.app-root').removeClass('not-show-tab');
  }

  onClickBenefitLink() {
    if (!this.benefit || !this.benefit.url) {
      return;
    }

    if (this.benefit.type.toLowerCase() === 'form' && this.benefit.hiddenFields && this.benefit.hiddenFields.fv_value) {
      let YourPostURL = this.benefit.url;
      let YourValue1 = this.benefit.hiddenFields.fv_value;
      var pageContent = '<html><head></head><body><form id="loginForm" action="' + YourPostURL + '" method="post">' +
        '<input type="hidden" name="fv_value" value="' + YourValue1 + '">' +
        '</form> <script type="text/javascript">document.getElementById("loginForm").submit();</script></body></html>';
      var pageContentUrl = 'data:text/html;base64,' + btoa(pageContent);

      this.platform.ready().then(() => {
        if (cordova && cordova.InAppBrowser) {
          window.open = cordova.InAppBrowser.open(
            pageContentUrl,
            "_blank",
            "hidden=no,location=yes,clearsessioncache=yes,clearcache=yes"
          );
        }
      });
    } else {
      const url = this._normalizeUrl(this.benefit.url);
      const browser = this.iab.create(url, "_system", "location=true");
    }
  }

  private _normalizeUrl(url) {
    if (url.startsWith('#') || url.startsWith('/#')) {
      return;
    }

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      if (url.startsWith('/')) {
        return BASE_URL + url;
      }
      if (url.startsWith('mycard')) {
        return BASE_URL + '/manage/' + url;
      }
      return 'http://' + url;
    }

    return url;
  }

  ionViewWillEnter() {
    $('.app-root').addClass('not-show-tab');
    if (this.routeManager.ifNotLoggedInThenGoBackToLoginScreen() === false) {
      if (this.navParams.get('benefit')) {
        let benefit = this.navParams.get('benefit');
        benefit = this._selectBenefitImage(benefit);
        this.showLink = this._checkCanShowLink(benefit);
        benefit = this._validContentImg(benefit);
        this.benefit = benefit;
      }
    }
  }

  private _checkCanShowLink(benefit) {
    return benefit && benefit.url && this._validUrl(benefit.url);
  }

  private _validUrl(url: string): boolean {
    return url && typeof url === 'string' && (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/') || url.startsWith('mycard'));
  }

  private _selectBenefitImage(benefit) {
    if (benefit && Array.isArray(benefit.images)) {
      benefit.image = benefit.images[0];
    }
    return benefit;
  }

  private _validContentImg(benefit) {
    if (benefit && benefit.longDescription) {
      benefit.longDescription = benefit.longDescription.replace(/src="\//g, 'src="https://www.love2shop.co.uk/');
    }
    return benefit;
  }
}
