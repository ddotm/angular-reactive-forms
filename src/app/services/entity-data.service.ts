import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Entity, IEntity} from '../models/entity';

@Injectable({
  providedIn: 'root'
})
export class EntityDataService {
  constructor() {
  }

  public get(): Observable<Array<Entity>> {
    let entities: Array<Entity> = [
      new Entity({
        entityId: 1,
        contactType: 'I',
        firstName: 'Bob',
        lastName: 'Wright',
        startDate: new Date('2015-01-01'),
        endDate: new Date('2017-01-01'),
        companyName: 'Paradigm'
      }),
      new Entity({
        entityId: 2,
        contactType: 'I',
        firstName: 'Jean',
        lastName: 'Hopkins',
        startDate: new Date('2017-01-01'),
        endDate: new Date('2018-01-01'),
        companyName: 'Coda'
      })
    ];
    return of(entities);
  }

  public save(data: Array<IEntity>): void {
  }
}
