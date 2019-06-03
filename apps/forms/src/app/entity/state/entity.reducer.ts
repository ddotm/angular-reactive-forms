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
        selectedEntity: action.payload as Entity
      };
    case EntityActionTypes.SetEntities:
      return {
        ...state,
        entities: action.payload as Array<Entity>
      };
    case EntityActionTypes.LoadEntitiesSuccess:
      return {
        ...state,
        entities: action.payload as Array<Entity>,
        error: ''
      };

    case EntityActionTypes.LoadEntitiesFail:
      return {
        ...state,
        entities: new Array<Entity>(),
        error: action.payload as string
      };

    case EntityActionTypes.ClearEntities:
      return InitialEntitySlice;

    default:
      return state;
  }
}
