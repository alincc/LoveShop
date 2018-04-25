import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';

import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';
import {Utils} from "../services/utilities/utilities";
import {AppConfig as app} from "../appConfig";
export function containsCharactersValidator(fieldName: string) {
  return (control: AbstractControl): { [key: string]: any } => {
    let pattern = /^[0-9a-zA-Z &\-'\u2018\u2019\u201A\u201B\u0060,\.\\\/]+$/;
    const field = control.value;    
    if (Utils.isNotNull(field) && field !=='' && !pattern.test(field)) {
          return {containsCharacters: errorMessage(fieldName)};  
    }

    return null;
  };
}

export function containsOnlyLeterValidator(fieldName: string) {
  return (control: AbstractControl): { [key: string]: any } => {
    let pattern = /^[a-zA-Z \-'\u2018\u2019\u201A\u201B\u0060]+$/;
    const field = control.value;
    if (Utils.isNotNull(field) && !pattern.test(field)) {
          return {containsCharacters: errorMessage(fieldName)};  
    }

    return null;
  };
}

function errorMessageEmail(fieldName: string): string {
  return `${fieldName} contains invalid characters`;
}

function errorMessage(fieldName: string): string {
  return `${fieldName} contains invalid characters`;
}

export function containsCharactersValidatorPostCode(fieldName: string) {
  return (control: AbstractControl): { [key: string]: any } => {
    let patternStr = '$@!%*#?&,£()=+"';
    const input = control.value;
    for (let r = 0; r < patternStr.length; r++) {
      if (Utils.isNotNull(input)) {
        if (input.indexOf(patternStr[r]) !== -1) {
          return {containsCharacters: errorMessagePostCode(fieldName)};
        }
      }
    }

    return null;
  };
}


function errorMessagePostCode(fieldName: string): string {
  return app.Configuration.ContentMessage.park_api_invalid_postcode;
}


@Directive({
  selector: '[containsCharacters]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ContainsCharactersValidatorDirective,
    multi: true
  }]
})

export class ContainsCharactersValidatorDirective implements Validator, OnChanges {
  @Input() containsCharacters: string;
  valFn: ValidatorFn = Validators.nullValidator;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const change = changes['containsCharacters'];
    if (change) {
      const val: string = change.currentValue;
      this.valFn = containsCharactersValidator(val);
    } else {
      this.valFn = Validators.nullValidator;
    }


  }

  validate(control: AbstractControl) {
    return this.valFn(control);
  }

}
