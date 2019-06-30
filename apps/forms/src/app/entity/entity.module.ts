import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {FormsProcessingModule} from '@forms/forms/forms-processing.module';
import {EntityListComponent} from './components/entity-list/entity-list.component';
import {EntityComponent} from './components/entity/entity.component';
import {entityReducer} from './state/entity.reducer';
import {EntityEffects} from './state';
import {EntitySliceName} from './state';

// Imports for loading & configuring the in-memory web api
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {EntityData} from './entity.data';

@NgModule({
  declarations: [
    EntityListComponent,
    EntityComponent
  ],
  imports: [
    FormsProcessingModule,
    StoreModule.forFeature(EntitySliceName, entityReducer),
    EffectsModule.forFeature(
      [EntityEffects]
    ),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(EntityData)
  ],
  providers: []
})
export class EntityModule {
}
