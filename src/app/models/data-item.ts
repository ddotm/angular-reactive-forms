import * as _ from 'lodash';
import {ModelMetadata} from './model-metadata';
import {FormsService} from '../services/forms.service';

export class DataItem<T> {
  public data: T = null;
  public metadata: ModelMetadata = new ModelMetadata();

  private formsService: FormsService = null;

  public constructor(formsService: FormsService, data: T) {
    this.formsService = formsService;
    this.init(data);
  }

  private init<T>(data: T) {
    if (data) {
      this.data = _.merge(this.data, data);
    }
  }

  public createForm(): DataItem<T> {
    this.metadata.form = this.formsService.createFormGroup(this);
    return this;
  }
}
