import {Component} from '@angular/core';
import {IonicPage, AlertController, NavController} from 'ionic-angular';
import {RouteManagerService} from "../../../framework/services/routeManager/routeManager.service";
import {LogoutDataService} from "../../../framework/login/logoutData.service";

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
  providers: [LogoutDataService]
})
export class MorePage {
  settingsPage: any = [
    {
      title: "More info",
      routeLink: "MoreInfoPage"
    },
    {
      title: "Settings",
      routeLink: "SettingsPage"
    },
  ];

  constructor(public alertCtrl: AlertController,
              public routeManager: RouteManagerService,
              public navCtrl: NavController,
              ) {
  }

  gotoPage(page) {
    this.navCtrl.push(page);
  }

  ionViewWillEnter() {
  }
}
