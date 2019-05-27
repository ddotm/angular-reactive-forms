import { isNull } from 'lodash';
import { Entity } from '../models/entity';
import { IAppState } from '../../app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

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

const getEntityState = createFeatureSelector<IEntitySlice>(EntitySliceName);

export const getSelectedEntityId =
  createSelector(
    getEntityState,
    (entityState) => {
      return !isNull(entityState.selectedEntity) ? entityState.selectedEntity.entityId : null;
    }
  );

export const getEntities = createSelector(
  getEntityState,
  state => state.entities
);

export const getError = createSelector(
  getEntityState,
  state => state.error
);
