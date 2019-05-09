import * as _ from 'lodash';
import {FieldProps} from './field-props';
import {DropdownOption} from './dropdown-option';
import {FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {IModel} from './imodel';
import {CustomValidators} from '../services/custom-validators';

export interface IEntity {
  entityId: number
  contactType: string;
  firstName: string;
  lastName: string;
  startDate: Date;
  endDate: Date;
  companyName: string;
}

export class Entity implements IEntity, IModel {
  public entityId: number = null;
  public contactType: string = null;
  public firstName: string = null;
  public lastName: string = null;
  public startDate: Date = null;
  public endDate: Date = null;
  public companyName: string = null;

  public constructor(data?: IEntity) {
    this.init(data);
  }

  public init(data?: any): Entity {
    if (data) {
      _.merge(this, data);
    }
    return this;
  }

  public getValidators(form: FormGroup): { [key: string]: Array<ValidatorFn> } {
    const allValidators = {
      contactType: [
        Validators.required
      ],
      startDate: [
        Validators.required,
        CustomValidators.dateRange(form, 'startDate', 'endDate')
      ],
      endDate: [
        Validators.required,
        CustomValidators.dateRange(form, 'startDate', 'endDate')
      ],
      companyName: [
        CustomValidators.requiredIf(form, 'contactType', 'C')
      ]
    };
    return allValidators;
  }

  public getFieldProps(): { [key: string]: FieldProps } {
    return {
      entityId: new FieldProps({
        label: 'ID',
        class: ''
      }),
      contactType: new FieldProps({
        label: 'Contact Type',
        class: '',
        dropdownOptions: [
          new DropdownOption({value: null, label: 'Select contact type'}),
          new DropdownOption({value: 'I', label: 'Individual'}),
          new DropdownOption({value: 'C', label: 'Company'}),
          new DropdownOption({value: 'V', label: 'Venue'})
        ]
      }),
      firstName: new FieldProps({
        label: 'First Name',
        class: 'text-danger'
      }),
      lastName: new FieldProps({
        label: 'Last Name',
        class: 'font-weight-bold'
      }),
      startDate: new FieldProps({
        label: 'Start Date',
        class: ''
      }),
      endDate: new FieldProps({
        label: 'End Date',
        class: ''
      }),
      companyName: new FieldProps({
        label: 'Company Name',
        class: ''
      })
    };
  }

  getFormControlExclusionList(): Array<string> {
    return ['entityId'];
  }
}
