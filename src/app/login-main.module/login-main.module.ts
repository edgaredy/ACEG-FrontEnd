import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginMainComponent } from './components/login-main.component';
import { LoginMainRouting } from './login.main.routing';

@NgModule({
  declarations: [
    LoginMainComponent
  ],
  imports: [
    LoginMainRouting,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  exports: []
})
export class LoginMainModule { }
