import {
    Directive
} from '@angular/core';

import {
    NG_VALIDATORS,
    Validator,
    AbstractControl,
    Validators,
    ValidatorFn
} from '@angular/forms';
import {AppConfig as app} from "../appConfig";
let errorMessage = {
    'passwordInvalid': app.Configuration.ContentMessage.password_invalid_characters
};

export function passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const passwordInput = control.value;
        let message = errorMessage.passwordInvalid;
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@!%*#?&.,Â£()=+"])[\w$@!%*#?&.,Â£()=+"]{8,}$/;
        
        let passwordPolicy = localStorage.getItem('password-policy');
        if(passwordPolicy){
           try {
               let policyStr = passwordPolicy;
               let policy = JSON.parse(policyStr);
           } catch (e) {
           }
        }    
        var error = regex.test(passwordInput) ? null : { passwordInvalid: message };
        return error;
    };
}


@Directive({
    selector: '[validatorPassword]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: ValidatorPasswordDirective,
            multi: true
        }
    ]
})

export class ValidatorPasswordDirective implements Validator {
    private valFn = Validators.nullValidator;
    constructor() {
        this.valFn = passwordValidator();
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }
}
