import * as _ from 'lodash';
import {DropdownOption} from './dropdown-option';

export class FieldProps {
  // Common properties
  label: string = null;
  class: string = null;

  // Dropdown properties
  dropdownOptions: Array<DropdownOption> = null;

  public constructor(data?: any) {
    this.init(data);
  }

  public init<T>(data: T) {
    if (data) {
      _.merge(this, data);
    }
  }
}
