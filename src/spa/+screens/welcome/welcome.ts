import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {RouteManagerService} from './../../framework/services/routeManager/routeManager.service';
import {CheckConnectionNetworkService} from './checkConnectionNetwork.service';
import {HttpCheckNetworkService} from "./httpCheckNetwork.service";
import {AuththenticationGuardService} from "../../framework/login/authenticationGuard.service";
import {PinCodeService} from "../../framework/services/pinCodeService/pinCode.service";
import {AuthenticationDataSharingService} from "../../framework/login/authenticationDataSharing.service";
import {VerifyPINService} from '../AccountManagement/verifyPIN/verifyPIN.service';
import {LoadingIndicatorService} from "../../framework/services/loadingIndicatorService/loadingIndicator.service";
import {Where2SpendSharingDataService} from "../whereToSpend/where2SpendSharingData.services";
import {WelcomeService} from "./welcome.service";
import {Observable} from 'rxjs/Observable';
import {AppConfig as app} from "../../framework/appConfig";
import {Utils} from "../../framework/services/utilities/utilities";

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
  providers: [
    CheckConnectionNetworkService,
    HttpCheckNetworkService,
    WelcomeService
  ]
})
export class WelcomePage {
  constructor(public routeManager: RouteManagerService,
              private checkConnectionNetworkService: CheckConnectionNetworkService,
              private welcomeService: WelcomeService,
              public authGuardService: AuththenticationGuardService,
              private navCtrl: NavController) {

  }

  ionViewWillEnter() {
    let passwordPolicy = localStorage.getItem('password-policy');
    if (this.authGuardService.invalidTokenState$.getValue() &&
      !VerifyPINService.getInstance().VisibleScreen) {
      this.authGuardService.invalidTokenState$.next(false);
    }
    if (!this.authGuardService.isAuthenticated() || !passwordPolicy) {
      this.getContentMSG();
      this.checkConnectionNetworkService
        .getPasswordValidationRules()
        .subscribe(res => {
          localStorage.setItem('password-policy', JSON.stringify(res.response));
        });
    } else {
      this.OnNavigate();
    }
  }


