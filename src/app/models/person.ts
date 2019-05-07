import * as _ from 'lodash';
import {FieldProps} from './field-props';
import {DropdownOption} from './dropdown-option';

export class Person {
  public contactType: string = null;
  public firstName: string = null;
  public lastName: string = null;
  public dob: Date = null;

  public constructor(data?: any) {
    this.init(data);
  }

  public init(data?: any): Person {
    if (data) {
      _.merge(this, data);
    }
    return this;
  }

  public getFormProps(): { [key: string]: FieldProps } {
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
      })
    };
  }
}
