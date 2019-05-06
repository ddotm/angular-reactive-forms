import * as _ from 'lodash';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {DataItem} from '../models/data-item';
import {Subscription} from 'rxjs';
import {FormsService} from '../services/forms.service';
import {Person} from '../models/person';

@Component({
  selector: 'app-form-array-container',
  templateUrl: './form-array-container.component.html'
})

export class FormArrayContainerComponent implements OnInit, OnDestroy {

  private subs: Array<Subscription> = new Array<Subscription>();
  public viewModel: Array<DataItem<Person>> = new Array<DataItem<Person>>();

  constructor(private dataService: DataService,
              public formsService: FormsService) {
  }

  ngOnInit() {
    const sub = this.dataService.getData()
      .subscribe({
        next: (value: Array<Person>) => {

          _.forEach(value, (person: Person) => {
            // Assign specific type into the data property of the data item container
            const dataItem = new DataItem<Person>();
            dataItem.data = new Person(person);
            // Create a form group for the data item
            dataItem.metadata.form = this.formsService.createFormGroup(dataItem);
            this.viewModel.push(dataItem);
          });
          console.log(this.viewModel);
        }
      });
    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    _.forEach(this.subs, (sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}
