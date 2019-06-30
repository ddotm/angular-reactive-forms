import * as _ from 'lodash';
import {ModelMetadata} from './model-metadata';
import {FormsService} from '../services/forms.service';
import {IModel} from './imodel';
import {AppInjector} from '../forms-processing.module';

export class DataItem<T extends IModel> {
  public data: T = null;
  public metadata: ModelMetadata = new ModelMetadata();

  public constructor(data: T,
                     disabled: boolean = false) {
    this.init(data, disabled);
  }

  private init(data: T, disabled: boolean = false) {
    this.data = _.merge(this.data, data);
    this.metadata.fieldProps = this.data.getFieldProps();
    this.metadata.disabled = disabled;
    const formsService: FormsService = AppInjector.get(FormsService);
    this.metadata.form = formsService.createFormGroup(this);
    this.metadata.validators = this.data.getValidators(this.metadata.form);
    formsService.setValidators(this.metadata.form, this.metadata.validators);
  }
}
