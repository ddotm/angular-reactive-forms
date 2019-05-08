import {FormGroup, ValidatorFn} from '@angular/forms';
import {FieldProps} from './field-props';

export class ModelMetadata {
  public form: FormGroup = null;
  public validators: {[key: string]: Array<ValidatorFn>} | {} = {};
  public fieldProps: {[key :string]: FieldProps} = null;
  public displayDiagnostics: boolean = false;
}
