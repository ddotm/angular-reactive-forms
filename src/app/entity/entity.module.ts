import {NgModule} from '@angular/core';
import {SharedModule} from '../forms/shared.module';
import {EntitiesContainerComponent} from './components/entities-container/entities-container.component';
import {EntityComponent} from './components/entity/entity.component';
import {StoreModule} from '@ngrx/store';
import {entityReducer} from './entity.reducer';
import {EntitySliceName} from './entity.slice.name';

@NgModule({
  declarations: [
    EntitiesContainerComponent,
    EntityComponent,
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature(EntitySliceName, entityReducer)
  ],
  providers: [],
})
export class EntityModule {
}
