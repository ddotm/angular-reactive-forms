import * as _ from 'lodash';
import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {DataItem} from '../models/data-item';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private fb: FormBuilder) {
  }

  public createFormGroup<T>(dataItem: DataItem<T>): FormGroup {
    const exclusionPropList = ['metadata'];
    const formGroup = this.fb.group({});

    _.forOwn(dataItem.data, function(value, key) {
      if (_.includes(exclusionPropList, key) || _.isFunction(key) || _.isArray(key) || _.isObject(key)) {
        return true;
      }
      let formControl = new FormControl(value, dataItem.metadata.validators[key]);
      formGroup.addControl(key, formControl);
    });


    return formGroup;
  }
}
