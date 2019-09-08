import _ from 'lodash';
import {
  Component,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  select,
  Store
} from '@ngrx/store';
import {takeWhile} from 'rxjs/operators';
import {
  Entity,
  EntityPropNames
} from '../../models/entity';
import {DataItem} from '@forms/forms/models/data-item';
import {FormsService} from '@forms/forms/services/forms.service';
import {
  SelectEntityAction,
  getSelectedEntityId,
  IEntitySlice
} from '../../state';
import {EntityService} from '../../services/entity.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html'
})
export class EntityComponent implements OnInit, OnDestroy {
  @Input() public vm: DataItem<Entity> = null;

  public propNames = EntityPropNames;
  public selected: boolean = false;
  componentActive = true;

  constructor(private formsService: FormsService,
              private store: Store<IEntitySlice>,
              private entityService: EntityService) {
  }

  ngOnInit() {
    this.applyBusinessRules();
    this.store.pipe(
      select(getSelectedEntityId),
      takeWhile(() => this.componentActive))
        .subscribe((selectedEntityId: number) => {
          this.selected = selectedEntityId === this.vm.data.id;
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

  public save() {
    const entity: Entity = this.vm.metadata.form.value;
    let obs: Observable<any>;
    if (entity.id !== 0) {
      obs = this.entityService.updateEntity(entity);
    } else {
      obs = this.entityService.addEntity(entity);
    }

    obs.subscribe({
      next: (data: Entity) => {
        _.merge(this.vm.data, data);
        this.setEditable(false);
      }
    });
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  setEditable(editable: boolean) {
    this.vm.metadata.editMode = editable;
  }
}
