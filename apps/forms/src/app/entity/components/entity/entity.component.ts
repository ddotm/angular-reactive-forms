import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';
import { Entity, EntityPropNames } from '../../models/entity';
import { DataItem } from '../../../forms/models/data-item';
import { FormsService } from '../../../forms/services/forms.service';
import { IEntitySlice } from '../../state/entity.slice';
import { SelectEntityAction } from '../../state/entity.actions';
import { getSelectedEntityId } from '../../state/entity.selectors';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html'
})
export class EntityComponent implements OnInit, OnDestroy {
  componentActive = true;

  @Input() public vm: DataItem<Entity> = null;
  public propNames = EntityPropNames;
  public selected: boolean = false;

  constructor(private formsService: FormsService,
              private store: Store<IEntitySlice>) {
  }

  ngOnInit() {
    this.applyBusinessRules();
    this.store.pipe(
      select(getSelectedEntityId),
      takeWhile(() => this.componentActive))
      .subscribe((selectedEntityId: number) => {
        this.selected = selectedEntityId === this.vm.data.entityId;
      });
  }

  private onChanges() {
    this.vm.metadata.form.valueChanges
      .pipe(
        takeWhile(() => this.componentActive)
      )
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
      // this.vm.metadata.displayDiagnostics = true;
    }
  }

  public selectEntity(): void {
    this.selected = !this.selected;
    if (this.selected === true) {
      this.store.dispatch(new SelectEntityAction(this.vm.data));
    }
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }
}
