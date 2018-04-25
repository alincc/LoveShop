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
export function requireStandardDropdownListValidator(fieldName?: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const input = control.value;
        if (input !== null && typeof input !== 'undefined' && input === "-1") {
            return { required: errorMessage(fieldName) };
        }

        return null;
    };
}

function errorMessage(fieldName: string): string {
    return app.Configuration.ContentMessage.required;
}


@Directive({
    selector: '[requireStandardDropdownList]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: RequireStandardDropdownListDirective,
            multi: true
        }
    ]
})

export class RequireStandardDropdownListDirective implements Validator, OnChanges {
    @Input() requireStandardDropdownList: string;
    valFn: ValidatorFn = Validators.nullValidator;
    constructor() {
        this.valFn = requireStandardDropdownListValidator();
    }

    ngOnChanges(changes: SimpleChanges): void {
        const change = changes['requireDropdownList'];
        if (change) {
            const val: string = change.currentValue;
            this.valFn = requireStandardDropdownListValidator(val);
        } else {
            this.valFn = Validators.nullValidator;
        }
    }

    validate(control: AbstractControl) {
        return this.valFn(control);
    }
}
