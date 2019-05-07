import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldProps} from '../../../models/field-props';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  @Input() public formGroup: FormGroup = null;
  @Input() public controlName: string = null;
  @Input() public vm: FieldProps = null;

  constructor() {
  }

  ngOnInit() {
  }

}
