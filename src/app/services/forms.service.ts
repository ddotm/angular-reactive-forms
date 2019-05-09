import * as _ from 'lodash';
import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidatorFn} from '@angular/forms';
import {DataItem} from '../models/data-item';
import {IModel} from '../models/imodel';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private fb: FormBuilder) {
  }

  public createFormGroup<T extends IModel>(dataItem: DataItem<T>): FormGroup {
    const exclusionPropList = ['metadata'];
    const formGroup = this.fb.group({});

    _.forOwn(dataItem.data, function(value, key) {
      if (_.includes(exclusionPropList, key) || _.isFunction(key) || _.isArray(key) || _.isObject(key)) {
        return true;
      }
      let formControl = new FormControl(value, []);
      formGroup.addControl(key, formControl);
    });

    return formGroup;
  }

  public setValidators(form: FormGroup, validators:  { [key: string]: Array<ValidatorFn> }): void {
    _.forOwn(validators,  (value,  key) => {
      form.controls[key].setValidators(value);
    });
  }
}
