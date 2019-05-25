import { EntitySlice, InitialEntitySlice } from './entity.slice';
import { EntityActions, EntityActionTypes } from './entity.actions';
import { Entity } from './models/entity';

export function entityReducer(state: EntitySlice = InitialEntitySlice, action: EntityActions): EntitySlice {

  console.log(state);
  console.log(action.payload);

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
    default:
      return state;
  }
}
