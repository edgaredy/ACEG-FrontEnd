import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegistroComponent } from './components/registro.component';

const routes: Routes = [
    {
       path: 'registro',
       component: RegistroComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegistroRouting {
}
