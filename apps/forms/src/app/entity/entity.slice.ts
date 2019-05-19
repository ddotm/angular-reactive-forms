import { Entity } from './models/entity';

export interface IEntitySlice {
  selectedEntity: Entity;
  entities: Array<Entity>;
}

export class EntitySlice implements IEntitySlice {
  selectedEntity: Entity = null;
  entities: Array<Entity> = new Array<Entity>();
}
