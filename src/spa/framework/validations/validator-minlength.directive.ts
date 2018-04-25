import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';
import {AppConfig as app} from "../appConfig";

export function minlengthValidator(length: number,
                                   fieldName: string = 'field') {
  return (control: AbstractControl): { [key: string]: any } => {
    const input = control.value;
    if (input !== null && typeof input !== 'undefined' && input !== '' && input.trim() !== '') {
      return (input.length < length)
        ? {minlength: errorMessage(fieldName, length)}
        : null;
    }

    return null;
  };
}

function errorMessage(fieldName: string = 'field',
                      length: number): string {
  return `${fieldName} must be at least ${length} characters in length.`;
}

export function minlengthValidatorCSC(length: number,
                                   fieldName: string = 'field') {
  return (control: AbstractControl): { [key: string]: any } => {
    const input = control.value;
    if (input !== null && typeof input !== 'undefined') {
      return (input.length < length)
        ? {minlength: errorMessageCSC(fieldName, length)}
        : null;
    }

    return null;
  };
}


function errorMessageCSC(fieldName: string = 'field',
                         length: number): string {
    // return `The CSC must contain 3 digit numbers.`;
    return app.Configuration.ContentMessage.cardCsc_less_than_min;
}


export function minlengthValidatorPostCode(length: number,
                                      fieldName: string = 'field') {
  return (control: AbstractControl): { [key: string]: any } => {
    const input = control.value;
    if (input !== null && typeof input !== 'undefined') {
      return (input.length < length)
        ? {minlength: errorMessagePostCode(fieldName, length)}
        : null;
    }

    return null;
  };
}


function errorMessagePostCode(fieldName: string = 'field',
                         length: number): string {
  return app.Configuration.ContentMessage.park_api_invalid_postcode;
}

function errorMessageSerialNumber(fieldName: string = 'field',
                      length: number): string {
  return `Must be ${length} digit numbers.`;
}

export function minlengthValidatorSerialNumber(length: number,
                                      fieldName: string = 'field') {
    return (control: AbstractControl): { [key: string]: any } => {
        const input = control.value;
        if (input !== null && typeof input !== 'undefined') {
            return (input.length < length)
                ? {minlength: errorMessageSerialNumber(fieldName, length)}
                : null;
        }

        return null;
    };
}

export function minlengthValidatorPIN(length: number,
                                      fieldName: string = 'field') {
    return (control: AbstractControl): { [key: string]: any } => {
        const input = control.value;
        if (input !== null && typeof input !== 'undefined') {
            return (input.length < length)
                ? {minlength: errorMessagePIN(fieldName, length)}
                : null;
        }

        return null;
    };
}

function errorMessagePIN(fieldName: string = 'field',
                         length: number): string {
    return app.Configuration.ContentMessage.PIN_4_digits;
}

@Directive({
  selector: '[minlength]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MinLengthValidatorDirective,
    multi: true
  }]
})

export class MinLengthValidatorDirective implements Validator, OnChanges {
  @Input() minlength: string;
  valFn: ValidatorFn = Validators.nullValidator;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const change = changes['minlength'];
    if (change) {
      this.valFn = minlengthValidator(parseInt(change.currentValue, 0));
    } else {
      this.valFn = Validators.nullValidator;
    }
  }

  validate(control: AbstractControl) {
    return this.valFn(control);
  }

}
