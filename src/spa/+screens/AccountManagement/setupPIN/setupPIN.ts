import { Component, ViewChildren, QueryList } from '@angular/core';
import {
  IonicPage,
  AlertController,
  NavParams,
  NavController,
  TextInput
} from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { numericValidator } from "../../../framework/validations/validator-numeric.directive";
import { requireValidator } from "../../../framework/validations/validator-required.directive";
import { SetupPINService } from "./setupPIN.service";
import { checkMatchWith } from '../../../framework/validations/validator-pinCodeMatch.directive';
import { PinCodeService } from "../../../framework/services/pinCodeService/pinCode.service";
import { AuthenticationDataSharingService } from "../../../framework/login/authenticationDataSharing.service";
import { RouteManagerService } from "../../../framework/services/routeManager/routeManager.service";
import { Utils } from "../../../framework/services/utilities/utilities";
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { ToastMessageService } from "../../../framework/services/toastMessageService/toastMessage.service";
import {VerifyPINService} from "../verifyPIN/verifyPIN.service";
import $ from 'jquery';
import {AppConfig as app} from "../../../framework/appConfig";
@IonicPage()
@Component({
  selector: 'page-setupPIN',
  templateUrl: 'setupPIN.html',
  providers: [
    SetupPINService
  ]
})

export class SetupPINPage {
  nextPage: string;
  model: any = {};
  finalPage: any = '';
  confirm_pin = app.Configuration.ContentMessage.confirm_pin;
  PIN_5_digit = app.Configuration.ContentMessage.PIN_5_digit;
  PIN_enter_5_digit = app.Configuration.ContentMessage.PIN_enter_5_digit;
  PIN_and_confirm_do_not_match = app.Configuration.ContentMessage.PIN_and_confirm_do_not_match;
  setup_PIN = app.Configuration.ContentMessage.setup_PIN;
  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;
  
  constructor(
    private formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public routeManager: RouteManagerService,
    private setupPINService: SetupPINService,
    private navParams: NavParams,
    public navCtrl: NavController,
    public touchId: FingerprintAIO
  ) {
    this.nextPage = navParams.get('nextPage');
    this.buildForm();
  }

  five_digit_pin = app.Configuration.ContentMessage.five_digit_pin;

  ionViewWillEnter() {
    $('.app-root').addClass('not-show-tab');
  }

  ionViewWillLeave() {
    $('.app-root').removeClass('not-show-tab');
  }


  public setupPINCode() {

    if (this.setupPINForm.valid) {
      PinCodeService.getInstance()
        .savePinCode(
        AuthenticationDataSharingService.getInstance().loginEmail,
        this.setupPINForm.value
        );

      if (Utils.lengthGreaterThan0(this.nextPage)) {

        this.finalPage = this.navParams.get('finalPage');
        if (!this.finalPage || this.finalPage === '') {
          this.finalPage = 'TabsPage';
        }

        if (this.nextPage === 'TouchIDSettingFirstTimePage') {
          this.touchId.isAvailable()
            .then(res => {
              this.navCtrl.setRoot(this.nextPage, { nextPage: this.finalPage });
            }).catch(err => {
              VerifyPINService.getInstance().touchIDState = false;
              this.navCtrl.setRoot(this.finalPage);
            });
        }
        else {
          this.navCtrl.setRoot(this.nextPage);
        }
      }
    }
  }
  private patchValue(controlName, value, updateState = false) {
    const control = this.setupPINForm.get(controlName);
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

  onConfirmPinChange(pin) {
    const pin1 = pin.substr(0, 1);
    const pin2 = pin.substr(1, 1);
    const pin3 = pin.substr(2, 1);
    const pin4 = pin.substr(3, 1);
    const pin5 = pin.substr(4, 1);
    this.patchValue('pinConfirm1', pin1, true);
    if (pin.length > 1) {
      this.patchValue('pinConfirm2', pin2, true);
    } else {
      this.patchValue('pinConfirm2', pin2);
    }
    if (pin.length > 2) {
      this.patchValue('pinConfirm3', pin3, true);
    } else {
      this.patchValue('pinConfirm3', pin3);
    }
    if (pin.length > 3) {
      this.patchValue('pinConfirm4', pin4, true);
    } else {
      this.patchValue('pinConfirm4', pin4);
    }
    if (pin.length > 4) {
      this.patchValue('pinConfirm5', pin5, true);
    } else {
      this.patchValue('pinConfirm5', pin5);
    }
  }

  updateInputOnKey(event: KeyboardEvent, target) {
    if (event.key !== 'Backspace' && target && typeof target.setFocus === 'function') {
      if (typeof event.stopImmediatePropagation === 'function') {
        event.stopPropagation();
      }
      target.setFocus();
    }
  }

  setupPINForm: FormGroup;
  formErrors = {
    'pin1': '',
    'pin2': '',
    'pin3': '',
    'pin4': '',
    'pin5': '',
    'pinConfirm1': '',
    'pinConfirm2': '',
    'pinConfirm3': '',
    'pinConfirm4': '',
    'pinConfirm5': ''
  };

  buildForm() {
    this.setupPINForm = this.formBuilder.group({
      'pin1': ['',
        [requireValidator('pin1'),
        numericValidator()]],
      'pin2': ['',
        [requireValidator('pin2'),
        numericValidator()]],
      'pin3': ['',
        [requireValidator('pin3'),
        numericValidator()]],
      'pin4': ['',
        [requireValidator('pin4'),
        numericValidator()]],
      'pin5': ['',
        [requireValidator('pin5'),
        numericValidator()]],
      'pinConfirm1': [''],
      'pinConfirm2': [''],
      'pinConfirm3': [''],
      'pinConfirm4': [''],
      'pinConfirm5': ['']
    }, {
      validator: {
        validators: checkMatchWith([{Field: 'pin1', ConfirmField: 'pinConfirm1'},
          {Field: 'pin2', ConfirmField: 'pinConfirm2'},
          {Field: 'pin3', ConfirmField: 'pinConfirm3'},
          {Field: 'pin4', ConfirmField: 'pinConfirm4'},
          {Field: 'pin5', ConfirmField: 'pinConfirm5'}]),
        updateOn: 'blur'
      }
    });

    this.setupPINForm.statusChanges.subscribe(() => {
      if (this.textInputs) {
        this.textInputs.forEach(input => input && input._inputUpdated && input._inputUpdated());
      }
    });

  }

  errorMessage(path: string) {
    const control = this.setupPINForm.get(path);
    const requiredMsg = app.Configuration.ContentMessage.required;
    if (control.valid) {
      return '';
    }

    if (path === 'pin1' || path === 'pin2' || path === 'pin3' || path === 'pin4' || path === 'pin5' || path === 'pinConfirm1') {
      if (control.hasError('required')) {
        return control.getError('required');
      } else {
        if (control.hasError('minlengthField')) {
          return control.getError('minlengthField')
        }

        if (control.hasError('notEquivalent')) {
          return control.getError('notEquivalent')
        }
      }
    }
  }

  onFocusInput(event) {
  }

  focusoutInput(event) {
  }
}
