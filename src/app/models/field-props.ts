import * as _ from 'lodash';
import {DropdownOption} from './dropdown-option';

interface ICommonFieldProps {
  label: string;
  class: string;
}

interface IDropdownFieldProps extends ICommonFieldProps {
  dropdownOptions: Array<DropdownOption>;
}

export class FieldProps implements ICommonFieldProps, IDropdownFieldProps {
  // Common properties
  label: string = null;
  class: string = null;

  // Dropdown properties
  dropdownOptions: Array<DropdownOption> = null;

  public constructor(data?: any) {
    this.init(data);
  }

  public init<T>(data: any) {
    if (data) {
      _.merge(this, data);
    }
  }
}
