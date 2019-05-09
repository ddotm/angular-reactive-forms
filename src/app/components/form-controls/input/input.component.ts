import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldProps} from '../../../models/field-props';
import {FormsService} from '../../../services/forms.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() public formGroup: FormGroup = null;
  @Input() public controlName: string = null;
  @Input() public vm: FieldProps = null;

  constructor(private formsService: FormsService) {
  }

  ngOnInit() {
  }

  public revalidate() {
    this.formsService.revalidate(this.formGroup);
  }
}
