import { Entity } from '../models/entity';

export interface IEntitySlice {
  selectedEntity: Entity;
  entities: Array<Entity>;
  error: string;
}

export const InitialEntitySlice: IEntitySlice = {
  selectedEntity: null,
  entities: new Array<Entity>(),
  error: ''
};
