import {
    Directive,
    Input,
    OnChanges,
    SimpleChanges
} from '@angular/core';

import {
    NG_VALIDATORS,
    Validators,
    Validator,
    ValidatorFn,
    AbstractControl
} from '@angular/forms';
import {AppConfig as app} from "../appConfig";
export function minlengthFieldValidator(
    length: number,
    fieldName: string = 'field'
) {
    return (control: AbstractControl): { [key: string]: any } => {
        const input = control.value;
        if (input !== null && typeof input !== 'undefined') {
            return (input.length < length)
                ? { minlengthField: errorMessage(fieldName, length) }
                : null;
        }

        return null;
    };
}

function errorMessage(
    fieldName: string = 'field',
    length: number
): string {
    return `${fieldName} can be no less than ${length} characters in length.`;
}

export function minlengthFieldValidatorPostcode(
    length: number,
    fieldName: string = 'field'
) {
    return (control: AbstractControl): { [key: string]: any } => {
        const input = control.value;
        if (input !== null && typeof input !== 'undefined') {
            return (input.length < length)
                ? { minlengthField: errorMessagePostCode(fieldName, length) }
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



@Directive({
    selector: '[minlengthField]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: MinlengthFieldValidatorDirective,
        multi: true
    }]
})

export class MinlengthFieldValidatorDirective implements Validator, OnChanges {
    @Input() minlengthField: string;
    valFn: ValidatorFn = Validators.nullValidator;
    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        const change = changes['minlengthField'];
        if (change) {
            this.valFn = minlengthFieldValidator(parseInt(change.currentValue, 0));
        } else {
            this.valFn = Validators.nullValidator;
        }
    }

    validate(control: AbstractControl) {
        return this.valFn(control);
    }

}
