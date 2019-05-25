import { isNull } from 'lodash';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IEntitySlice } from './entity.slice';
import { EntitySliceName } from './entity.slice.name';

const getEntityState = createFeatureSelector<IEntitySlice>(EntitySliceName);

export const getSelectedEntityId =
  createSelector(
    getEntityState,
    (entityState) => {
      return !isNull(entityState.selectedEntity) ? entityState.selectedEntity.entityId : null;
    }
  );
