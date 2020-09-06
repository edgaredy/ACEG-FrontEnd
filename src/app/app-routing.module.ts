import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginMainComponent } from './login-main.module/components/login-main.component';
import { AppPortalModulesRoutes } from './app.portal-modules.routes';

const routes: Routes = [
  {
    path: 'login',
    component: LoginMainComponent,
    children: [
      ...AppPortalModulesRoutes
    ]
  }
];

// {useHash: true}
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
