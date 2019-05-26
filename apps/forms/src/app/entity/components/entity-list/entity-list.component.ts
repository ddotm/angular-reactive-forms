import * as _ from 'lodash';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { EntityDataService } from '../../services/entity-data.service';
import { Subscription } from 'rxjs';
import { Entity } from '../../models/entity';
import { DataItem } from '../../../forms/models/data-item';
import { SetEntitiesAction } from '../../entity.actions';
import { Store } from '@ngrx/store';
import { IEntitySlice } from '../../entity.slice';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html'
})

export class EntityListComponent implements OnInit, OnDestroy {

  private subs: Array<Subscription> = new Array<Subscription>();
  public vm: Array<DataItem<Entity>> = new Array<DataItem<Entity>>();

  constructor(private dataService: EntityDataService,
              private store: Store<IEntitySlice>) {
  }

  ngOnInit() {
    const sub = this.dataService.get()
      .subscribe({
        next: (value: Array<Entity>) => {
          this.store.dispatch(new SetEntitiesAction(value));
          _.forEach(value, (entity: Entity) => {
            const dataItem = this.createDataItem(entity);
            this.vm.push(dataItem);
          });
          console.log(this.vm);
        }
      });
    this.subs.push(sub);
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
    this.dataService.save(entities);
  }

  public addItem(): void {
    const dataItem: DataItem<Entity> = this.createDataItem(new Entity());
    this.vm.push(dataItem);
  }

  ngOnDestroy(): void {
    _.forEach(this.subs, (sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}
