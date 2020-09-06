import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginMainComponent } from './components/login-main.component';

const exampleRoutes: Routes = [
    {
        path: '',
        component: LoginMainComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(exampleRoutes)],
    exports: [RouterModule]
})
export class LoginMainRouting {
}
