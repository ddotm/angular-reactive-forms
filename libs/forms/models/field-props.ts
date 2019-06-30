import * as _ from 'lodash';

interface ICommonFieldProps {
  label?: string;
  class?: string;
  revalidate?: boolean;
  visible?: boolean;

  mapper?(): any | null;
}

interface IDropdownFieldProps extends ICommonFieldProps {
  dropdownOptions: Array<any>;
}

interface IAutocompleteProps extends ICommonFieldProps {
  filteredList: Array<any>;
  noDataMessage: string;
}

interface IMultiselectProps extends ICommonFieldProps {
  multiselectList: Array<any>;
}

export class FieldProps implements ICommonFieldProps,
  IDropdownFieldProps,
  IAutocompleteProps,
  IMultiselectProps {
  // Common properties
  label: string = null;
  class: string = null;
  revalidate: boolean = true;
  visible: boolean = true;
  mapper = null;

  // Dropdown properties
  dropdownOptions: Array<any> = null;

  // Autocomplete properties for Kendo
  filteredList: Array<any> = null;
  noDataMessage: string = null;

  // Multiselect properties
  multiselectList: Array<any> = null;

  public constructor(data?: ICommonFieldProps |
    IDropdownFieldProps |
    IAutocompleteProps |
    IMultiselectProps) {
    this.init(data);
  }

  public init<T>(data: any) {
    if (data) {
      _.merge(this, data);
    }
  }
}
