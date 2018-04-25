import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AbstractControl, FormGroup, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';
import {AppConfig as app} from "../appConfig";

export function serialNumberMatch(field: string, confirmField: string) {
  return (group: FormGroup) => {
    let fieldInput = group.controls[field],
      confirmationInput = group.controls[confirmField];
    if (fieldInput.value !== confirmationInput.value) {
      return confirmationInput.setErrors({notEquivalent: errorMessageSainsbury()})
    }
    else {
      return confirmationInput.setErrors(null);
    }
  }
}

function errorMessageSainsbury(): string {
  return app.Configuration.ContentMessage.park_api_serial_number_no_match;
}


export function checkMatchWith(field: string) {
  return (control: AbstractControl): { [key: string]: any } => {
    let confirmSerialNumber = control.value;
    let serialNumber = control.root.get(field);
    if (serialNumber && serialNumber.value === confirmSerialNumber) {
      return null;
    }
    return {notMatch: errorMessage(field)};
  };
}

function errorMessage(field: string): string {
  return app.Configuration.ContentMessage.park_api_serial_number_no_match;
}

@Directive({
  selector: '[matchWith]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MatchDirective,
      multi: true
    }
  ]
})

export class MatchDirective implements Validator, OnChanges {
  @Input() matchWith: string;

  valFn: ValidatorFn = Validators.nullValidator;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    let change = changes['matchWith'];
    if (change) {
      this.valFn = checkMatchWith(change.currentValue);
    } else {
      this.valFn = Validators.nullValidator;
    }
  }

  validate(control: AbstractControl): { [key: string]: any } {
    return this.valFn(control);
  }
}
