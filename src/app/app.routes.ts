import { Routes } from '@angular/router';
import { LoginComponent } from './app/login/login/login.component';
import { RegistroComponent } from './app/registro/registro/registro.component';
import { DatatableComponent } from './pages/datatable/datatable.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'datatable', component: DatatableComponent },
];
