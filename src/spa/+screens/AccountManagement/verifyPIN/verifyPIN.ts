import { Component } from '@angular/core';
import { Platform, IonicPage, AlertController, TextInput } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { requireValidator } from "../../../framework/validations/validator-required.directive";
import { VerifyPINService } from "./verifyPIN.service";
import { RouteManagerService } from "../../../framework/services/routeManager/routeManager.service";
import { Renderer, ViewChildren, QueryList } from '@angular/core';
import { NavParams, ViewController, NavController } from 'ionic-angular';
import { PinCodeService } from "../../../framework/services/pinCodeService/pinCode.service";
import { AuthenticationDataSharingService } from "../../../framework/login/authenticationDataSharing.service";
import { Utils } from "../../../framework/services/utilities/utilities";
import { Observable } from "rxjs/Observable";
import { LogoutDataService } from "../../../framework/login/logoutData.service";
import { AuththenticationGuardService } from "../../../framework/login/authenticationGuard.service";
import { Subscription } from "rxjs/Rx";
import { numericValidator } from "../../../framework/validations/validator-numeric.directive";
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import {AppConfig as app} from "../../../framework/appConfig";

const MAX_TIME_ATTEMPT = 3;

@IonicPage()
@Component({
  selector: 'page-verifyPIN',
  templateUrl: 'verifyPIN.html',
  providers: [
    LogoutDataService,
  ]
})

export class VerifyPINPage {
  error: boolean;
  timeAttemp: number;
  model: any = {};
  pauseSubVerifyPIN: Subscription;
  private VerifyPINActive: boolean = true;
  private VerifyTouchActive: boolean = false;
  private wrongPinMessage: any = 'PIN is not correct.';
  public showPinWhenValidToken$: Observable<boolean>;
  private alertPinWrong: any;
  private alertTouchWrong: any;
  private callFrom: any;
  focusInInput= false;
  five_digit_pin = app.Configuration.ContentMessage.five_digit_pin;
  wrong_touch_ID = app.Configuration.ContentMessage.wrong_touch_ID;
  too_many_attempts = app.Configuration.ContentMessage.too_many_attempts;
  token_expired = app.Configuration.ContentMessage.token_expired;
  fail_attempts = app.Configuration.ContentMessage.fail_attempts;
  wrong_PIN = app.Configuration.ContentMessage.wrong_PIN;
  PIN_enter_5_digit = app.Configuration.ContentMessage.PIN_enter_5_digit;
  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;

  constructor(
    private platform: Platform,
    private formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public routeManager: RouteManagerService,
    public navCtrl: NavController,
    private params: NavParams,
    public renderer: Renderer,
    public viewCtrl: ViewController,
    private logoutDataService: LogoutDataService,
    private authService: AuththenticationGuardService,
    private touchId: FingerprintAIO
  ) {
    this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'my-popup', true);

    this.buildForm();
    this.error = false;
    this.timeAttemp = 0;
    this.showPinWhenValidToken$ = authService.invalidTokenState$
      .map(value => !value);
    
