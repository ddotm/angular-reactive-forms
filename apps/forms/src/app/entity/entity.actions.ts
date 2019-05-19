import { Action } from '@ngrx/store';
import { Entity } from './models/entity';
import { EntitySlice, IEntitySlice } from './entity.slice';

export enum EntityActionTypes {
  SelectEntity = '[ENTITY] Select',
  UpdateEntity = '[ENTITY] Update',
  SetEntities = '[ENTITY] Set Entities'
}

export class SelectEntityAction implements Action {
  type: string = EntityActionTypes.SelectEntity;
  payload: IEntitySlice = new EntitySlice();

  constructor(public entity: Entity) {
    this.payload.selectedEntity = entity;
  }
}

export class UpdateEntityAction implements Action {
  type: string = EntityActionTypes.UpdateEntity;
  payload: IEntitySlice = new EntitySlice();

  constructor(public entity: Entity) {
  }
}

export class SetEntitiesAction implements Action {
  type: string = EntityActionTypes.SetEntities;
  payload: IEntitySlice = new EntitySlice();

  constructor(public entities: Array<Entity>) {
    this.payload.entities = entities;
  }
}

export type EntityActions = SelectEntityAction |
  UpdateEntityAction |
  SetEntitiesAction;
