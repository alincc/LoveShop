import { Component, HostListener, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { Keyboard, NavController, Platform, App, ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {
  LoadingIndicatorService
} from "../spa/framework/services/loadingIndicatorService/loadingIndicator.service";
import { MobileDeviceService } from '../spa/framework/services/mobileDeviceService/mobileDeviceService.service';
import { ToastMessageService } from "../spa/framework/services/toastMessageService/toastMessage.service";
import {
  ModalController,
  ToastController,
  LoadingController
} from 'ionic-angular';
import $ from 'jquery';

import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { VerifyPINService } from "../spa/+screens/AccountManagement/verifyPIN/verifyPIN.service";
import { VerifyPINPage } from "../spa/+screens/AccountManagement/verifyPIN/verifyPIN";
import { PinCodeService } from "../spa/framework/services/pinCodeService/pinCode.service";
import { AuthenticationDataSharingService } from "../spa/framework/login/authenticationDataSharing.service";
import { AuththenticationGuardService } from "../spa/framework/login/authenticationGuard.service";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { Utils } from '../spa/framework/services/utilities/utilities';

const BASE_URL = 'https://www.love2shop.co.uk';

const BUTTON_DEBOUCE_TIME_MS = '800';
const BUTTON_DISABLE_CLASS_TAG_NAMES = ['button', 'li'];
const BUTTON_DISABLE_CLASS = 'l2s-click-disabled';
const BUTTON_DISABLE_EXCEPT_CLASS = 'l2s-no-debouce';

@Component({
  templateUrl: 'app.html',
  providers: [
    InAppBrowser
  ]
})

export class MyApp implements OnInit {
  @ViewChild('nav') navCtrl: NavController;
  rootPage: any = 'WelcomePage';

  private touchId: FingerprintAIO;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private app: App,
    private iab: InAppBrowser,
    private loadingCtrl: LoadingController,
    public keyboard: Keyboard,
    public modalCtrl: ModalController,
    // private screenOrientation: ScreenOrientation,
    private toastCtrl: ToastController,
    public authService: AuththenticationGuardService,
    touchId: FingerprintAIO,
    private renderer: Renderer2) {

    this.touchId = touchId;

    let vPinSvc = VerifyPINService.getInstance();

    platform.pause.subscribe(() => {
    });

    platform.resume.subscribe(() => {

      const auth = this.authService.isAuthenticated();
      let needToUpdatePIN = PinCodeService.getInstance().needSetupPinCode(AuthenticationDataSharingService.getInstance().loginEmail)
      const touchIDState = vPinSvc.touchIDState;

      if (auth && vPinSvc.VisibleScreen === false && vPinSvc.byPassVerifyPin === false && needToUpdatePIN === false && touchIDState !== undefined) {
        let verifyScreenModal = this.modalCtrl.create(VerifyPINPage, {}, {
          cssClass: 'touchable-page'
        });

        verifyScreenModal.onDidDismiss(() => {
          vPinSvc.VisibleScreen = false;
        });

        vPinSvc.VisibleScreen = true;
        verifyScreenModal.present();
      }

      vPinSvc.byPassVerifyPin = false;
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    platform.registerBackButtonAction((event) => {
      try {
        if ($("ion-alert").length === 1) return;
        if ($("ion-loading").length === 1) return;

        let screenAllowBackButton = "Where2SpendInStoreMapPage,CheckBalanceStep1Page,AddMyCardPage,";
        screenAllowBackButton += "RegisterStep1Page,RegisterStep2Page,RegisterStep3Page,";
        screenAllowBackButton += "LoginPage,Where2SpendOnlinePage,Exchang4SpendOnlinePage,";
        screenAllowBackButton += "MasterCardExchangePage,OrderMasterCardExchangeStep1,";
        screenAllowBackButton += "ViewCardStatementPage,Where2SpendInStoreListPage,";
        screenAllowBackButton += "LocationStoresPage,MoreInfoPage,RefundValuePage,";
        screenAllowBackButton += "AddCardNumberPage,HolidaysPage,Exchange4ECodePage,";
        screenAllowBackButton += "SettingsPage,ExchangeEcodeAllBarOneEcodePage,";
        screenAllowBackButton += "MyShoppingBasketPage,CategoryStoresPage,";
        screenAllowBackButton += "OrderEcodeStep1,Exchange4DiningECodePage,";
        screenAllowBackButton += "Exchange4OtherGiftCardsPage,BuyADiscountedGiftCardPage,";
        screenAllowBackButton += "BuyDiscountedSupperGiftCardPage,BuySpecSaversPage,";
        screenAllowBackButton += "AboutPage,DeliveryInformationPage,FAQPage,ReturnRefundPage,";
        screenAllowBackButton += "BusinessEnquiriesPage,ContactUsPage,EMoneyTrustPage,";
        screenAllowBackButton += "PrivacyPolicyPage,TermsConditionsPage,AccountDetailsPage,";
        screenAllowBackButton += "ChangeEmailPage,ChangePasswordPage,ChangePINPage,ChangeTouchIDPage,";
        screenAllowBackButton += "EditAccountPage,ChangePaymentMethodsPage,OrderSupermarketStep1,";
        screenAllowBackButton += "OrderDiscountGiftCardReviewYourOrder,OrderDiscountGiftCardDeliveryOption,";
        screenAllowBackButton += "OrderDiscountGiftCardPaymentCardPage,OrderDiscountGiftCardChooseCardDesign,";
        screenAllowBackButton += "OrderDiscountGiftCardExtraGiftWallets,MasterCardInfoPage,";
        screenAllowBackButton += "BuyDiscountedGiftCardPage,OrderDiscountGiftCard3DSPage,";
        screenAllowBackButton += "AddCardPhysicalMasterCardPage,AddCardSainsburysPage,";
        screenAllowBackButton += "AddCardTescoPage,AddFlexCashPage,AddFlexECodePage,";
        screenAllowBackButton += "AddPinToCardPage,AddPinToCodePage,GiftCardExchangePage,";
        screenAllowBackButton += "OrderDiscountGiftCardAddPersonalMessage,";
        screenAllowBackButton += "OrderExchangeGiftCardStep2,OrderDiscountGiftCardUpdateDeliveryOptionPage,";
        screenAllowBackButton += "OrderExchangeGiftCardStep1,UpdatePINPage,ForgotPasswordPage,";
        screenAllowBackButton += "AmountTopUpPage,viewAlertSettingsPage,MakeTopUptPage,";
        screenAllowBackButton += "CookiePage,";
        let nav = (<any>this.app).getActiveNavs();
        let activeViewName: string = "";
        if (Utils.isNotNull(nav)) {
          activeViewName = nav[0].getActive().id;
        }
  
        if (screenAllowBackButton.indexOf(activeViewName + ",") > -1) {
          // example selector: '#Where2SpendInStoreMapPage-back-button'
          $("#" + activeViewName + "-back-button").click();
          return;
        }
        if (event && event.preventDefault) event.preventDefault();
      } catch (error) {
        console.log("android back button error");
        console.log(error);
      }
    }, 999);

    LoadingIndicatorService.getInstance()
      .initializeLoadingIndicator(this.loadingCtrl);

    ToastMessageService.getInstance()
      .initializeToastMessage(this.toastCtrl);

    MobileDeviceService.getInstance()
      .saveDeviceType(platform);
  }

  ngOnInit() {
    this.authService.shouldRedirectTo$.subscribe(res => {
      this.navCtrl ? (res.root ? this.navCtrl.setRoot(res.page, res.params) :
        this.navCtrl.push(res.page, res.params)) : false;
    });
  }

  @HostListener('document:click', ['$event'])
  handleAnchorClick(event: Event) {
    event.stopPropagation();
    const target = !!event && <Element>event.target;
    if (!target) {
      return;
    }
    if (this._isAnchorElement(target) && !this._isIonicElement(target)) {
      event.preventDefault();
      const href = target.getAttribute('href');
      let url = this._normalizeUrl(href);
      if (url) {
        const browser = this.iab.create(url, "_system", "location=true");
      }
    }
  }

  /**
   * apply debouce time for all element listed in BUTTON_DISABLE_CLASS_TAG_NAMES
   * and classes not contains BUTTON_DISABLE_EXCEPT_CLASS
   *
   * the debouce time value can be set up by const BUTTON_DEBOUCE_TIME_MS
   */
  //   @HostListener('document:click', ['$event'])
  //   onClickListener(event) {
  //
  //     const target = <HTMLElement>event.target;
  //     if (this.canApplyDebouceClick(target)) {
  //       if (!target.classList.contains(BUTTON_DISABLE_CLASS)) {
  //         this.renderer.addClass(target, BUTTON_DISABLE_CLASS);
  //         setTimeout(() => {
  //           this.renderer.removeClass(target, BUTTON_DISABLE_CLASS);
  //         }, BUTTON_DEBOUCE_TIME_MS);
  //       }
  //     }
  //   }

  canApplyDebouceClick(target: HTMLElement): boolean {
    const tagName = target.tagName.toLowerCase();
    const disabled = target.hasAttribute('disabled') || target.classList.contains(BUTTON_DISABLE_CLASS);
    const validTagName = BUTTON_DISABLE_CLASS_TAG_NAMES.indexOf(tagName) > -1;
    const validClass = !target.classList.contains(BUTTON_DISABLE_EXCEPT_CLASS);
    return target && validTagName && validClass && !disabled;
  }


  @HostListener('document:keydown', ['$event'])
  keyEvent(e: any) {
    const key = e.key || e.keyIdentifier;
    const keyCode = e.keyCode || e.which;
    if (key === 'Enter' || keyCode === 13) {
      if (e.target.tagName === 'INPUT') {
        e.preventDefault();
        this.keyboard.close();
        setTimeout(() => {
          this.keyboard.close();
          if (e.target.blur) {
            e.target.blur();
          } else {
            document.body.click();
          }
        }, 300);
      }
    }
  }

  private _isIonicElement(element: Element) {
    return element && element.className.includes('ion');
  }

  private _isAnchorElement(element: Element) {

    if (!element || !element.hasAttribute('href')) {
      return;
    }

    const href = element.getAttribute('href');
    const tagName = element.tagName;
    return tagName.toLowerCase() === 'a' && element.hasAttribute('href') && !href.startsWith('mailto') && !href.startsWith('tel');
  }

  private _normalizeUrl(url) {

    if (url.startsWith('#') || url.startsWith('/#')) {
      return;
    }

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      if (url.startsWith('/')) {
        return BASE_URL + url;
      }
      return 'http://' + url;
    }

    return url;
  }
}
