import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {RouteManagerService} from "../../../../framework/services/routeManager/routeManager.service";
import {AppConfig as app} from "../../../../framework/appConfig";
@IonicPage()
@Component({
  selector: 'page-forgotPasswordSuccess',
  templateUrl: 'forgotPasswordSuccess.html'
})
export class ForgotPasswordSuccess {
  forgot_password_success_email_sent = app.Configuration.ContentMessage.forgot_password_success_email_sent;
  constructor( 
    public routerManager: RouteManagerService,
    public navCtrl: NavController,
  ) {

  }

  returnToLogin() {
    this.navCtrl.push("LoginPage");
  }
}