    this.callFrom = this.params.get('callFrom')
  }
  closeModal() {
    this.authService.invalidTokenState$.next(false);
    this.dismiss();
  }
  ionViewWillEnter() {
    let vPinSvc = VerifyPINService.getInstance();
    const touchIDState = vPinSvc.touchIDState;
    this.five_digit_pin = app.Configuration.ContentMessage.five_digit_pin;

    if (touchIDState === true && (!this.callFrom || this.callFrom !== 'ChangeTouchID')) {
      this.touchId.isAvailable().then(res => {
        this.VerifyTouchActive = true;
        return this.touchId.show({
          clientId: 'Touch ID for Love2Shop',
          clientSecret: 'myPassword', //Only necessary for Android
          disableBackup: true,  //Only for Android(optional)
        });
      })
      .then(res => {
        this.pauseSubVerifyPIN.unsubscribe();
        this.pauseSubVerifyPIN = undefined;

        VerifyPINService.getInstance().VisibleScreen = false;
        this.viewCtrl.dismiss();
      })
      .catch(err => {
        this.VerifyTouchActive = false;
        if (err === '-1' || err ==='-8') {
          this.showAlertTouchIdFail();
        }
      });
    } else {
      this.VerifyPINActive = true;
    }    

    if (!this.pauseSubVerifyPIN) {
      this.pauseSubVerifyPIN = this.platform.pause.subscribe((res) => {
        if (this.callFrom && this.callFrom === 'ChangeTouchID') {
          return;
        }

        this.dismiss();
      });
    }
  }

  private dismiss() {
    if (this.VerifyPINActive === true && this.VerifyTouchActive === false) {
      VerifyPINService.getInstance().VisibleScreen = false;
      this.viewCtrl.dismiss();
      this.VerifyPINActive = false;

      if (this.alertPinWrong) {
        this.alertPinWrong.dismiss();
      }
      
      if (this.alertTouchWrong) {
        this.alertTouchWrong.dismiss();
      }
    }
  }

  public verifyPINCode() {
    if (this.verifyPINForm.valid) {
      var inputPin = this.verifyPINForm.value;

      var currentPin = PinCodeService.getInstance()
        .getPinCode(
        AuthenticationDataSharingService.getInstance()
          .loginEmail);

      let isOK = Utils.isNotNull(currentPin);
      if (isOK === true) {
        isOK = currentPin.pin1 === inputPin.pin1;
      }
      if (isOK === true) {
        isOK = currentPin.pin2 === inputPin.pin2;
      }
      if (isOK === true) {
        isOK = currentPin.pin3 === inputPin.pin3;
      }
      if (isOK === true) {
        isOK = currentPin.pin4 === inputPin.pin4;
      }
      if (isOK === true) {
        isOK = currentPin.pin5 === inputPin.pin5;
      }

      if (isOK === true) {
        this.pauseSubVerifyPIN.unsubscribe();
        this.pauseSubVerifyPIN = undefined;

        VerifyPINService.getInstance().VisibleScreen = false;
        this.viewCtrl.dismiss();

        if (!this.callFrom || this.callFrom !== 'ChangeTouchID') {
          if (VerifyPINService.getInstance().IsChangeTouchScreen === true) {
            this.touchId.isAvailable().then(res => {
              // Have touch available then still stay in Change Touch page
            })
              .catch(err => {
                // No touch available then redirect to setting page.
                VerifyPINService.getInstance().verifyPINClosedInChangeTouch.emit(true);
              });
          }
        }
        
      } else {
        this.timeAttemp++;
        if (this.timeAttemp >= MAX_TIME_ATTEMPT) {
          this.error = true;
          this.wrongPinMessage = this.fail_attempts;
        }

        this.showWrongPinAlert();
      }
    }
  }

  showWrongPinAlert() {
    this.alertPinWrong = this.alertCtrl.create({
      title: this.wrong_PIN,
      message: this.wrongPinMessage,
      cssClass: 'wrong-pin l2s-alert--flat l2s-alert--default',
      buttons: [{
        text: 'OK',
        cssClass: 'main-button',
        handler: data => {
          this.buildForm();
        }
      }]
    });
    this.alertPinWrong.present();
  }

  redirectLogin() {
    this.logoutDataService.logout()
      .subscribe(res => {
      });
    this.authService.Logout();

    this.pauseSubVerifyPIN.unsubscribe();
    this.pauseSubVerifyPIN = undefined;

    VerifyPINService.getInstance().VisibleScreen = false;
    this.viewCtrl.dismiss();
    VerifyPINService.getInstance().verifyPINClosed.emit(true);
    location.reload();
  }

  updateInputOnKey(event: KeyboardEvent, target) {
    if (event.key !== 'Backspace' && target && typeof target.setFocus === 'function') {
      if (typeof event.stopImmediatePropagation === 'function') {
        event.stopPropagation();
      }
      target.setFocus();
    }
  }

  verifyPINForm: FormGroup;
  formErrors = {
    'pin1': '',
    'pin2': '',
    'pin3': '',
    'pin4': '',
    'pin5': ''
  };

  buildForm() {
    this.verifyPINForm = this.formBuilder.group({
      'pin1': ['', [
        requireValidator('pin1'),
        numericValidator()
      ]],
      'pin2': ['', [
        requireValidator('pin2'),
        numericValidator()
      ]],
      'pin3': ['', [
        requireValidator('pin3'),
        numericValidator()
      ]],
      'pin4': ['', [
        requireValidator('pin4'),
        numericValidator()
      ]],
      'pin5': ['', [
        requireValidator('pin5'),
        numericValidator()
      ]]
    }, {
      validator: {
        updateOn: 'blur'
      }
    });

    this.verifyPINForm.statusChanges.subscribe(() => {
      if (this.textInputs) {
        this.textInputs.forEach(input => input && input._inputUpdated && input._inputUpdated());
      }
    });
  }

  errorMessage(path: string) {
    const control = this.verifyPINForm.get(path);
    const requiredMsg = app.Configuration.ContentMessage.required;
    if (control.valid) {
      return '';
    }

    if (path === 'pin1' || path === 'pin2' || path === 'pin3' || path === 'pin4' || path === 'pin5') {
      if (control.hasError('required')) {
        return control.getError('required');
      } else {
        if (control.hasError('key')) {
          return control.getError('key')
        }
      }
    }
  }

  showAlertTouchIdFail() {
    this.alertTouchWrong = this.alertCtrl.create({
      title: this.wrong_touch_ID,
      message: this.too_many_attempts,
      cssClass: 'wrong-pin',
      buttons: [{
        text: 'OK'
      }]
    });

    this.alertTouchWrong.present();
  }
  private patchValue(controlName, value, updateState = false) {
    const control = this.verifyPINForm.get(controlName);
    control.patchValue(value);
    if (updateState) {
      control.markAsTouched();
      control.markAsDirty();
    }
  }
  onPinChange(pin) {
    const pin1 = pin.substr(0, 1);
    const pin2 = pin.substr(1, 1);
    const pin3 = pin.substr(2, 1);
    const pin4 = pin.substr(3, 1);
    const pin5 = pin.substr(4, 1);
    this.patchValue('pin1', pin1, true);
    if (pin.length > 1) {
      this.patchValue('pin2', pin2, true);
    } else {
      this.patchValue('pin2', pin2);
    }
    if (pin.length > 2) {
      this.patchValue('pin3', pin3, true);
    } else {
      this.patchValue('pin3', pin3);
    }
    if (pin.length > 3) {
      this.patchValue('pin4', pin4, true);
    } else {
      this.patchValue('pin4', pin4);
    }
    if (pin.length > 4) {
      this.patchValue('pin5', pin5, true);
    } else {
      this.patchValue('pin5', pin5);
    }
  }

  onFocusInput(event) {
    this.focusInInput = true;
  }

  focusoutInput(event) {
    this.focusInInput = false;
  }
}
