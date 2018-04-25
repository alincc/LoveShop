import {Component} from '@angular/core';
import {IonicPage, AlertController, ModalController, NavController} from 'ionic-angular';
import {RouteManagerService} from "../../../framework/services/routeManager/routeManager.service";
import {LogoutDataService} from "../../../framework/login/logoutData.service";
import {AuththenticationGuardService} from "../../../framework/login/authenticationGuard.service";
import {VerifyPINService} from "../../AccountManagement/verifyPIN/verifyPIN.service";
import {VerifyPINPage} from "../../AccountManagement/verifyPIN/verifyPIN";
import {FingerprintAIO} from "@ionic-native/fingerprint-aio";
import {ToastMessageService} from "../../../framework/services/toastMessageService/toastMessage.service";
import {MyShoppingBasketSharingDataService} from "../../myShoppingBasket/myShoppingBasketSharingData.services";
import {Utils} from "../../../framework/services/utilities/utilities";
import { NavService } from '../../../shared';
import $ from 'jquery';
import { AppConfig as app } from "../../../framework/appConfig";
import {YourCardDetailsSharingDataService} from "../../CardManagement/cardDetails/yourCardDetails/yourCardDetailsSharingData.services";

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  providers: [LogoutDataService]
})
export class SettingsPage {
  settingsPage: any = [
    {
      title: "Account Details",
      routeLink: "AccountDetailsPage"
    },
    {
      title: "Change Email",
      routeLink: "ChangeEmailPage"
    },
    {
      title: "Change Password",
      routeLink: "ChangePasswordPage"
    },
    {
      title: "Change PIN",
      routeLink: "ChangePINPage"
    },
    {
      title: "Touch ID",
      routeLink: "ChangeTouchIDPage"
    },
    {
      title: "Change Payment Methods",
      routeLink: "ChangePaymentMethodsPage"
    }
  ];

  constructor(public alertCtrl: AlertController,
              public routeManager: RouteManagerService,
              private authService: AuththenticationGuardService,
              private logoutDataService: LogoutDataService,
              public modalCtrl: ModalController,
              public navCtrl: NavController,
              private touchId: FingerprintAIO,
              private navSvc: NavService
              ) {

  }

  changing_PIN = app.Configuration.ContentMessage.changing_PIN;
  account_management_logout = app.Configuration.ContentMessage.account_management_logout;
  gotoPage(page) {
    const vPinSvc = VerifyPINService.getInstance();
    let verifyScreenModal: any;
    if (page === 'ChangePINPage') {
      this.showAlert(page);
    } else if (page === 'ChangeTouchIDPage') {
      this.touchId.isAvailable().then(res => {
        this.navCtrl.push(page);
      }).catch(err => {
        ToastMessageService.getInstance().showToastMessage(app.Configuration.ContentMessage.park_api_touch_ID_not_available);
      });
    } else {
      this.navCtrl.push(page);
    }
  }

  ionViewWillEnter() {
    $('.app-root').removeClass('not-show-tab');
  }

  showAlert(page) {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Change PIN',
      cssClass: 'l2s-alert--flat l2s-alert--twobutton',
      message: this.changing_PIN,
      buttons: [
        {
          text: 'Cancel',
          cssClass: 'cancel-button',
          handler: data => {
          }
        },
        {
          text: 'OK',
          cssClass: 'main-button',
          handler: data => {
            this.navCtrl.push(page);
          }
        },
        {
          text: '',
          cssClass: 'close-button icon icon-ios ion-ios-close',
          handler: data => {
          }
        }
      ]
    });
    alert.present();
  }

  logout() {

    let alert = this.alertCtrl.create({
        title: '',
        message:this.account_management_logout,
        cssClass: 'l2s-alert--flat l2s-alert--twobutton',
      buttons: [
        {
          text: 'Cancel',
            cssClass: 'cancel-button',
          handler: () => {

          }
        },
        {
          text: 'OK',
            cssClass: 'main-button',
          handler: () => {
            $('.app-root').removeClass('not-show-tab');
            YourCardDetailsSharingDataService.getInstance().IsActiveYourCardDetailsPage = false;
            YourCardDetailsSharingDataService.getInstance().saveCardInforActive= {};
            YourCardDetailsSharingDataService.getInstance().resetState();
            if (Utils.isNotNull(YourCardDetailsSharingDataService.getInstance().PauseSub)) {
              YourCardDetailsSharingDataService.getInstance().PauseSub.unsubscribe();
              YourCardDetailsSharingDataService.getInstance().PauseSub = undefined;
            }

            this.logoutDataService.logout()
              .subscribe(res => {
              });
            this.authService.Logout();
            MyShoppingBasketSharingDataService.getInstance().resetState();
            this.navSvc.getRootNav().setRoot('WelcomePage');
            location.reload();
          }
        }
        , {
          text: '',
          cssClass: 'close-button icon icon-ios ion-ios-close',
          handler: data => {
          }
        }
      ]
    });
    alert.present();
  }

  gotoHomePage() {
    this.navCtrl.parent.select(0);
  }
}
