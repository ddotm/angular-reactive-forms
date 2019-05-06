import * as _ from 'lodash';

export class FieldProps {
  label: string = null;
  class: string = null;

  public constructor(data?: any) {
    this.init(data);
  }

  public init<T>(data: T) {
    if (data) {
      _.merge(this, data);
    }
  }
}
