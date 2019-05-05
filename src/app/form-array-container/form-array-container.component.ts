import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {DataItem} from '../models/data-item';

@Component({
  selector: 'app-form-array-container',
  templateUrl: './form-array-container.component.html'
})

export class FormArrayContainerComponent implements OnInit {

  public data: Array<DataItem> = null;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getData()
      .subscribe({
        next: (value) => {
          this.data = value;
          console.log(JSON.stringify(this.data));
        }
      });
  }
}
