import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginMainComponent } from './components/login-main.component';
import { LoginMainRouting } from './login.main.routing';

@NgModule({
  declarations: [
    LoginMainComponent
  ],
  imports: [
    LoginMainRouting,
    CommonModule
  ],
  providers: [],
  exports: []
})
export class LoginMainModule { }
