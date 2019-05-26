import { Action } from '@ngrx/store';
import { Entity } from '../models/entity';

export enum EntityActionTypes {
  SelectEntity = '[ENTITY] Select',
  UpdateEntity = '[ENTITY] Update',
  SetEntities = '[ENTITY] Set Entities'
}

export class SelectEntityAction implements Action {
  readonly type: string = EntityActionTypes.SelectEntity;

  constructor(public payload: Entity) {
  }
}

export class UpdateEntityAction implements Action {
  readonly type: string = EntityActionTypes.UpdateEntity;

  constructor(public payload: Entity) {
  }
}

export class SetEntitiesAction implements Action {
  readonly type: string = EntityActionTypes.SetEntities;

  constructor(public payload: Array<Entity>) {
  }
}

export type EntityActions = SelectEntityAction
  | UpdateEntityAction
  | SetEntitiesAction;
