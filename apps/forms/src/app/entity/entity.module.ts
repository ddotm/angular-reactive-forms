import {NgModule} from '@angular/core';
import {SharedModule} from '../forms/shared.module';
import {EntityListComponent} from './components/entity-list/entity-list.component';
import {EntityComponent} from './components/entity/entity.component';
import {StoreModule} from '@ngrx/store';
import {entityReducer} from './entity.reducer';
import {EntitySliceName} from './entity.slice.name';

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
