import * as _ from 'lodash';
import {DropdownOption} from './dropdown-option';

interface ICommonFieldProps {
  label?: string;
  class?: string;
  revalidate?: boolean;
}

interface IDropdownFieldProps extends ICommonFieldProps {
  dropdownOptions: Array<DropdownOption>;
}

export class FieldProps implements ICommonFieldProps, IDropdownFieldProps {
  // Common properties
  label: string = null;
  class: string = null;
  revalidate: boolean = true;

  // Dropdown properties
  dropdownOptions: Array<DropdownOption> = null;

  public constructor(data?: ICommonFieldProps | IDropdownFieldProps) {
    this.init(data);
  }

  public init<T>(data: any) {
    if (data) {
      _.merge(this, data);
    }
  }
}
