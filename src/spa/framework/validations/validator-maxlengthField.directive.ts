import {
    AbstractControl
} from '@angular/forms';
import {AppConfig as app} from "../appConfig";

export function maxlengthFieldValidator(
    length: number,
    fieldName: string = 'field'
) {
    return (control: AbstractControl): { [key: string]: any } => {
        const input = control.value;
        if (input !== null && typeof input !== 'undefined') {
            return (input.length > length)
                ? { maxLengthField: errorMessage(fieldName, length) }
                : null;
        }

        return null;
    };
}

function errorMessage(
    fieldName: string = 'field',
    length: number
): string {
    return `${fieldName} can be no more than ${length} characters in length.`;
}

export function maxlengthFieldValidatorPostcode(
    length: number,
    fieldName: string = 'field'
) {
    return (control: AbstractControl): { [key: string]: any } => {
        const input = control.value;
        if (input !== null && typeof input !== 'undefined') {
            return (input.length > length)
                ? { maxLengthField: errorMessagePostCode(fieldName, length) }
                : null;
        }

        return null;
    };
}

function errorMessagePostCode(
    fieldName: string = 'field',
    length: number
): string {
    return app.Configuration.ContentMessage.park_api_invalid_postcode;
}


export function maxlengthFieldValidatorExtraCard(
    length: number,
) {
    return (control: AbstractControl): { [key: string]: any } => {
        const input = parseInt(control.value);
        if (input !== null && typeof input !== 'undefined') {
            return (input > length)
                ? { maxLengthField: errorMessageExtraCard(length) }
                : null;
        }

        return null;
    };
}

function errorMessageExtraCard(
    length
): string {
    return `Maximum ${length} extra gift cards.`;
}

export function maxlengthFieldValidatorCSC(
  length: number,
  fieldName: string = 'field'
) {
  return (control: AbstractControl): { [key: string]: any } => {
    const input = control.value;
    if (input !== null && typeof input !== 'undefined') {
      return (input.length > length)
        ? { maxLengthField: errorMessageCSC(fieldName, length) }
        : null;
    }

    return null;
  };
}

function errorMessageCSC(
  fieldName: string = 'field',
  length: number
): string {
  // return `The CSC must contain 3 digit numbers.`;
    return app.Configuration.ContentMessage.cardCsc_less_than_min;
}

export function maxlengthFieldValidatorPIN(
  length: number,
  fieldName: string = 'field'
) {
  return (control: AbstractControl): { [key: string]: any } => {
    const input = control.value;
    if (input !== null && typeof input !== 'undefined') {
      return (input.length > length)
        ? { maxLengthField: errorMessagePIN(fieldName, length) }
        : null;
    }

    return null;
  };
}

function errorMessagePIN(
  fieldName: string = 'field',
  length: number
): string {
  return app.Configuration.ContentMessage.PIN_4_digits;
}

