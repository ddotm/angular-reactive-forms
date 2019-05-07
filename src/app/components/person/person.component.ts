import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../models/person';
import {DataItem} from '../../models/data-item';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit {

  @Input() public vm: DataItem<Person> = null;

  constructor() { }

  ngOnInit() {
  }

}
