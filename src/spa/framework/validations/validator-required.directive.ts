import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AppConfig as app} from "../appConfig";
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

export function requireValidator(fieldName?: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const input = control.value;
        if (input !== null && typeof input !== 'undefined') {
            return (input.trim() !== '')
                ? null
                : {required: errorMessage(fieldName)};
        }

        return null;
    };
}

function errorMessage(fieldName: string): string {
    if (fieldName === 'cvv' || fieldName === 'csc') {
      return app.Configuration.ContentMessage.cardCsc_required;
    } else {
        return app.Configuration.ContentMessage.required;
    }

}


@Directive({
    selector: '[customRequired]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: RequireValidatorDirective,
            multi: true
        }
    ]
})

export class RequireValidatorDirective implements Validator, OnChanges {
    @Input() customRequired: string;
    valFn: ValidatorFn = Validators.nullValidator;

    constructor() {
        this.valFn = requireValidator();
    }

    ngOnChanges(changes: SimpleChanges): void {
        const change = changes['customRequired'];
        if (change) {
            const val: string = change.currentValue;
            this.valFn = requireValidator(val);
        } else {
            this.valFn = Validators.nullValidator;
        }
    }

    validate(control: AbstractControl) {
        return this.valFn(control);
    }
}
