import {NxModule} from '@nrwl/angular';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppRoutingModule} from './app-routing.module';
import {AppState} from './app.state';
import {FormsProcessingModule} from '@forms/forms/forms-processing.module';
import {EntityModule} from './entity/entity.module';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsProcessingModule,
    AppRoutingModule,
    EntityModule,
    NxModule.forRoot(),
    StoreModule.forRoot(new AppState()),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Reactive Forms App DevTools',
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
