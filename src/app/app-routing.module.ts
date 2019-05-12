import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EntitiesContainerComponent} from './components/entities-container/entities-container.component';

const routes: Routes = [
  {path: '', component: EntitiesContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
