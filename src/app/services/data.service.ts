import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {DataItem} from '../models/data-item';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public dataItems: Array<DataItem> = new Array<DataItem>();

  constructor() {
    this.dataItems.push(new DataItem());
    this.dataItems.push(new DataItem());
    this.dataItems.push(new DataItem());
  }

  public getData(): Observable<Array<DataItem>> {
    return of(this.dataItems);
  }
}
