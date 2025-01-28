import { Routes} from '@angular/router';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { PaginaNotaComponent } from './pagina-nota/pagina-nota.component';

export const routes: Routes = [
    {path: 'inicio', component: PaginaInicioComponent},
    {path: '', component: PaginaLoginComponent},
    {path: 'nota/:id', component: PaginaNotaComponent}
];




