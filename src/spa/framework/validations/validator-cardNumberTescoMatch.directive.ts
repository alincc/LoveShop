import {
  FormGroup
} from '@angular/forms';
import {AppConfig as app} from "../appConfig";

export function checkMatchWith(field: string, confirmField: string) {
  return (group: FormGroup) => {
    let fieldInput = group.controls[field],
      confirmationInput = group.controls[confirmField];
    if (fieldInput.value !== confirmationInput.value) {
      return confirmationInput.setErrors({notEquivalent: errorMessage()})
    }
    else {
      return confirmationInput.setErrors(null);
    }
  }
}

function errorMessage(): string {
  return  app.Configuration.ContentMessage.park_api_card_number_no_match;
}

