import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormArrayContainerComponent} from "./components/form-array-container/form-array-container.component";

const routes: Routes = [
  { path: '', component: FormArrayContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
