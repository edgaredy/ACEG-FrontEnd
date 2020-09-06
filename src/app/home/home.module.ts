import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home.component';
import { HomeRouting } from './home.routing';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRouting,
    CommonModule
  ],
  providers: [],
  exports: []
})
export class HomeModule { }
