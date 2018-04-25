import {Directive} from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  Validator,
  ValidatorFn
} from '@angular/forms';

export function cardNumberTescoValidator() {
  return (control: AbstractControl): { [key: string]: any } => {
    let input = control.value;
    if (isNaN(input) === true) {
      return {cardNumberTescoInvalid: 'Invalid card number'};
    } else if (!input.startsWith("504507")) {
      return {cardNumberTescoInvalid: 'IIN shoud be starts with 504507'};
    }
    return null;



  };
}


@Directive({
  selector: '[cardNumberTesco]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CardNumberTescoValidatorDirective,
    multi: true
  }]
})

export class CardNumberTescoValidatorDirective implements Validator {

  validatorFn: ValidatorFn;

  constructor() {
    this.validatorFn = cardNumberTescoValidator();
  }

  validate(control: AbstractControl) {
    return this.validatorFn(control);
  }
}
