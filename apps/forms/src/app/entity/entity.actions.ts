import {Action} from '@ngrx/store';
import {Entity} from './models/entity';

export enum EntityActionTypes {
  SelectEntity = 'SELECT_ENTITY',
  UpdateEntity = 'UPDATE_ENTITY'
}

export class SelectEntityAction implements Action {
  type: string = EntityActionTypes.SelectEntity;

  constructor(public payload?: Entity) {
  }
}
export class UpdateEntityAction implements Action {
  type: string = EntityActionTypes.UpdateEntity;

  constructor(public payload: Entity) {
  }
}

export type EntityActions = SelectEntityAction | UpdateEntityAction;
