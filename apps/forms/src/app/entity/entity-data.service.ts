import {Entity} from './models/entity';

import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntityDataService implements InMemoryDbService {
  createDb() {
    let entities: Array<Entity> = [
      new Entity({
        id: 1,
        contactType: 'I',
        firstName: 'Bob',
        lastName: 'Wright',
        startDate: new Date('2015/01/01'),
        endDate: new Date('2017/01/01'),
        companyName: 'Microsoft'
      }),
      new Entity({
        id: 2,
        contactType: 'I',
        firstName: 'Jean',
        lastName: 'Hopkins',
        startDate: new Date('2017/01/01'),
        endDate: new Date('2018/01/01'),
        companyName: 'Amazon'
      })
    ];
    return {entities};
  }
}
