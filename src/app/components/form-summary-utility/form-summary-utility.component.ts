import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-summary-utility',
  templateUrl: './form-summary-utility.component.html',
  styleUrls: ['./form-summary-utility.component.scss']
})
export class FormSummaryUtilityComponent implements OnInit {

  @Input() public form: FormGroup = null;

  constructor() {
  }

  ngOnInit() {
  }

}
