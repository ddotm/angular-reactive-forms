import { IAppState } from '../../app.state';
import { Entity } from '../models/entity';

export const EntitySliceName: string = 'entity';

export interface IEntitySlice extends IAppState {
  selectedEntity: Entity;
  entities: Array<Entity>;
  error: string;
}

export const InitialEntitySlice: IEntitySlice = {
  selectedEntity: null,
  entities: new Array<Entity>(),
  error: ''
};
