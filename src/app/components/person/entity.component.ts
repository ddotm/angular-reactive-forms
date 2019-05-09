import {Component, Input, OnInit} from '@angular/core';
import {Entity} from '../../models/entity';
import {DataItem} from '../../models/data-item';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html'
})
export class EntityComponent implements OnInit {

  @Input() public vm: DataItem<Entity> = null;

  constructor() {
  }

  ngOnInit() {
    this.applyBusinessRules();
  }

  private applyBusinessRules() {
    // Apply any business logic
    if (this.vm.data.firstName === 'Bob') {
      this.vm.metadata.displayDiagnostics = true;
      this.vm.metadata.fieldProps.firstName.label = 'Custom label for Bob';
    }
  }
}
