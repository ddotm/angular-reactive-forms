import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {DropdownComponent} from './components/form-controls/dropdown/dropdown.component';
import {InputComponent} from './components/form-controls/input/input.component';
import {DateComponent} from './components/form-controls/date/date.component';
import {CalendarModule, DropdownModule, InputTextModule} from 'primeng/primeng';
import {FormSummaryUtilityComponent} from './components/form-summary-utility/form-summary-utility.component';
import {FieldErrorsComponent} from './components/field-errors/field-errors.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    StoreModule.forRoot({}),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ...PrimeNgModules,
  ],
  providers: [],
  exports: [
    StoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownComponent,
    InputComponent,
    DateComponent,
    FormSummaryUtilityComponent
  ]
})
export class SharedModule {
}