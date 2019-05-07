import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../models/person';
import {DataItem} from '../../models/data-item';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit {

  @Input() public viewModel: DataItem<Person> = null;

  constructor() { }

  ngOnInit() {
  }

}