  public getContentMSG() {
LoadingIndicatorService.getInstance().showLoadingIndicator();
    const observer = {
      next: (res) => {
        let msg_code =
          [
            'cardCsc_required',
            'cardCsc_less_than_min',
            'cardCsc_invalid_characters',
            'reset_fingerprint',
            'use_of_fingerprint',
            'use_fingerprint_not_PIN',
            'use_same_finger',
            'five_digit_pin',
            'confirm_pin',
            'PIN_5_digit',
            'PIN_and_confirm_do_not_match',
            'create_print_ID',
            'skip_id_setup',
            'wrong_touch_ID',
            'too_many_attempts',
            'setup_PIN',
            'token_expired',
            'fail_attempts',
            'wrong_PIN',
            'required',
            'quantity_invalid',
            'park_catalogue_product_out_of_stock',
            'invalid_phone_format',
            'gps_unavailable',
            'park_api_unexpected_error',
            'park_api_email_already_exists',
            'park_api_touch_ID_not_available',
            'park_api_user_id_no_match',
            'park_api_minimum_age',
            'park_api_date_of_birth',
            'park_api_card_number_no_match',
            'firstName_invalid_characters',
            'lastName_invalid_characters',
            'park_api_invalid_postcode',
            'email_invalid_email',
            'confirmEmail_equal_to',
            'PIN_4_digits',
            'park_api_invalid_number',
            'park_api_10_digits',
            'password_invalid_characters',
            'park_api_password_no_match',
            'park_api_serial_number_no_match',
            'enter_postcode_or_search_for_an_address',
            'enter_address_manually',
            'account_management_to_add_card_register',
            'account_management_register_addcard',
            'account_management_already_have_account',
            // 'ForgotPassword_en_properties',
            'enter_account_password_to_view_card',
            'account_management_refund_full_value',
            'account_management_full_refund_being_processed',
            'account_management_click_to_refund_balance',
            'account_management_no_cards_available',
            'account_management_set_default_card',
            'use_current_location',
            'account_management_logout',
            'PIN_enter_5_digit',

          ];

        for (let i = 0; i < msg_code.length; i++) {
          if (Utils.isNotNull(res[i]) && Utils.isNotNull(res[i].response) && Utils.isNotNull(res[i].response.message)) {
            let mg_item_code = msg_code[i];
            app.Configuration.ContentMessage[mg_item_code] = res[i].response.message;
          }
        }
      },
      error: (error) => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
      },
      complete: () => {
        LoadingIndicatorService.getInstance().hideLoadingIndicator();
        LoadingIndicatorService.getInstance().resetState();
      }
    };
    Observable.combineLatest(
      this.welcomeService.getContentFromRetreiveContent("order.datacash-payment.capture.default.error.cardCsc-required"),
      this.welcomeService.getContentFromRetreiveContent("order.datacash-payment.capture.default.error.cardCsc-less-than-min"),
      this.welcomeService.getContentFromRetreiveContent("order.datacash-payment.capture.default.error.cardCsc-invalid-characters"),
      this.welcomeService.getContentFromRetreiveContent("reset-fingerprint"),
      this.welcomeService.getContentFromRetreiveContent("use-of-fingerprint"),
      this.welcomeService.getContentFromRetreiveContent("use-fingerprint-not-PIN"),
      this.welcomeService.getContentFromRetreiveContent("use-same-finger"),
      this.welcomeService.getContentFromRetreiveContent("5-digit-pin"),
      this.welcomeService.getContentFromRetreiveContent("confirm-pin"),
      this.welcomeService.getContentFromRetreiveContent("PIN-5-digits"),
      this.welcomeService.getContentFromRetreiveContent("PIN-and-confirm-do-not-match"),
      this.welcomeService.getContentFromRetreiveContent("create-print-ID"),
      this.welcomeService.getContentFromRetreiveContent("skip-id-setup"),
      this.welcomeService.getContentFromRetreiveContent("wrong-touch-ID"),
      this.welcomeService.getContentFromRetreiveContent("too-many-attempts"),
      this.welcomeService.getContentFromRetreiveContent("setup-PIN"),
      this.welcomeService.getContentFromRetreiveContent("token-expired"),
      this.welcomeService.getContentFromRetreiveContent("fail-attempts"),
      this.welcomeService.getContentFromRetreiveContent("wrong-PIN"),
      this.welcomeService.getContentFromRetreiveContent("required"),
      this.welcomeService.getContentFromRetreiveContent("quantity-invalid"),
      this.welcomeService.getContentFromRetreiveContent("park-catalogue.product.out-of-stock"),
      this.welcomeService.getContentFromRetreiveContent("invalid-phone-format"),
      this.welcomeService.getContentFromRetreiveContent("gps-unavailable"),
      this.welcomeService.getContentFromRetreiveContent("park-api.unexpected-error"),
      this.welcomeService.getContentFromRetreiveContent("park-api-email-already-exists"),
      this.welcomeService.getContentFromRetreiveContent("park-api-touch-ID-not-available"),
      this.welcomeService.getContentFromRetreiveContent("park-api.user-id-no-match"),
      this.welcomeService.getContentFromRetreiveContent("park-api.minimum-age"),
      this.welcomeService.getContentFromRetreiveContent("park-api.date-of-birth"),
      this.welcomeService.getContentFromRetreiveContent("park-api.card-number-no-match"),
      this.welcomeService.getContentFromRetreiveContent("firstName-invalid-characters"),
      this.welcomeService.getContentFromRetreiveContent("lastName-invalid-characters"),
      this.welcomeService.getContentFromRetreiveContent("park-api.invalid-postcode"),
      this.welcomeService.getContentFromRetreiveContent("email-invalid-email"),
      this.welcomeService.getContentFromRetreiveContent("confirmEmail-equal-to"),
      this.welcomeService.getContentFromRetreiveContent("PIN-4-digits"),
      this.welcomeService.getContentFromRetreiveContent("park-api.invalid-number"),
      this.welcomeService.getContentFromRetreiveContent("park-api.10-digits"),
      this.welcomeService.getContentFromRetreiveContent("password-invalid-characters"),
      this.welcomeService.getContentFromRetreiveContent("park-api.password-no-match"),
      this.welcomeService.getContentFromRetreiveContent("park-api.serial-number-no-match"),
      this.welcomeService.getContentFromRetreiveContent("enter-postcode-or-search-for-an-address"),
      this.welcomeService.getContentFromRetreiveContent("enter-address-manually"),

      this.welcomeService.getContentFromRetreiveContent("account-management.to-add-card-register"),
      this.welcomeService.getContentFromRetreiveContent("account-management.register-addcard"),
      this.welcomeService.getContentFromRetreiveContent("account-management.already-have-account"),
      // this.welcomeService.getContentFromRetreiveContent("ForgotPassword_en.properties"),

      this.welcomeService.getContentFromRetreiveContent("enter-account-password-to-view-card"),
      this.welcomeService.getContentFromRetreiveContent("account-management.refund-full-value"),
      this.welcomeService.getContentFromRetreiveContent("account-management.full-refund-being-processed"),
      this.welcomeService.getContentFromRetreiveContent("account-management.click-to-refund-balance"),
      this.welcomeService.getContentFromRetreiveContent("account-management.no-cards-available"),
      this.welcomeService.getContentFromRetreiveContent("account-management.set-default-card"),
      this.welcomeService.getContentFromRetreiveContent("use-current-location"),
      this.welcomeService.getContentFromRetreiveContent("account-management.logout"),
      this.welcomeService.getContentFromRetreiveContent("PIN-enter-5-digit")

    ).subscribe(observer)
  }


  ionViewDidEnter() {
    Where2SpendSharingDataService.getInstance().resetState();
  }

  goToW2S() {
    this.navCtrl.push('Where2SpendInStoreMapPage')
  }

  OnNavigate() {
    if (PinCodeService
        .getInstance()
        .needSetupPinCode(AuthenticationDataSharingService.getInstance().loginEmail) === true
    ) {
      this.navCtrl.setRoot('SetupPINPage', {nextPage: 'TouchIDSettingFirstTimePage'});
    } else {
      this.navCtrl.setRoot('TabsPage', {showVerifyPIN: true});
    }
  }
}
