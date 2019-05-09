import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../models/person';
import {DataItem} from '../../models/data-item';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit {

  @Input() public vm: DataItem<Person> = null;

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
