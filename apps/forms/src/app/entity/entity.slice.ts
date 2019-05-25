import { Entity } from './models/entity';

export interface IEntitySlice {
  selectedEntity: Entity;
  entities: Array<Entity>;
}

export const InitialEntitySlice: IEntitySlice = {
  selectedEntity: null,
  entities: new Array<Entity>()
};
