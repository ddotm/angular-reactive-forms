import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormArrayContainerComponent} from './components/form-array-container/form-array-container.component';
import {PersonComponent} from './components/person/person.component';
import {FormSummaryUtilityComponent} from './components/form-summary-utility/form-summary-utility.component';
import {DropdownComponent} from './components/form-controls/dropdown/dropdown.component';
import {InputComponent} from './components/form-controls/input/input.component';
import {DateComponent} from './components/form-controls/date/date.component';

import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {FieldErrorsComponent} from './components/form-controls/field-errors/field-errors.component';

const InputComponents = [DropdownComponent, InputComponent, DateComponent];
const PrimeNgModules = [DropdownModule, InputTextModule, CalendarModule];

@NgModule({
  declarations: [
    AppComponent,
    FormArrayContainerComponent,
    PersonComponent,
    FormSummaryUtilityComponent,
    ...InputComponents,
    FieldErrorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...PrimeNgModules,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
