import * as _ from 'lodash';
import {Injectable} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() {
  }

  public displayErrors(control: AbstractControl): boolean {
    return control.parent.dirty && !_.isEmpty(control.errors);
  }

  public getErrorText(control: AbstractControl): string | null {
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
