import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../forms/shared.module';
import { EntityListComponent } from './components/entity-list/entity-list.component';
import { EntityComponent } from './components/entity/entity.component';
import { entityReducer } from './state/entity.reducer';
import { EntitySliceName } from './state/entity.slice.name';
import { EntityEffects } from './state/entity.effects';

@NgModule({
  declarations: [
    EntityListComponent,
    EntityComponent
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature(EntitySliceName, entityReducer),
    EffectsModule.forFeature(
      [EntityEffects]
    )
  ],
  providers: []
})
export class EntityModule {
}
