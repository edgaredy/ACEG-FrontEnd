import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegistroComponent } from './components/registro.component';

const exampleRoutes: Routes = [
    {
       path: 'registro',
       component: RegistroComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(exampleRoutes)],
    exports: [RouterModule]
})
export class RegistroRouting {
}
