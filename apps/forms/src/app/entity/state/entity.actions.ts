import { Action } from '@ngrx/store';
import { Entity } from '../models/entity';

export enum EntityActionTypes {
  SelectEntity = '[ENTITY] Select',
  UpdateEntity = '[ENTITY] Update',
  SetEntities = '[ENTITY] Set Entities',
  LoadEntities = '[ENTITY] Load Entities',
  LoadEntitiesSuccess = '[ENTITY] Load Success',
  LoadEntitiesFail = '[ENTITY] Load Fail',
  ClearEntities = '[ENTITY] Clear Entity'
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

export class LoadEntities implements Action {
  readonly type: string = EntityActionTypes.LoadEntities;

  constructor(public payload: number) {
  }
}

export class LoadEntitiesSuccess implements Action {
  readonly type: string = EntityActionTypes.LoadEntitiesSuccess;

  constructor(public payload: Array<Entity>) {
  }
}

export class LoadEntitiesFail implements Action {
  readonly type: string = EntityActionTypes.LoadEntitiesFail;

  constructor(public payload: string) {
  }
}

export class ClearEntitiesSlice implements Action {
  readonly type: string = EntityActionTypes.ClearEntities;
  public payload = null;
}

export type EntityActions = SelectEntityAction
  | UpdateEntityAction
  | SetEntitiesAction
  | LoadEntities
  | LoadEntitiesSuccess
  | LoadEntitiesFail
  | ClearEntitiesSlice;
