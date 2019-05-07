import * as _ from 'lodash';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {DataItem} from '../../models/data-item';
import {Subscription} from 'rxjs';
import {FormsService} from '../../services/forms.service';
import {Person} from '../../models/person';

@Component({
  selector: 'app-form-array-container',
  templateUrl: './form-array-container.component.html'
})

export class FormArrayContainerComponent implements OnInit, OnDestroy {

  private subs: Array<Subscription> = new Array<Subscription>();
  public vm: Array<DataItem<Person>> = new Array<DataItem<Person>>();

  constructor(private dataService: DataService,
              public formsService: FormsService) {
  }

  ngOnInit() {
    const sub = this.dataService.getData()
      .subscribe({
        next: (value: Array<Person>) => {
          _.forEach(value, (person: Person) => {
            // Assign specific type to the data property of the data item container
            const dataItem = new DataItem<Person>(this.formsService)
              .setData(new Person(person))
              .createForm();
            dataItem.metadata.fieldProps = dataItem.data.getFieldProps();
            // Execute any business logic
            if (dataItem.data.firstName === 'Bob') {
              dataItem.metadata.displayDiagnostics = true;
              dataItem.metadata.fieldProps.firstName.label = 'Custom label for Bob';
            }
            this.vm.push(dataItem);
          });
          console.log(this.vm);
        }
      });
    this.subs.push(sub);
  }

  public save() {
    const persons: Array<Person> = _.map(this.vm, (dataItem: DataItem<Person>) => {
      return dataItem.data;
    });
    this.dataService.saveData(persons);
  }

  ngOnDestroy(): void {
    _.forEach(this.subs, (sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}
