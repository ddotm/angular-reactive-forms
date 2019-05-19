import * as _ from 'lodash';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { EntityDataService } from '../../services/entity-data.service';
import { Subscription } from 'rxjs';
import { Entity } from '../../models/entity';
import { DataItem } from '../../../forms/models/data-item';
import { FormsService } from '../../../forms/services/forms.service';
import { SetEntitiesAction } from '../../entity.actions';
import { Store } from '@ngrx/store';
import { EntitySlice } from '../../entity.slice';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html'
})

export class EntityListComponent implements OnInit, OnDestroy {

  private subs: Array<Subscription> = new Array<Subscription>();
  public vm: Array<DataItem<Entity>> = new Array<DataItem<Entity>>();

  constructor(private dataService: EntityDataService,
              public formsService: FormsService,
              private store: Store<EntitySlice>) {
  }

  ngOnInit() {
    const sub = this.dataService.get()
      .subscribe({
        next: (value: Array<Entity>) => {
          this.store.dispatch(new SetEntitiesAction(value));
          _.forEach(value, (person: Entity) => {
            const dataItem = this.createDataItem(person);
            this.vm.push(dataItem);
          });
          console.log(this.vm);
        }
      });
    this.subs.push(sub);
  }

  private createDataItem(person: Entity): DataItem<Entity> {
    // Assign specific type to the data property of the data item container
    const dataItem = new DataItem<Entity>(this.formsService, new Entity(person));
    return dataItem;
  }

  public save() {
    const persons: Array<Entity> = _.map(this.vm, (dataItem: DataItem<Entity>) => {
      return dataItem.data;
    });
    this.dataService.save(persons);
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