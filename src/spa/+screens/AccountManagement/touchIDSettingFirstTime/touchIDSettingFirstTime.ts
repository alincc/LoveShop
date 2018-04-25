import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams } from 'ionic-angular';

import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

import { RouteManagerService } from "../../../framework/services/routeManager/routeManager.service";
import { MobileDeviceService } from "../../../framework/services/mobileDeviceService/mobileDeviceService.service";
import { AuthenticationDataSharingService } from "../../../framework/login/authenticationDataSharing.service";
import { VerifyPINService } from "../verifyPIN/verifyPIN.service";
import {AppConfig as app} from "../../../framework/appConfig";

@IonicPage()
@Component({
  selector: 'page-touchIDSettingFirstTime',
  templateUrl: 'touchIDSettingFirstTime.html',
})

export class TouchIDSettingFirstTimePage {

  private touchId: FingerprintAIO;
  fingerprintVerified: boolean = false;
  reset_fingerprint = app.Configuration.ContentMessage.reset_fingerprint;
  use_of_fingerprint = app.Configuration.ContentMessage.use_of_fingerprint;
  create_print_ID = app.Configuration.ContentMessage.create_print_ID;
  skip_id_setup = app.Configuration.ContentMessage.skip_id_setup;
  wrong_touch_ID = app.Configuration.ContentMessage.wrong_touch_ID;
  too_many_attempts = app.Configuration.ContentMessage.too_many_attempts;
  constructor(
    public routeManager: RouteManagerService,
    public alertCtrl: AlertController
    , touchId: FingerprintAIO,
    private navCtrl: NavController,
    private navParams: NavParams
  ) {

    this.touchId = touchId;
  }

  ionViewWillEnter() {
    this.touchId.isAvailable()
      .then(res => {
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
    })
      .catch(err => {
        VerifyPINService.getInstance().touchIDState = false;
      })
      .then(_ => this.navCtrl.setRoot(this.navParams.get('nextPage')));
  }

  skipTouchIDSetup() {
    const service = VerifyPINService.getInstance();
    service.touchIDState = false;
    this.navCtrl.setRoot(this.navParams.get('nextPage'));
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
