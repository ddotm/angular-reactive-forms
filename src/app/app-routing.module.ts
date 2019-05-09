import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EntityDatasetContainerComponent} from "./components/form-array-container/entity-dataset-container.component";

const routes: Routes = [
  { path: '', component: EntityDatasetContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
