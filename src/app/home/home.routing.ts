import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home.component';
import { AuthGuard } from '../util.module/guards/auth.guard';

const exampleRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(exampleRoutes)],
    exports: [RouterModule]
})

export class HomeRouting { }
