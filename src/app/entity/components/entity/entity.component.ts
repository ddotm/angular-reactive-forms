import {Component, Input, OnInit} from '@angular/core';
import {Entity, EntityPropNames} from '../../models/entity';
import {DataItem} from '../../../forms/models/data-item';
import {FormsService} from '../../../forms/services/forms.service';
import {Store} from '@ngrx/store';
import {EntitySlice} from '../../entity.slice';
import {SelectEntityAction} from '../../entity.actions';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html'
})
export class EntityComponent implements OnInit {

  @Input() public vm: DataItem<Entity> = null;
  public propNames = EntityPropNames;
  public selected: boolean = false;

  constructor(private formsService: FormsService,
              private store: Store<EntitySlice>) {
  }

  ngOnInit() {
    this.applyBusinessRules();

    // this.onChanges();
  }

  private onChanges() {
    this.vm.metadata.form.valueChanges
    // .pipe(takeUntil())
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
    }
  }

  public selectEntity(): void {
    this.selected = !this.selected;
    this.store.dispatch(new SelectEntityAction(this.selected ? this.vm.data : null));
  }
}
