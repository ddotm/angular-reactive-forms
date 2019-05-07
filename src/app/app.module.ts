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

@NgModule({
  declarations: [
    AppComponent,
    FormArrayContainerComponent,
    PersonComponent,
    FormSummaryUtilityComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
