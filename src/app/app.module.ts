import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginMainModule } from './login-main.module/login-main.module';
import { HomeModule } from './home/home.module';
import { RegistroModule } from './registro/registro.module';


@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    LoginMainModule,
    HomeModule,
    RegistroModule,
    AppRoutingModule,
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
  ],
  exports: [
    HttpClientModule
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
  ]
})

export class AppModule { }
