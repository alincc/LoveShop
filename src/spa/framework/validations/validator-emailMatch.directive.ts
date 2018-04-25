import {
  FormGroup
} from '@angular/forms';
import { Utils } from "../services/utilities/utilities";

export function checkMatchWith(
  field: string,
  confirmField: string,
  fieldName: string = 'Password',
  confirmFieldName: string = 'confirmation password') {
  return (group: FormGroup) => {
    let fieldInput = group.controls[field],
        confirmationInput = group.controls[confirmField];
    if (
      fieldInput &&
      confirmationInput &&
      Utils.isNotNull(fieldInput.value) &&
      Utils.isNotNull(confirmationInput.value) &&
      fieldInput.value.toLowerCase() !== confirmationInput.value.toLowerCase()) {
      return confirmationInput.setErrors({ notEquivalent: errorMessage(fieldName, confirmFieldName) })
    }
    else {
      return confirmationInput.setErrors(null);
    }
  }
}

function errorMessage( fieldName, confrimFieldName): string {
  return `${fieldName} and ${confrimFieldName} do not match.`;
}
