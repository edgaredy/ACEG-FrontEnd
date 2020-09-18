import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './components/registro.component';
import { RegistroRouting } from './registro.routes';

@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    RegistroRouting,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  exports: []
})
export class RegistroModule { }
