import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {DataItem} from '../models/data-item';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public dataItems: Array<DataItem> = new Array<DataItem>();

  constructor() {
    this.dataItems.push(new DataItem({firstName: 'Bob', lastName: 'Wright', dob: new Date('1980-01-01')}));
    this.dataItems.push(new DataItem({firstName: 'Jean', lastName: 'Hopkins', dob: new Date('1980-02-01')}));
    this.dataItems.push(new DataItem({firstName: 'Jessica', lastName: 'Lange', dob: new Date('1980-03-01')}));
  }

  public getData(): Observable<Array<DataItem>> {
    return of(this.dataItems);
  }
}
