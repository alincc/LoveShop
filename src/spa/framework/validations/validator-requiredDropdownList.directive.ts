import {
    Directive,
    Input,
    OnChanges,
    SimpleChanges
} from '@angular/core';

import {
    ValidatorFn,
    AbstractControl,
    NG_VALIDATORS,
    Validator,
    Validators
} from '@angular/forms';
import {AppConfig as app} from "../appConfig";
export function requireDropdownListValidator(fieldName?: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const input = control.value;
        if (input !== null && typeof input !== 'undefined') {
            return (input !== '')
                ? null
                : { required: errorMessage(fieldName) };
        }

        return null;
    };
}

function errorMessage(fieldName: string): string {
    return app.Configuration.ContentMessage.required;
}


@Directive({
    selector: '[requireDropdownList]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: RequireDropdownListDirective,
            multi: true
        }
    ]
})

export class RequireDropdownListDirective implements Validator, OnChanges {
    @Input() requireDropdownList: string;
    valFn: ValidatorFn = Validators.nullValidator;
    constructor() {
        this.valFn = requireDropdownListValidator();
    }

    ngOnChanges(changes: SimpleChanges): void {
        const change = changes['requireDropdownList'];
        if (change) {
            const val: string = change.currentValue;
            this.valFn = requireDropdownListValidator(val);
        } else {
            this.valFn = Validators.nullValidator;
        }
    }

    validate(control: AbstractControl) {
        return this.valFn(control);
    }
}
