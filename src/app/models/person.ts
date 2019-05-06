import * as _ from 'lodash';

export class Person {
  public contactType: string = null;
  public firstName: string = null;
  public lastName: string = null;
  public dob: Date = null;

  public constructor(data?: any) {
    this.init(data);
  }

  public init(data: any) {
    if (data) {
      _.merge(this, data);
    }
  }
}
