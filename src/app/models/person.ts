import * as _ from 'lodash';
import {FieldProps} from './field-props';

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
      firstName: new FieldProps({
        label: 'First Name',
        class: 'text-danger'
      })
    };
  }
}
