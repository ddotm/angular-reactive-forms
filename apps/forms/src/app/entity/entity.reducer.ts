import { IEntitySlice, InitialEntitySlice } from './entity.slice';
import { EntityActions, EntityActionTypes } from './entity.actions';
import { Entity } from './models/entity';

export function entityReducer(state: IEntitySlice = InitialEntitySlice, action: EntityActions): IEntitySlice {

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
