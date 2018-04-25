import {Directive} from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidatorFn,
  Validator,
  Validators
} from '@angular/forms';
import {Utils} from "../services/utilities/utilities";
import {AppConfig as app} from "../appConfig";

export function phoneValidator() {
  return (control: AbstractControl): { [key: string]: any } => {
    let phone = control.value;
    if (isNaN(phone)) {
      return {phoneError: app.Configuration.ContentMessage.invalid_phone_format};
    }

    if (Utils.isNotNull(phone)) {


      let isPhoneOk = false;
      // check home phome start with 01 or 02 or 0845
      isPhoneOk = phone.substring(0, 2) === '01'
        || phone.substring(0, 2) === '02'
        || phone.substring(0, 4) === '0845';
      if (isPhoneOk === true) {
        if (phone.length === 11) {
          return null;
        }
      }

      // check phone start with '07'
      isPhoneOk = phone.substring(0, 2) === '07';
      if (isPhoneOk === true) {
        if (
          (phone.length === 10)
          || (phone.length === 11)
        ) {
          return null;
        }
      }

      // check phone start with '03'
      isPhoneOk = phone.substring(0, 2) === '03';
      if (isPhoneOk === true) {
        if (phone.length === 11) {
          return null;
        }
      }
    }

    return {phoneError: app.Configuration.ContentMessage.invalid_phone_format};
  };
}


@Directive({
  selector: '[isPhone]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PhoneValidatorDirective,
    multi: true
  }]
})

export class PhoneValidatorDirective implements Validator {
  valFn: ValidatorFn = Validators.nullValidator;

  constructor() {
    this.valFn = phoneValidator();
  }

  validate(control: AbstractControl) {
    return this.valFn(control);
  }
}
