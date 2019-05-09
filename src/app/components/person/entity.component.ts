import {Component, Input, OnInit} from '@angular/core';
import {Entity, EntityPropNames} from '../../models/entity';
import {DataItem} from '../../models/data-item';
import {FormsService} from '../../services/forms.service';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html'
})
export class EntityComponent implements OnInit {

  @Input() public vm: DataItem<Entity> = null;
  public propNames = EntityPropNames;

  constructor(private formsService: FormsService) {
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
      this.vm.metadata.displayDiagnostics = true;
      this.vm.metadata.fieldProps.firstName.label = 'Custom label for Bob';
    }
  }
}
