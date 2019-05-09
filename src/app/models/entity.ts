import * as _ from 'lodash';
import {FieldProps} from './field-props';
import {DropdownOption} from './dropdown-option';
import {FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {IModel} from './imodel';
import {CustomValidators} from '../services/custom-validators';

export enum EntityPropNames {
  entityId = 'entityId',
  contactType = 'contactType',
  firstName = 'firstName',
  lastName = 'lastName',
  startDate = 'startDate',
  endDate = 'endDate',
  companyName = 'companyName'
}

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
    const customValidatorFields = [EntityPropNames.startDate, EntityPropNames.endDate, EntityPropNames.contactType];
    const allValidators = {
      contactType: [
        Validators.required
      ],
      startDate: [
        Validators.required,
        CustomValidators.dateRange(form, EntityPropNames.startDate, EntityPropNames.endDate)
      ],
      endDate: [
        Validators.required,
        CustomValidators.dateRange(form, EntityPropNames.startDate, EntityPropNames.endDate)
      ],
      companyName: [
        CustomValidators.requiredIf(form, EntityPropNames.contactType, 'C')
      ]
    };
    return allValidators;
  }

  public getFieldProps(): { [key: string]: FieldProps } {
    const fieldProps: { [key: string]: FieldProps } = {};
    fieldProps[EntityPropNames.entityId] = new FieldProps({
      label: 'ID',
      class: ''
    });

    fieldProps[EntityPropNames.contactType] = new FieldProps({
      label: 'Contact Type',
      class: '',
      dropdownOptions: [
        new DropdownOption({value: null, label: 'Select contact type'}),
        new DropdownOption({value: 'I', label: 'Individual'}),
        new DropdownOption({value: 'C', label: 'Company'}),
        new DropdownOption({value: 'V', label: 'Venue'})
      ]
    });

    fieldProps[EntityPropNames.firstName] = new FieldProps({
      label: 'First Name',
      class: 'text-danger'
    });

    fieldProps[EntityPropNames.lastName] = new FieldProps({
      label: 'Last Name',
      class: 'font-weight-bold'
    });

    fieldProps[EntityPropNames.startDate] = new FieldProps({
      label: 'Start Date',
      class: ''
    });

    fieldProps[EntityPropNames.endDate] = new FieldProps({
      label: 'End Date',
      class: ''
    });

    fieldProps[EntityPropNames.companyName] = new FieldProps({
      label: 'Company Name',
      class: ''
    });

    return fieldProps;
  }

  getFormControlExclusionList(): Array<string> {
    return [EntityPropNames.entityId];
  }
}
