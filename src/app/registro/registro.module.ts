import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './components/registro.component';
import { RegistroRouting } from './registro.routes';

@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    RegistroRouting,
    CommonModule
  ],
  providers: [],
  exports: []
})
export class RegistroModule { }
