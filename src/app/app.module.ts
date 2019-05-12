import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './forms/shared.module';
import {EntityModule} from './entity/entity.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    EntityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
