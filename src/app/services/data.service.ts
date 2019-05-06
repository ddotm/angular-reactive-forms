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
      new Person({contactType: 'I', firstName: 'Bob', lastName: 'Wright', dob: new Date('1980-01-01')}),
      new Person({contactType: 'I', firstName: 'Jean', lastName: 'Hopkins', dob: new Date('1980-02-01')}),
      new Person({contactType: 'I', firstName: 'Jessica', lastName: 'Lange', dob: new Date('1980-03-01')})
    ];
    return of(people);
  }
}
