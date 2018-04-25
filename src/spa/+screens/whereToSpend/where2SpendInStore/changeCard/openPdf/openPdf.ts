import { Component } from "@angular/core";
import { IonicPage, NavParams, NavController } from "ionic-angular";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { Where2SpendSharingDataService } from "../../../where2SpendSharingData.services";

@IonicPage()
@Component({
  selector: 'page-openPdf',
  templateUrl: 'openPdf.html',
  providers: [
    InAppBrowser
  ]
})
export class OpenPdfPage {
    url: any;
    constructor(
        private navCtrl: NavController,
        private navParams: NavParams,
        private iab: InAppBrowser
    ) {}

    ionViewWillEnter() {
        this.url = this.navParams.get('url');
    }

    back() {
        Where2SpendSharingDataService.getInstance().keepLocation = true;
        this.navCtrl.pop();
    }

    followLink() {
        const browser = this.iab.create(this.url,  "_system", "location=true" );
    }
}