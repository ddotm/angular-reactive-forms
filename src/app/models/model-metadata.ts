import {FormGroup, ValidatorFn} from '@angular/forms';
import {FieldProps} from './field-props';

export class ModelMetadata {
  public form: FormGroup = null;
  public validators: {string: Array<ValidatorFn>} | {} = {};
  public fieldProps: any; //{any: FieldProps} = null;
}
