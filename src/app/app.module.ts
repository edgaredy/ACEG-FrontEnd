import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginMainModule } from './login-main.module/login-main.module';
import { HomeModule } from './home/home.module';
import { RegistroModule } from './registro/registro.module';
import { UtilModule } from './util.module/util.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    LoginMainModule,
    HomeModule,
    RegistroModule,
    UtilModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      tapToDismiss: true,
      autoDismiss: true,
      newestOnTop: false,
      maxOpened: 1
    }),
    BrowserAnimationsModule,
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
