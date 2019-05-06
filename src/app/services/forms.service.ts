import * as _ from 'lodash';
import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private fb: FormBuilder) {
  }

  public createFormGroup(data: any): FormGroup {
    const exclusionPropList = ['metadata'];
    const formGroup = this.fb.group({});

    _.forOwn(data, function(value, key) {
      if (_.includes(exclusionPropList, key) || _.isFunction(key) || _.isArray(key) || _.isObject(key)) {
        return true;
      }
      let formControl = new FormControl(value, data.metadata.validators[key]);
      formGroup.addControl(key, formControl);
    });


    return formGroup;
  }
}
