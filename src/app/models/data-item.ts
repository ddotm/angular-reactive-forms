import * as _ from 'lodash';
import {ModelMetadata} from './model-metadata';

export class DataItem {
  public firstName: string = null;
  public lastName: string = null;
  public dob: Date = null;

  public metadata: ModelMetadata = new ModelMetadata();

  public constructor(data?: any) {
    this.init(data);
  }

  public init(data: any) {
    if (data) {
      _.merge(this, data);
    }
  }
}
