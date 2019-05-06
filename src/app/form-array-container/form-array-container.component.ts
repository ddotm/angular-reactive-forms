import * as _ from 'lodash';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {DataItem} from '../models/data-item';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-form-array-container',
  templateUrl: './form-array-container.component.html'
})

export class FormArrayContainerComponent implements OnInit, OnDestroy {

  private subs: Array<Subscription> = new Array<Subscription>();
  public data: Array<DataItem> = null;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    const sub = this.dataService.getData()
      .subscribe({
        next: (value) => {
          this.data = value;
          console.log(JSON.stringify(this.data));
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
