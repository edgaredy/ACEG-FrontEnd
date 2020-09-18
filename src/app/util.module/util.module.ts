import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilRouting } from './util.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ForbiddenComponent, ServerErrorComponent } from './components';

@NgModule({
  declarations: [
    ForbiddenComponent,
    ServerErrorComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CommonModule,
    UtilRouting
  ],
  providers: [],
  exports: []
})
export class UtilModule { }
