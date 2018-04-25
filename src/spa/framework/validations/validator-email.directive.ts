import { Directive } from '@angular/core';
import {
    AbstractControl,
    NG_VALIDATORS,
    ValidatorFn,
    Validators,
    Validator
} from '@angular/forms';
import {AppConfig as app} from "../appConfig";
export function emailValidator() {
    return (control: AbstractControl): { [key: string]: any } => {
        const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        if (!emailRegex.test(control.value))
        {
            return { email: errorMessage() }
        }   
        
        return null;
    };
}

function errorMessage() {
    return app.Configuration.ContentMessage.email_invalid_email;
}


@Directive({
    selector: '[isEmail]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: EmailValidatorDirective,
        multi: true
    }]
})

export class EmailValidatorDirective implements Validator {
    valFn: ValidatorFn = Validators.nullValidator;
    constructor() {
        this.valFn = emailValidator();
    }

    validate(control: AbstractControl) {
        return this.valFn(control);
    }
}
