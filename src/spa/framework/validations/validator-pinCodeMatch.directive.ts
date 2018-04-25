import {
    FormGroup
} from '@angular/forms';
import {AppConfig as app} from "../appConfig";

let PIN_and_confirm_do_not_match = app.Configuration.ContentMessage.PIN_and_confirm_do_not_match;
export function checkMatchWith(fields: any[]) {
    return (group: FormGroup) => {
        fields.forEach(item => {
            let fieldInput = group.controls[item.Field],
            confirmationInput = group.controls[item.ConfirmField];
            if (fieldInput.value !== confirmationInput.value) {
                return confirmationInput.setErrors({ notEquivalent: errorMessage() })
            }
            else {
                if (fieldInput.value === '' && confirmationInput.value === ''){
                    return fieldInput.setErrors({ notEquivalent:'error' });
                }
                return confirmationInput.setErrors(null);
            }
        });
    }
}

function errorMessage(): string {
    return PIN_and_confirm_do_not_match;
}
