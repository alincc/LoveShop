import {Component, ViewChild} from '@angular/core';
import {IonicPage, ModalController, NavParams, NavController} from 'ionic-angular';
import {FingerprintAIO} from "@ionic-native/fingerprint-aio";
import {VerifyPINService} from "../../AccountManagement/verifyPIN/verifyPIN.service";
import {VerifyTouchIdPage} from "../../AccountManagement/verifyTouchId/verifyTouchId";
import {VerifyPINPage} from "../../AccountManagement/verifyPIN/verifyPIN";
import {Tabs, Tab} from "ionic-angular";
import {PinCodeService} from "../../../framework/services/pinCodeService/pinCode.service";
import {AuthenticationDataSharingService} from "../../../framework/login/authenticationDataSharing.service";
import {AuththenticationGuardService} from "../../../framework/login/authenticationGuard.service";
import {Where2SpendSharingDataService} from "../../whereToSpend/where2SpendSharingData.services";
import {YourCardDetailsSharingDataService} from "../../CardManagement/cardDetails/yourCardDetails/yourCardDetailsSharingData.services";

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  visibleVerifyPINScreen: boolean;
  @ViewChild("tabs") tabs: Tabs;

  // tabRoots = ['HomePage', 'YourCardDetailsPage', 'ChangeCardPage', 'ExchangePage'];
  tabRoots = ['YourCardDetailsPage', 'ChangeCardPage', 'ExchangePage', 'MorePage'];
  selectedIndex = 0;
  tab1Root = 'YourCardDetailsPage';
  tab2Root = 'ChangeCardPage';
  tab3Root = 'ExchangePage';
  tab4Root = 'MorePage';
  needToUpdatePIN = false;


  constructor(private navParams: NavParams,
              public modalCtrl: ModalController,
              private touchId: FingerprintAIO,
              private navCtrl: NavController,
              public authGuardService: AuththenticationGuardService) {
    if (PinCodeService
        .getInstance()
        .needSetupPinCode(AuthenticationDataSharingService.getInstance().loginEmail) === true
    ) {
      this.needToUpdatePIN = true;
    }
  }


  ionViewWillEnter() {

    if (this.needToUpdatePIN === true) {
      return this.navCtrl.setRoot('SetupPINPage', {nextPage: 'TouchIDSettingFirstTimePage'});
    }

    if (this.navParams.get('keepData')) {
      localStorage.setItem('no-reload-home-data', 'true');
      delete this.navParams.data.keepData;
    } else {
      localStorage.removeItem('no-reload-home-data');
    }

    if (this.navParams.get('tab')) {
      const tab = this.navParams.get('tab');
      const index = this.tabRoots.indexOf(tab);
      this.selectedIndex = (index > -1) ? index : 0;
      if (this.tabs) {
        this.tabs.select(this.selectedIndex, {});
      }
      delete this.navParams.data.tab;
    }

    if (this.navParams.get('root')) {
      const root = this.navParams.get('root');
      const data = this.navParams.get('data') || {};
      this.navCtrl.setRoot(root, data);
      delete this.navParams.data.root;
    }

    if (this.navParams.get('noVerify')) {
      delete this.navParams.data.noVerify;
      return;
    }


    const vPinSvc = VerifyPINService.getInstance();

    // after 3 times entered wrong PIN code
    vPinSvc.verifyPINClosed.subscribe(res => {
      if (res === true) {
        this.navCtrl.setRoot('LoginPage');
      }
    });

    let showVerifyPIN = this.navParams.get('showVerifyPIN');
    if (vPinSvc.VisibleScreen === false && showVerifyPIN && showVerifyPIN === true) {
      this.navParams.data['showVerifyPIN'] = void (0);
      let verifyPIN = this.modalCtrl.create(VerifyPINPage, { }, {
        cssClass: 'touchable-page'
      });

      verifyPIN.onDidDismiss(() => {
        vPinSvc.VisibleScreen = false;
      });

      vPinSvc.VisibleScreen = true;
      verifyPIN.present();
    }
  }

   tabSelected(tab: Tab) {
    let cards = YourCardDetailsSharingDataService.getInstance().getCardsList();
    if (!cards || cards.length > 0) {
      this.tabs.select(tab.index);
    } else {
      if(tab.index === 3) {
        this.tabs.select(tab.index);
      } else {
        this.tabs.select(0);
      }
    }
  }


  ionVieDidEnter() {
    YourCardDetailsSharingDataService.getInstance().tabs = this.tabs;
  }
}
