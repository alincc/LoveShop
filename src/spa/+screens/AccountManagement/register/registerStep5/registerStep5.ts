import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController } from 'ionic-angular';
import { AuthenticationDataSharingService } from "../../../../framework/login/authenticationDataSharing.service";
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { RouteManagerService } from "../../../../framework/services/routeManager/routeManager.service";
import { VerifyPINService } from "../../verifyPIN/verifyPIN.service";
import {AppConfig as app} from "../../../../framework/appConfig";

@IonicPage()
@Component({
  selector: 'page-registerStep5',
  templateUrl: 'registerStep5.html'
})

export class RegisterStep5Page {
  private touchId: FingerprintAIO;
  emailLogin: any;

  fingerprintVerified: boolean = false;
  use_of_fingerprint = app.Configuration.ContentMessage.reset_fingerprint;
  reset_fingerprint = app.Configuration.ContentMessage.reset_fingerprint;
  create_print_ID = app.Configuration.ContentMessage.create_print_ID;
  skip_id_setup = app.Configuration.ContentMessage.skip_id_setup;
  wrong_touch_ID = app.Configuration.ContentMessage.wrong_touch_ID;
  too_many_attempts = app.Configuration.ContentMessage.too_many_attempts;
  constructor(
    public routeManager: RouteManagerService,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    touchId: FingerprintAIO
  ) {

    this.touchId = touchId;

    this.emailLogin = AuthenticationDataSharingService.getInstance().loginEmail;
  }

  ionViewDidEnter() {
    this.touchId.isAvailable().then(res => {
      return this.touchId.show({
        clientId: 'Touch ID for Love2Shop',
        clientSecret: 'myPassword', //Only necessary for Android
        disableBackup: true,  //Only for Android(optional)
      });
    }).then(res => {
      this.fingerprintVerified = true;
    }).catch(err => {
      if (err === '-1' || err === '-8') {
        this.showAlertTouchIdFail();
      } else {
        this.fingerprintVerified = false;
        this.skipTouchIDSetup();
      }
    });
  }

  public submitRegisterData() {
    this.touchId.isAvailable().then(res => {
      VerifyPINService.getInstance().touchIDState = true;
      this.navCtrl.setRoot('RegisterStep7Page');
    })
      .catch(err => {
        VerifyPINService.getInstance().touchIDState = false;
        this.navCtrl.setRoot('RegisterStep7Page');
      })
  }

  skipTouchIDSetup() {
    VerifyPINService.getInstance().touchIDState = false;
    this.navCtrl.setRoot('RegisterStep7Page');
  }

  showAlertTouchIdFail() {
    let alert = this.alertCtrl.create({
      title: this.wrong_touch_ID,
      message: this.too_many_attempts,
      cssClass: 'wrong-pin',
      buttons: [{
        text: 'OK',
        handler: data => {
          this.fingerprintVerified = false;
          this.skipTouchIDSetup();
        }
      }]
    });

    alert.present();
  }

}
