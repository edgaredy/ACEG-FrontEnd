import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForbiddenComponent } from './components/error/forbidden.component';
import { ServerErrorComponent } from './components/error/server-error.component';

const routes: Routes = [
  {
    path: '403',
    component: ForbiddenComponent
  },
  {
    path: '500',
    component: ServerErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilRouting { }
