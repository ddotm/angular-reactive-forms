import * as _ from 'lodash';
import {ModelMetadata} from './model-metadata';

export class DataItem<T> {
  public data: T = null;

  public metadata: ModelMetadata = new ModelMetadata();

  public constructor(data?: T) {
    this.init(data);
  }

  public init(data: T) {
    if (data) {
      _.merge(this.data, data);
    }
  }
}
