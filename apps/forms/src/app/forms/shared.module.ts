import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DropdownComponent } from './components/form-controls/dropdown/dropdown.component';
import { InputComponent } from './components/form-controls/input/input.component';
import { DateComponent } from './components/form-controls/date/date.component';
import { CalendarModule, DropdownModule, InputTextModule } from 'primeng/primeng';
import { FormSummaryUtilityComponent } from './components/form-summary-utility/form-summary-utility.component';
import { FieldErrorsComponent } from './components/field-errors/field-errors.component';
import { environment } from '../../environments/environment';

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
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Reactive Forms App DevTools',
      maxAge: 25,
      logOnly: environment.production
    }),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ...PrimeNgModules
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
  constructor(private injector: Injector) {
    AppInjector = this.injector;
  }
}

export let AppInjector: Injector;
