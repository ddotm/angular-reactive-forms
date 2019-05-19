import * as _ from 'lodash';

export class DropdownOption {
  public value: string = null;
  public label: string = null;

  public constructor(data?: any) {
    if (data) {
      _.merge(this, data);
    }
  }
}
