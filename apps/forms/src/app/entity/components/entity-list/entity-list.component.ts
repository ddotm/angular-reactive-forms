import * as _ from 'lodash';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';
import { EntityService } from '../../services/entity.service';
import { Entity } from '../../models/entity';
import { DataItem } from '../../../forms/models/data-item';
import { LoadEntities } from '../../state/entity.actions';
import { IEntitySlice } from '../../state/entity.slice';
import { getEntities } from '../../state/entity.selectors';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html'
})

export class EntityListComponent implements OnInit, OnDestroy {

  componentActive = true;
  public vm: Array<DataItem<Entity>> = new Array<DataItem<Entity>>();

  constructor(private entityService: EntityService,
              private store: Store<IEntitySlice>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadEntities());
    this.store.pipe(
      select(getEntities),
      takeWhile(() => this.componentActive))
      .subscribe((entities: Array<Entity>) => {
        _.forEach(entities, (entity: Entity) => {
          const dataItem = this.createDataItem(entity);
          this.vm.push(dataItem);
        });
      });
  }

  private createDataItem(entity: Entity): DataItem<Entity> {
    // Assign specific type to the data property of the data item container
    const dataItem = new DataItem<Entity>(new Entity(entity));
    return dataItem;
  }

  public save() {
    const entities: Array<Entity> = _.map(this.vm, (dataItem: DataItem<Entity>) => {
      return dataItem.data;
    });
    this.entityService.save(entities);
  }

  public addItem(): void {
    const dataItem: DataItem<Entity> = this.createDataItem(new Entity());
    this.vm.push(dataItem);
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }
}
