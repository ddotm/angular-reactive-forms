import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopNavMenuComponent} from './top-nav-menu/top-nav-menu.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TopNavMenuComponent],
  exports: [TopNavMenuComponent]
})
export class TopNavMenuModule {
}
