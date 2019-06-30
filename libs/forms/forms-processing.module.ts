import {
  Injector,
  NgModule
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  CalendarModule,
  DropdownModule,
  InputTextModule
} from 'primeng/primeng';
import {DropdownComponent} from './components/form-controls/dropdown/dropdown.component';
import {InputComponent} from './components/form-controls/input/input.component';
import {DateComponent} from './components/form-controls/date/date.component';
import {FormSummaryUtilityComponent} from './components/form-summary-utility/form-summary-utility.component';
import {FieldErrorsComponent} from './components/field-errors/field-errors.component';

const InputComponents = [
  DropdownComponent,
  InputComponent,
  DateComponent
];
const PrimeNgModules = [
  DropdownModule,
  InputTextModule,
  CalendarModule
];

@NgModule({
  declarations: [
    FormSummaryUtilityComponent,
    FieldErrorsComponent,
    ...InputComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ...PrimeNgModules
  ],
  providers: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    DropdownComponent,
    InputComponent,
    DateComponent,
    FormSummaryUtilityComponent
  ]
})
export class FormsProcessingModule {
  constructor(private injector: Injector) {
    AppInjector = this.injector;
  }
}

export let AppInjector: Injector;
