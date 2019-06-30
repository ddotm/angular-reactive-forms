import {NgModule} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {EntityListComponent} from './entity/components/entity-list/entity-list.component';

const routes: Routes = [
  {
    path: '',
    component: EntityListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
