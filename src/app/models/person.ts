import * as _ from 'lodash';
import {FieldProps} from './field-props';
import {DropdownOption} from './dropdown-option';
import {ValidatorFn, Validators} from '@angular/forms';
import {IModel} from './imodel';

export interface IPerson {
  contactType: string;
  firstName: string;
  lastName: string;
  startDate: Date;
  endDate: Date;
  companyName: string;
}

export class Person implements IPerson, IModel {
  public contactType: string = null;
  public firstName: string = null;
  public lastName: string = null;
  public startDate: Date = null;
  public endDate: Date = null;
  public companyName: string = null;

  public constructor(data?: IPerson) {
    this.init(data);
  }

  public init(data?: any): Person {
    if (data) {
      _.merge(this, data);
    }
    return this;
  }

  public getValidators(): { [key: string]: Array<ValidatorFn> } {
    return {
      contactType: [Validators.required],
      startDate: [Validators.required],
      endDate: [Validators.required]
    };
  }

  public getFieldProps(): { [key: string]: FieldProps } {
    return {
      contactType: new FieldProps({
        label: 'Contact Type',
        class: '',
        dropdownOptions: [
          new DropdownOption({value: null, label: 'Select contact type'}),
          new DropdownOption({value: 'I', label: 'Individual'}),
          new DropdownOption({value: 'C', label: 'Company'}),
          new DropdownOption({value: 'V', label: 'Venue'})
        ]
      }),
      firstName: new FieldProps({
        label: 'First Name',
        class: 'text-danger'
      }),
      lastName: new FieldProps({
        label: 'Last Name',
        class: 'font-weight-bold'
      }),
      startDate: new FieldProps({
        label: 'Start Date',
        class: ''
      }),
      endDate: new FieldProps({
        label: 'End Date',
        class: ''
      }),
      companyName: new FieldProps({
        label: 'Company Name',
        class: ''
      })
    };
  }
}
