import {Component, Input, OnInit} from '@angular/core';
import {FieldProps} from '../../../models/field-props';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() public formGroup: FormGroup = null;
  @Input() public controlName: string = null;
  @Input() public vm: FieldProps = null;

  constructor() {
  }

  ngOnInit() {
  }

}
