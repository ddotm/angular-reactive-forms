import * as _ from 'lodash';
import {
  AbstractControl,
  FormGroup,
  ValidatorFn
} from '@angular/forms';

export class CustomValidators {

  public static requiredIf_allEmpty(form: FormGroup, controlNames: Array<string>): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {

      if (CustomValidators.valueProvided(control.value)) {
        return null;
      }

      let error = {requiredIf_allEmpty: true};
      _.forEach(controlNames, (controlName) => {
        if (CustomValidators.valueProvided(form.controls[controlName].value)) {
          error = null;
          return false; // This terminates the loop, does NOT exit the method
        }
      });
      return error;
    };
  }

  public static requiredIf_notEmpty(form: FormGroup, controlNames: Array<string>): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {

      let error = null;
      if (CustomValidators.valueProvided(control.value)) {
        return error;
      }
      _.forEach(controlNames, (controlName) => {
        if (CustomValidators.valueProvided(form.controls[controlName].value)) {
          error = {requiredIf_notEmpty: true};
          return false; // This terminates the loop, does NOT exit the method
        }
      });
      return error;
    };
  }

  public static requiredIf(form: FormGroup, controlName: string, value: any): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {

      let error = null;
      if (CustomValidators.valueProvided(control.value)) {
        return error;
      }

      if (form.controls[controlName].value === value) {
        error = {requiredIf: true};
      }

      return error;
    };
  }

  public static dateRange(form: FormGroup, startDateControlName: string, endDateControlName): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {

      let error = null;
      const startDate = form.controls[startDateControlName].value;
      const endDate = form.controls[endDateControlName].value;

      if (startDate > endDate) {
        error = {invalidDateRange: true};
      }
      return error;
    };
  }

  private static valueProvided(val: any): boolean {
    if (_.isNumber(val) && val !== 0) {
      return true;
    }
    if (_.isBoolean(val) && !_.isNull(val)) {
      return true;
    }
    if (_.isDate(val)) {
      return true;
    }

    return !_.isEmpty(val);
  }
}
