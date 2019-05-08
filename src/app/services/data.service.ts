import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Person} from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {
  }

  public getData(): Observable<Array<Person>> {
    let people: Array<Person> = [
      new Person({
        contactType: 'I',
        firstName: 'Bob',
        lastName: 'Wright',
        startDate: new Date('2015-01-01'),
        endDate: new Date('2017-01-01'),
        companyName: 'Paradigm'
      }),
      new Person({contactType: 'I',
        firstName: 'Jean',
        lastName: 'Hopkins',
        startDate: new Date('2017-01-01'),
        endDate: new Date('2018-01-01'),
        companyName: 'Coda'})
    ];
    return of(people);
  }

  public saveData(data: Array<Person>): void {

  }
}
