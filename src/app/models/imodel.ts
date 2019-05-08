import {ValidatorFn} from '@angular/forms';
import {FieldProps} from './field-props';

export interface IModel {
  getValidators(): { [key: string]: Array<ValidatorFn> };

  getFieldProps(): { [key: string]: FieldProps };
}
