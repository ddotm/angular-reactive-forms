import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  AbstractControl,
  FormGroup
} from '@angular/forms';
import {FormValidationService} from '../../services/form-validation.service';

@Component({
  selector: 'app-field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.scss']
})
export class FieldErrorsComponent implements OnInit {

  @Input() public formGroup: FormGroup = null;
  @Input() public controlName: string = null;

  public control: AbstractControl = null;

  constructor(public formValidationService: FormValidationService) {
  }

  ngOnInit() {
    this.control = this.formGroup.controls[this.controlName];
  }
}
