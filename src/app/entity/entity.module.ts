import {NgModule} from '@angular/core';
import {SharedModule} from '../forms/shared.module';
import {EntitiesContainerComponent} from './components/entities-container/entities-container.component';
import {EntityComponent} from './components/entity/entity.component';

@NgModule({
  declarations: [
    EntitiesContainerComponent,
    EntityComponent,
  ],
  imports: [
    SharedModule
  ],
  providers: [],
})
export class EntityModule {
}
