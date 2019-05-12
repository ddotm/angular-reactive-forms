import {NgModule} from '@angular/core';
import {SharedModule} from '../forms/shared.module';
import {EntitiesContainerComponent} from './components/entities-container/entities-container.component';
import {EntityComponent} from './components/entity/entity.component';
import {StoreModule} from '@ngrx/store';
import {entityReducer} from './entity.reducer';

@NgModule({
  declarations: [
    EntitiesContainerComponent,
    EntityComponent,
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature('entity', entityReducer)
  ],
  providers: [],
})
export class EntityModule {
}
