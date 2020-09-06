import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home.component';

const exampleRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(exampleRoutes)],
    exports: [RouterModule]
})

export class HomeRouting { }
