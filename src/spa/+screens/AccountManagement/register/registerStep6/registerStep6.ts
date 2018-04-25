import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {RouteManagerService} from "../../../../framework/services/routeManager/routeManager.service";
import {AppConfig as app} from "../../../../framework/appConfig";

@IonicPage()
@Component({
  selector: 'page-registerStep6',
  templateUrl: 'registerStep6.html'
})

export class RegisterStep6Page {
  use_of_fingerprint = app.Configuration.ContentMessage.use_of_fingerprint;
  reset_fingerprint = app.Configuration.ContentMessage.reset_fingerprint;
  create_print_ID = app.Configuration.ContentMessage.create_print_ID;
  constructor(
    public routeManager: RouteManagerService,
    public navCtrl: NavController,
  ) {
  }

  public submitRegisterData() {
    this.navCtrl.push("RegisterStep7Page");
  }
}
