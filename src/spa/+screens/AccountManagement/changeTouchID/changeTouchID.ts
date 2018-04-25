import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController } from 'ionic-angular';
import { VerifyPINService } from "../verifyPIN/verifyPIN.service";
import { VerifyPINPage } from "../verifyPIN/verifyPIN";
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { ToastMessageService } from "../../../framework/services/toastMessageService/toastMessage.service";
import $ from 'jquery';
import { AppConfig as app } from "../../../framework/appConfig";

@IonicPage()
@Component({
  selector: 'page-changeTouchID',
  templateUrl: 'changeTouchID.html'
})
export class ChangeTouchIDPage {
  touchIDState: boolean;
  touchAvailable: boolean;
  messageTouchNotAvailable = app.Configuration.ContentMessage.park_api_touch_ID_not_available;
  use_fingerprint_not_PIN = app.Configuration.ContentMessage.use_fingerprint_not_PIN;
  use_same_finger = app.Configuration.ContentMessage.use_same_finger;
  isChangeTouchAvailable = false;

  ionViewWillEnter() {
    $('.app-root').addClass('not-show-tab');
    const vPinSvc = VerifyPINService.getInstance();
    vPinSvc.IsChangeTouchScreen = true;
    this.isChangeTouchAvailable = true;

    // After verify PIN then check touch is available or not
    // if not redirect to setting page.
    vPinSvc.verifyPINClosedInChangeTouch.subscribe(res => {
      if (res === true && this.isChangeTouchAvailable === true) {
        // No touch available then redirect to setting page.
        this.isChangeTouchAvailable = false;
        ToastMessageService.getInstance().showToastMessage(this.messageTouchNotAvailable);
        VerifyPINService.getInstance().touchIDState = false;
        this.navCtrl.setRoot('SettingsPage');
      }
    });
  }

  ionViewWillLeave() {
    $('.app-root').removeClass('not-show-tab');
  }

  ionViewDidLeave() {
    VerifyPINService.getInstance().IsChangeTouchScreen = false;
  }

  changeTouchState() {
    this.touchId.isAvailable().then(res => {
      this.showVerifyPIN(this.touchIDState);
    })
      .catch(err => {
        this.navCtrl.setRoot('SettingsPage');
        ToastMessageService.getInstance().showToastMessage(this.messageTouchNotAvailable);
      });
  }

  showVerifyPIN(state) {
    const vPinSvc = VerifyPINService.getInstance();
    let verifyScreenModal: any;
    verifyScreenModal = this.modalCtrl.create(VerifyPINPage,
      { callFrom: 'ChangeTouchID', touchState: state },
      {
        cssClass: 'touchable-page'
      });

    verifyScreenModal.onDidDismiss(() => {
      if (this.touchIDState === true) {
        this.touchId.isAvailable()
          .then(res => {
            VerifyPINService.getInstance().touchIDState = this.touchIDState;
          })
          .catch(err => {
            this.navCtrl.setRoot('SettingsPage');
            ToastMessageService.getInstance().showToastMessage(this.messageTouchNotAvailable);
          })
      } else {
        VerifyPINService.getInstance().touchIDState = this.touchIDState;
      }

      vPinSvc.VisibleScreen = false;
    });
    verifyScreenModal.present();
  }

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    private touchId: FingerprintAIO) {
    this.touchIDState = VerifyPINService.getInstance().touchIDState;
    this.touchAvailable = true;
  }


}
