import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';
import subYears from 'date-fns/sub_years';
import format from 'date-fns/format';
import {AppConfig as app} from "../appConfig";

export function ageValidator() {
  return (control: AbstractControl): { [key: string]: any } => {
    let input = control.value;

    let age = getAge(input);
    if (isNaN(age) === true) {
      return {ageInvalid: app.Configuration.ContentMessage.park_api_date_of_birth};
    }
    return ((age >= 18) && (age <= 99))
      ? null
      : {ageInvalid: app.Configuration.ContentMessage.park_api_minimum_age};
  };
}

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}


@Directive({
  selector: '[isAge]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AgeValidatorDirective,
    multi: true
  }]
})

export class AgeValidatorDirective implements Validator {

  validatorFn: ValidatorFn;

  constructor() {
    this.validatorFn = ageValidator();
  }

  validate(control: AbstractControl) {
    return this.validatorFn(control);
  }
}
