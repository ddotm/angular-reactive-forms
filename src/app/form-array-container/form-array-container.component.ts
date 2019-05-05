import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-form-array-container',
  templateUrl: './form-array-container.component.html'
})

export class FormArrayContainerComponent implements OnInit {

  public data: Array<any> = null;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getData()
      .subscribe({
        next: (value) => {
          this.data = value;
        }
      });
  }
}
