import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as entityActions from './entity.actions';
import { EntityService } from '../services/entity.service';
import { Entity } from '../models/entity';

@Injectable()
export class EntityEffects {
  constructor(private actions$: Actions,
              private entityService: EntityService) {
  }

  @Effect()
  loadEntities$: Observable<Action> = this.actions$.pipe(
    ofType(entityActions.EntityActionTypes.LoadEntities),
    mergeMap((action) =>
      this.entityService.get().pipe(
        map((entities: Array<Entity>) => (new entityActions.LoadEntitiesSuccess(entities))),
        catchError(err => of(new entityActions.LoadEntitiesFail(err)))
      )
    )
  );
}
