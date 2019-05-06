import {FormGroup, ValidatorFn} from '@angular/forms';

export class ModelMetadata {
  public form: FormGroup = null;
  public validators: {string: Array<ValidatorFn>} | {} = {};
}
