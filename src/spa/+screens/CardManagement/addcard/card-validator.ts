import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function isMasterCard(c: AbstractControl) : ValidationErrors | null {
  const {value} = c;
  const token = '545873';
  if (value.length !== 16) {
    return {
      invalidMasterCardID: {
        expectedLength: 16,
        actualLength: value.length
      }
    }
  } else if (!value.startsWith(token)) {
    return {
      invalidMasterCardID: {
        expectedStartWidth: token
      }
    }
  }
  return null;
}

export function lengthEquals(length: number) : ValidatorFn {

  return function (c: AbstractControl) : ValidationErrors | null {
    const { value } = c;
    return (value && value.length === length) ? null : {
      lengthEquals: {
        expectedLength: length,
        actualLength: value.length
      }
    }
  }
}
