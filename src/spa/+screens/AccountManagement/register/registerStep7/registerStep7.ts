import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {RouteManagerService} from "../../../../framework/services/routeManager/routeManager.service";
import {AppConfig as app} from "../../../../framework/appConfig";

@IonicPage()
@Component({
  selector: 'page-registerStep7',
  templateUrl: 'registerStep7.html'
})

export class RegisterStep7Page {
  registration_successful = app.Configuration.ContentMessage.registration_successful;
  registered_successful = app.Configuration.ContentMessage.registered_successful;
  next_to_add_card = app.Configuration.ContentMessage.next_to_add_card;
  constructor(
    public routeManager: RouteManagerService,
    public navCtrl: NavController,
  ) {
  }

  redirectToAddCard(){
    this.navCtrl.setRoot('TabsPage');
  }
}
