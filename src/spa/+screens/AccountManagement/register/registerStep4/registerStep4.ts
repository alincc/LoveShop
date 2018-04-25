import {RegisterDataService} from '../registerData.service';
import {Component, ViewChildren, QueryList} from '@angular/core';
import {IonicPage, AlertController, NavController, TextInput} from 'ionic-angular';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PinCodeService} from "../../../../framework/services/pinCodeService/pinCode.service";
import {RegisterSharingDataService} from "../registerSharingData.service";
import {Utils} from "../../../../framework/services/utilities/utilities";
import {checkMatchWith} from "../../../../framework/validations/validator-pinCodeMatch.directive";
import {FingerprintAIO} from '@ionic-native/fingerprint-aio';
import {RouteManagerService} from "../../../../framework/services/routeManager/routeManager.service";
import {numericValidator} from "../../../../framework/validations/validator-numeric.directive";
import {requireValidator} from "../../../../framework/validations/validator-required.directive";
import {VerifyPINService} from "../../verifyPIN/verifyPIN.service";
import {AppConfig as app} from "../../../../framework/appConfig";

@IonicPage()
@Component({
  selector: 'page-registerStep4',
  templateUrl: 'registerStep4.html',
  providers: [
    RegisterDataService
  ]
})

export class RegisterStep4Page {
  model: any = {};
  confirm_pin = app.Configuration.ContentMessage.confirm_pin;
  PIN_5_digit = app.Configuration.ContentMessage.PIN_5_digit;
  PIN_enter_5_digit = app.Configuration.ContentMessage.PIN_enter_5_digit;
  PIN_and_confirm_do_not_match = app.Configuration.ContentMessage.PIN_and_confirm_do_not_match;

  private touchId: FingerprintAIO;
  @ViewChildren(TextInput) textInputs: QueryList<TextInput>;

  constructor(private formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public routeManager: RouteManagerService,
              public navCtrl: NavController,
              private registerDataService: RegisterDataService
    , touchId: FingerprintAIO) {
    this.buildForm();

    this.touchId = touchId;
  }

  public submitRegisterData() {
    if (this.registerUserForm.valid) {
      RegisterSharingDataService.getInstance().saveStep4Screen(this.registerUserForm.value);
      PinCodeService.getInstance()
        .savePinCode(
          RegisterSharingDataService.getInstance().getEmailAddressAtStep3(),
          this.registerUserForm.value
        );
      var a = PinCodeService.getInstance()
        .getPinCode(RegisterSharingDataService.getInstance().getEmailAddressAtStep3());
      this.touchId.isAvailable().then(data => {
        this.navCtrl.setRoot('RegisterStep5Page');
      })
        .catch(err => {
          VerifyPINService.getInstance().touchIDState = false;
          this.navCtrl.setRoot('RegisterStep7Page');
        });
    }
  }

  registerUserForm: FormGroup;
  account_created = app.Configuration.ContentMessage.account_created;
  five_digit_pin = app.Configuration.ContentMessage.five_digit_pin;
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
    this.registerUserForm = this.formBuilder.group({
      'pin1': ['', [requireValidator('pin1'),
        numericValidator()]],
      'pin2': ['', [requireValidator('pin2'),
        numericValidator()]],
      'pin3': ['', [requireValidator('pin3'),
        numericValidator()]],
      'pin4': ['', [requireValidator('pin4'),
        numericValidator()]],
      'pin5': ['', [requireValidator('pin5'),
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

    this.registerUserForm.statusChanges.subscribe(() => {
      if (this.textInputs) {
        this.textInputs.forEach(input => input && input._inputUpdated && input._inputUpdated());
      }
    });

    RegisterSharingDataService.getInstance().state$.subscribe(
      (res) => {
        if (Utils.isNotNull(res.step4Model)) {
          this.registerUserForm.setValue(res.step4Model);
        }
      }
    );
  }
  private patchValue(controlName, value, updateState = false) {
    const control = this.registerUserForm.get(controlName);
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
  updateInputOnKey(event, target) {
    if (event.key !== 'Backspace' && target && typeof target.setFocus === 'function') {
      target.setFocus();
    }
  }

  errorMessage(path: string) {
    const control = this.registerUserForm.get(path);
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


}
