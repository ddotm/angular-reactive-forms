import * as _ from 'lodash';
import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  select,
  Store
} from '@ngrx/store';
import {takeWhile} from 'rxjs/operators';
import {
  Observable,
  of
} from 'rxjs';
import {EntityService} from '../../services/entity.service';
import {Entity} from '../../models/entity';
import {DataItem} from '@forms/forms/models/data-item';
import {
  ClearEntitiesSlice,
  LoadEntities,
  getEntities,
  IEntitySlice
} from '../../state';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html'
})

export class EntityListComponent implements OnInit, OnDestroy {

  componentActive = true;
  public vm: Array<DataItem<Entity>> = new Array<DataItem<Entity>>();
  public vm$: Observable<Array<DataItem<Entity>>>;

  constructor(private entityService: EntityService,
              private store: Store<IEntitySlice>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadEntities(1));
    this.store.pipe(
      select(getEntities),
      takeWhile(() => this.componentActive))
        .subscribe((entities: Array<Entity>) => {
          this.vm = new Array<DataItem<Entity>>();
          _.forEach(entities, (entity: Entity) => {
            const dataItem = new DataItem<Entity>(new Entity(entity));
            this.vm.push(dataItem);
          });
          this.vm$ = of(this.vm);
        });
  }

  public save() {
    const entities: Array<Entity> = _.map(this.vm, (dataItem: DataItem<Entity>) => {
      return dataItem.data;
    });
    this.entityService.save(entities);
  }

  public addItem(): void {
    const dataItem: DataItem<Entity> = new DataItem<Entity>(new Entity());
    this.vm.push(dataItem);
  }

  public clear(): void {
    this.store.dispatch(new ClearEntitiesSlice());
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }
}
