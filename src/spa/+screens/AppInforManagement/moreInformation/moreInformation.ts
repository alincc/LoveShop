import {Component} from '@angular/core';
import {IonicPage, NavController, Platform} from 'ionic-angular';
import {RouteManagerService} from "../../../framework/services/routeManager/routeManager.service";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {HttpService} from "../../../framework/services/httpService/http.service";
import {MoreInformationService} from "./moreInformation.service";
import {LoadingIndicatorService} from "../../../framework/services/loadingIndicatorService/loadingIndicator.service";

declare var window: any;
declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-moreInformation',
  templateUrl: 'moreInformation.html',
  providers: [
    InAppBrowser,
    MoreInformationService
  ]
})
export class MoreInfoPage {

  pagesInfo: any = [
    {
      title: "About us",
      routeLink: "AboutPage"
    },
    {
      title: "Delivery information",
      routeLink: "DeliveryInformationPage"
    },
    {
      title: "FAQs",
      routeLink: "FAQPage"
    },
    {
      title: "Returns & refunds",
      routeLink: "ReturnRefundPage"
    },
    {
      title: "Business Enquiries",
      routeLink: "BusinessEnquiriesPage"
    },
    {
      title: "Contact us",
      routeLink: "ContactUsPage"
    }
  ];


  pagesInfo2: any = [
    {
      title: "E-Money Trust",
      routeLink: "EMoneyTrustPage"
    },
    {
      title: "Privacy policy",
      routeLink: "PrivacyPolicyPage"
    },
    {
      title: "App terms & conditions",
      routeLink: "TermsConditionsPage"
    }
  ];

  constructor(
    public routeManager: RouteManagerService,
    public moreInformationService: MoreInformationService,
    public http: HttpService,
    public platform: Platform,
    public navCtrl: NavController,
    private iab: InAppBrowser) {
  }

  onItemClick(pageItem) {
    if (pageItem.routeLink == 'TermsConditionsPage') {
      this.retriveContent('app.l2s.tcs');
      return;
    } else if (pageItem.routeLink == 'FAQPage') {
      this.retriveContent("app.l2s.faqs");
      return;
    } else if (pageItem.routeLink == 'BusinessEnquiriesPage') {
      this.retriveContent('app.l2s.business-enquiry');
      return;
    } else if (pageItem.routeLink == 'EMoneyTrustPage') {
      this.retriveContent('app.l2s.emoneytrust');
      return;
    }
    this.navCtrl.push(pageItem.routeLink)
  }

  retriveContent(code) {
    LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        if (!res.ok) {
          return;
        }
        if (res && res.response && res.response.message) {
          let body = res.response;
          const url = this._normalizeUrl(res.response.message);
          let target: string = "_system";
          if (code === "app.l2s.faqs") {
            target = "_blank";
          }
          
          if (this.platform.is('ipad')) {
            this.platform.ready().then(() => {
              if (cordova && cordova.InAppBrowser) {
                window.open = cordova.InAppBrowser.open(
                  url,
                  "_blank",
                  "hidden=no,location=yes,clearsessioncache=yes,clearcache=yes"
                );
              }
            });  
          } else {
            const browser = this.iab.create(url, target, "location=true");
          }
        }
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      }
    };
    this.moreInformationService
      .getInfo(code)
      .subscribe(observer);
  }

  private _normalizeUrl(url) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      if (url.startsWith('/')) {
        return 'https://www.love2shop.co.uk' + url;
      }
      return 'http://' + url;
    }
    return url;
  }

}
