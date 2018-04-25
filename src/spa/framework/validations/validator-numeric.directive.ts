import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  Validator,
  ValidatorFn
} from '@angular/forms';
import { AppConfig as app } from "../appConfig";

function isNumber(txtNum: string): boolean {
  let ok: boolean = false;
  if (txtNum.match(/^-{0,1}\d+$/)) {
    //valid integer (positive or negative)
    ok = true;
  } else if (txtNum.match(/^\d+\.\d+$/)) {
    //valid float
    ok = true;
  } else {
    //not valid number
    ok = false;
  }

  let num = parseFloat(txtNum);
  // that is a number, now check num > 0
  return (ok === true) && (num >= 0);
}

export function numericValidator() {
  return (control: AbstractControl): { [key: string]: any } => {
    let input = control.value;
    if (isNumber(input) === false) {
      return { numericInvalid: app.Configuration.ContentMessage.account_management_card_added_to_wallet };
    }
    return null;
  };
}

export function numericValidatorCSC(key: string = 'numericInvalid') {
  return (control: AbstractControl): { [key: string]: any } => {
    let input = control.value;
    if (input && (!isNumber(input))) {
      return { key: app.Configuration.ContentMessage.cardCsc_invalid_characters };
    }

    if (input && isNumber(input) && input.length !== 3) {
      return { key: app.Configuration.ContentMessage.cardCsc_less_than_min };
    }
    return null;
  };
}

export function numericValidatorSerial(key: string = 'numericInvalid') {
  return (control: AbstractControl): { [key: string]: any } => {
    let input = control.value;
    if (input && (!isNumber(input) || input.length !== 10)) {
      return { key: app.Configuration.ContentMessage.park_api_10_digits };
    }
    return null;
  };
}

export function numericValidatorPIN(key: string = 'numericInvalid') {
  return (control: AbstractControl): { [key: string]: any } => {
    let input = control.value;
    if (input && (!isNumber(input) || input.length !== 4)) {
      return { key: app.Configuration.ContentMessage.PIN_4_digits };
    }
    return null;
  };
}

@Directive({
  selector: '[isNumeric]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: NumericValidatorDirective,
    multi: true
  }]
})

export class NumericValidatorDirective implements Validator {
  validatorFn: ValidatorFn;

  constructor() {
    this.validatorFn = numericValidator();
  }

  validate(control: AbstractControl) {
    return this.validatorFn(control);
  }
}
