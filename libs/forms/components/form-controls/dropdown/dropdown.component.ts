import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldProps} from '../../../models/field-props';
import {FormsService} from '../../../services/forms.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() public formGroup: FormGroup = null;
  @Input() public controlName: string = null;
  @Input() public vm: FieldProps = null;

  constructor(private formsService: FormsService) {
  }

  ngOnInit() {
  }

  public revalidate() {
    if (this.vm.revalidate) {
      this.formsService.revalidate(this.formGroup);
    }
  }
}
