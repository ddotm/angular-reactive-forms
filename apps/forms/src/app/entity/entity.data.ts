import {Entity} from './models/entity';

import {InMemoryDbService} from 'angular-in-memory-web-api';

export class EntityData implements InMemoryDbService {
  createDb() {
    return {entities};
  }
}

export const entities: Array<Entity> = [
  new Entity({
    entityId: 1,
    contactType: 'I',
    firstName: 'Bob',
    lastName: 'Wright',
    startDate: new Date('2015/01/01'),
    endDate: new Date('2017/01/01'),
    companyName: 'Microsoft'
  }),
  new Entity({
    entityId: 2,
    contactType: 'I',
    firstName: 'Jean',
    lastName: 'Hopkins',
    startDate: new Date('2017/01/01'),
    endDate: new Date('2018/01/01'),
    companyName: 'Amazon'
  })
];
