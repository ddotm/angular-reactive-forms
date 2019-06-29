import {NxModule} from '@nrwl/angular';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppRoutingModule} from './app-routing.module';
import {AppState} from './app.state';
import {SharedModule} from './forms/shared.module';
import {EntityModule} from './entity/entity.module';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
