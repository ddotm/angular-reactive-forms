import * as _ from 'lodash';
import {ModelMetadata} from './model-metadata';
import {FormsService} from '../services/forms.service';
import {IModel} from './imodel';

export class DataItem<T extends IModel> {
  public data: T = null;
  public metadata: ModelMetadata = new ModelMetadata();

  private formsService: FormsService = null;

  public constructor(formsService: FormsService, data: T, disabled: boolean = false) {
    this.formsService = formsService;
    this.init(data, disabled);
  }

  private init(data: T, disabled: boolean = false) {
    this.data = _.merge(this.data, data);
    this.metadata.fieldProps = this.data.getFieldProps();
    this.metadata.disabled = disabled;
    this.metadata.form = this.formsService.createFormGroup(this);
    this.metadata.validators = this.data.getValidators(this.metadata.form);
    this.formsService.setValidators(this.metadata.form, this.metadata.validators);
  }

  public revalidate() {
    this.formsService.revalidate(this.metadata.form);
  }
}