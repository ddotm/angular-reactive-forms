import {Injectable} from '@angular/core';
import {AbstractControl} from '@angular/forms';

declare var _: any;

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() {
  }

  displayErrors(control: AbstractControl): boolean {
    return control.parent.dirty && !_.isEmpty(control.errors);
  }

  getErrorText(control: AbstractControl): string | null {
    // console.log(JSON.stringify(control.errors));
    if (!_.isEmpty(control.errors)) {
      if (control.errors.requiredIf ||
        control.errors.requiredIf_allEmpty ||
        control.errors.requiredIf_notEmpty ||
        control.errors.required) {
        return 'Required';
      }
      if (control.errors.invalid || control.errors.pattern || control.errors.patternError) {
        return 'Invalid';
      }
      if (control.errors.email) {
        return 'Invalid email';
      }
      if (control.errors.invalidDateRange) {
        return 'Invalid date range';
      }
    }
    return null;
  }
}
