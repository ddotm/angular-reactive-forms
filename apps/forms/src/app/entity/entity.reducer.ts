import { IEntitySlice } from './entity.slice';
import { EntityActions, EntityActionTypes } from './entity.actions';

export function entityReducer(state: IEntitySlice, action: EntityActions): IEntitySlice {

  console.log(state);
  console.log(action.payload);

  switch (action.type) {
    case EntityActionTypes.SelectEntity:
      return {
        ...state,
        selectedEntity: action.payload.selectedEntity
      };
    case EntityActionTypes.SetEntities:
      return {
        ...state,
        entities: action.payload.entities
      };
    default:
      return state;
  }
}
