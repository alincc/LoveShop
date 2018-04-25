import { Component } from '@angular/core';
import { Platform, IonicPage, AlertController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { Renderer } from '@angular/core';
import { NavParams, ViewController, ModalController } from 'ionic-angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import {RouteManagerService} from "../../../framework/services/routeManager/routeManager.service";
import {VerifyPINService} from "../verifyPIN/verifyPIN.service";
import {VerifyPINPage} from "../verifyPIN/verifyPIN";
import {AppConfig as app} from "../../../framework/appConfig";


@IonicPage()
@Component({
  selector: 'page-verifyTouchId',
  templateUrl: 'verifyTouchId.html'
})

export class VerifyTouchIdPage {

  private touchId: FingerprintAIO;
  wrong_PIN = app.Configuration.ContentMessage.wrong_PIN;

  constructor (
    platform: Platform,
    private formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public routeManager: RouteManagerService,
    public modalCtrl: ModalController,
    public renderer: Renderer,
    public viewCtrl: ViewController
    , touchId: FingerprintAIO
  ) {
    this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'my-popup', true);
    this.touchId = touchId;
  }

  ionViewWillEnter() {
    const service = VerifyPINService.getInstance();
    const touchIDState = service.touchIDState;
    if (touchIDState) {
      this.touchId.isAvailable()
      .then(res => {
        return this.touchId.show({
          clientId: 'Touch ID for Love2Shop',
          clientSecret: 'myPassword', //Only necessary for Android
          disableBackup:true,  //Only for Android(optional)
        });
      })
      .then(res => {
        VerifyPINService.getInstance().VisibleScreen = false;
        this.viewCtrl.dismiss();
      })
      .catch(err => {
        if (err === '-1' || err ==='-8') {
          this.showAlertTouchIdFail(err);
        } else {
          this.showPinCodeModal();
        }        
      });
    } else {
      this.showPinCodeModal();
    }
  }

  showPinCodeModal() {
    this.viewCtrl.dismiss();    
    let verifyScreenModal = this.modalCtrl.create(VerifyPINPage, { }, {
      cssClass: 'touchable-page'
    });

    verifyScreenModal.onDidDismiss(() => {
      VerifyPINService.getInstance().VisibleScreen = false;
    });

    VerifyPINService.getInstance().VisibleScreen = true;
    verifyScreenModal.present();
  }

  okForDismiss() {
    VerifyPINService.getInstance().VisibleScreen = false;
    this.viewCtrl.dismiss();
  }

  showAlertTouchIdFail(errorCode) {
    let message = 'Fail attempts Touch ID 3 times.';
    if (errorCode === '-8') {
      message = 'Fail attempts Touch ID 2 times.';
    }

    let alert = this.alertCtrl.create({
      title: this.wrong_PIN,
      message: message,
      buttons: [{
        text: 'OK',
        handler: data => {
          this.showPinCodeModal();
        }
      }]
    });

    alert.present();
  }
}
