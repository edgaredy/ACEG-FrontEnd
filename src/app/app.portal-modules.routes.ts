import { LoginMainModule } from './login-main.module/login-main.module';
import { HomeModule } from './home/home.module';
import { RegistroModule } from './registro/registro.module';

const routesApp = [
    {
        path: 'home',
        loadChildren: () => HomeModule
    },
    {
        path: 'login',
        loadChildren: () => LoginMainModule
    },
    {
        path: 'registro',
        loadChildren: () => RegistroModule
    },
    {
        path: '**',
        redirectTo: 'pagina404'
    }
];

export let AppPortalModulesRoutes = [...routesApp];
