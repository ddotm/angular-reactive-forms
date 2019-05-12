import {EntitySlice} from './entity.slice';
import {EntityActions, EntityActionTypes} from './entity.actions';

export function entityReducer(state: EntitySlice, action: EntityActions): EntitySlice {

  console.log(state);
  console.log(action.payload);

  switch (action.type) {
    case EntityActionTypes.SelectEntity:
      return {
        ...state,
        selectedEntity: action.payload
      };
    default:
      return state;
  }
}
