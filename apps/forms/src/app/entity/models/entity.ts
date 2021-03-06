import * as _ from 'lodash';
import {FieldProps} from '@forms/forms/models/field-props';
import {DropdownOption} from '@forms/forms/models/dropdown-option';
import {
  FormGroup,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {IModel} from '@forms/forms/models/imodel';
import {CustomValidators} from '@forms/forms/services/custom-validators';

export enum EntityPropNames {
  id = 'id',
  contactType = 'contactType',
  firstName = 'firstName',
  lastName = 'lastName',
  startDate = 'startDate',
  endDate = 'endDate',
  companyName = 'companyName'
}

export interface IEntity {
  id: number;
  contactType: string;
  firstName: string;
  lastName: string;
  startDate: Date;
  endDate: Date;
  companyName: string;
}

export class Entity implements IEntity, IModel {
  public id: number = 0;
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

  public getValidators = (form: FormGroup): { [key: string]: Array<ValidatorFn> } => {
    return {
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
        CustomValidators.requiredIf(form, EntityPropNames.contactType, 'B')
      ]
    };
  };

  public getFieldProps = (): { [key: string]: FieldProps } => {
    const fieldProps: { [key: string]: FieldProps } = {};
    fieldProps[EntityPropNames.id] = new FieldProps({
      label: 'ID'
    });

    fieldProps[EntityPropNames.contactType] = new FieldProps({
      label: 'Contact Type',
      dropdownOptions: [
        new DropdownOption({
          value: null,
          label: ''
        }),
        new DropdownOption({
          value: 'P',
          label: 'Personal'
        }),
        new DropdownOption({
          value: 'B',
          label: 'Business'
        })
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
      label: 'Start Date'
    });

    fieldProps[EntityPropNames.endDate] = new FieldProps({
      label: 'End Date'
    });

    fieldProps[EntityPropNames.companyName] = new FieldProps({
      label: 'Company Name'
    });

    return fieldProps;
  };
}
