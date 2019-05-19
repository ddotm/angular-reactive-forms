import * as _ from 'lodash';
import {Injectable} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn} from '@angular/forms';
import {IModel} from '../models/imodel';
import {DataItem} from '../models/data-item';


@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private fb: FormBuilder) {
  }

  public createFormGroup<T extends IModel>(dataItem: DataItem<T>): FormGroup {
    const formGroup = this.fb.group({});

    _.forOwn(dataItem.data, (value, key) => {
      if (_.isEmpty(dataItem.metadata.fieldProps[key])) {
        return true;
      }
      let val = value;
      if (_.isFunction(dataItem.metadata.fieldProps[key].mapper)) {
        val = dataItem.metadata.fieldProps[key].mapper();
      }
      const formControl = new FormControl(val, []);
      if (dataItem.metadata.disabled === true) {
        formControl.disable();
      }
      formGroup.addControl(key, formControl);
    });

    return formGroup;
  }

  public createFormArray(): FormArray {
    return this.fb.array([]);
  }

  public setValidators(form: FormGroup, validators: { [key: string]: Array<ValidatorFn> }): void {
    _.forOwn(validators, (value, key) => {
      const formControl = form.controls[key];
      if (!_.isEmpty(formControl)) {
        formControl.setValidators(value);
      }
    });
  }

  public revalidate(form: FormGroup): void {
    _.forEach(form.controls, (control: AbstractControl) => {
      control.updateValueAndValidity({onlySelf: false});
    });
  }

  public clearErrors(form: FormGroup): void {
    _.forEach(form.controls, (control: AbstractControl) => {
      control.setErrors(null);
    });
  }
}
