import * as _ from 'lodash';
import { Component, Input, OnInit } from '@angular/core';
import { Entity, EntityPropNames } from '../../models/entity';
import { DataItem } from '../../../forms/models/data-item';
import { FormsService } from '../../../forms/services/forms.service';
import { select, Store } from '@ngrx/store';
import { IEntitySlice } from '../../entity.slice';
import { SelectEntityAction } from '../../entity.actions';
import { EntitySliceName } from '../../entity.slice.name';
import { getSelectedEntityId } from '../../entity.selectors';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html'
})
export class EntityComponent implements OnInit {

  @Input() public vm: DataItem<Entity> = null;
  public propNames = EntityPropNames;
  public selected: boolean = false;

  constructor(private formsService: FormsService,
              private store: Store<IEntitySlice>) {
  }

  ngOnInit() {
    this.applyBusinessRules();
    this.store.pipe(select(getSelectedEntityId))
      .subscribe((selectedEntityId: number) => {
        this.selected = selectedEntityId === this.vm.data.entityId;
      });
  }

  private onChanges() {
    this.vm.metadata.form.valueChanges
      .pipe()
      .subscribe((val) => {
        this.revalidate();
      });
  }

  public revalidate() {
    this.formsService.revalidate(this.vm.metadata.form);
  }

  private applyBusinessRules() {
    // Apply any business logic
    if (this.vm.data.firstName === 'Bob') {
      this.vm.metadata.fieldProps.firstName.label = 'Custom label';
      this.vm.metadata.displayDiagnostics = true;
    }
  }

  public selectEntity(): void {
    this.selected = !this.selected;
    if (this.selected === true) {
      this.store.dispatch(new SelectEntityAction(this.vm.data));
    }
  }
}
