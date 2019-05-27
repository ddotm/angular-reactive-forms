import { IEntitySlice, InitialEntitySlice } from './index';
import { EntityActions, EntityActionTypes } from './entity.actions';
import { Entity } from '../models/entity';

export function entityReducer(state: IEntitySlice = InitialEntitySlice, action: EntityActions): IEntitySlice {

  console.log(state);
  console.log(action);

  switch (action.type) {
    case EntityActionTypes.SelectEntity:
      return {
        ...state,
        selectedEntity: <Entity> action.payload
      };
    case EntityActionTypes.SetEntities:
      return {
        ...state,
        entities: <Array<Entity>> action.payload
      };
    case EntityActionTypes.LoadEntitiesSuccess:
      return {
        ...state,
        entities: <Array<Entity>> action.payload,
        error: ''
      };

    case EntityActionTypes.LoadEntitiesFail:
      return {
        ...state,
        entities: new Array<Entity>(),
        error: <string> action.payload
      };
    default:
      return state;
  }
}
