import * as _ from 'lodash';
import {ModelMetadata} from './model-metadata';
import {FieldProps} from './field-props';

export class Person {
  public contactType: string = null;
  public firstName: string = null;
  public lastName: string = null;
  public dob: Date = null;

  public constructor(data?: any) {
    this.init(data);
  }

  public init(data?: any) {
    if (data) {
      _.merge(this, data);
    }
  }

  public setFormProps(metadata: ModelMetadata): void {
    metadata.fieldProps = {
      firstName: new FieldProps({
        label: 'First Name',
        class: 'text-danger'
      })
    };
  }
}
