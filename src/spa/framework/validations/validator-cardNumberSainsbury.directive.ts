import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  Validator,
  ValidatorFn
} from '@angular/forms';

export function cardNumberSainsburyValidator() {
  return (control: AbstractControl): { [key: string]: any } => {
    let input = control.value;
    if(input.trim().length != 19) {
        return { cardNumberSainsburyInvalid: 'The sainsbury card number should be 19 characters' };
    } else if(isNaN(input) === true) {
      return { cardNumberSainsburyInvalid: 'Invalid card number' };
    } else if(!input.startsWith("634175")) {
        return { cardNumberSainsburyInvalid: 'IIN shoud be starts with 634175' };
    }
    return null;
  };
}


@Directive({
  selector: '[cardNumberSainsbury]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CardNumberSainsburyValidatorDirective,
    multi: true
  }]
})

export class CardNumberSainsburyValidatorDirective implements Validator {

  validatorFn: ValidatorFn;

  constructor() {
    this.validatorFn = cardNumberSainsburyValidator();
  }

  validate(control: AbstractControl) {
    return this.validatorFn(control);
  }
}
