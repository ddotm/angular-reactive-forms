import * as _ from 'lodash';
import {FieldProps} from './field-props';
import {DropdownOption} from './dropdown-option';

export interface IPerson {
  contactType: string;
  firstName: string;
  lastName: string;
  dob: Date;
  companyName: string;
}

export class Person implements IPerson {
  public contactType: string = null;
  public firstName: string = null;
  public lastName: string = null;
  public dob: Date = null;
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

  public getFieldProps(): { [key: string]: FieldProps } {
    return {
      contactType: new FieldProps({
        label: 'Contact Type',
        dropdownOptions: [
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
      dob: new FieldProps({
        label: 'Date of Birth',
        class: ''
      }),
      companyName: new FieldProps({
        label: 'Company Name',
        class: ''
      })
    };
  }
}
