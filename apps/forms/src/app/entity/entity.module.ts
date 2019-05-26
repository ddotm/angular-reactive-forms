import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {SharedModule} from '../forms/shared.module';
import {EntityListComponent} from './components/entity-list/entity-list.component';
import {EntityComponent} from './components/entity/entity.component';
import {entityReducer} from './state/entity.reducer';
import {EntitySliceName} from './state/entity.slice.name';

@NgModule({
  declarations: [
    EntityListComponent,
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
