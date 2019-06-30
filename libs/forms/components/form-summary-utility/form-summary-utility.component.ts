import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  FormArray,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-form-summary-utility',
  templateUrl: './form-summary-utility.component.html',
  styleUrls: ['./form-summary-utility.component.scss']
})
export class FormSummaryUtilityComponent implements OnInit {
  @Input() public form: FormGroup | FormArray = null;
  @Input() public model: any = null;

  constructor() {
  }

  ngOnInit() {
  }
}
