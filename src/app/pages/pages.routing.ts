import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'clientes', pathMatch: 'full' },
      { path: 'clientes', loadChildren: 'app/pages/clientes/clientes.module#ClientesModule' },
      { path: 'equipos', loadChildren: 'app/pages/equipos/equipos.module#EquiposModule' }
    ]
  }
];

export const PagesRouting: ModuleWithProviders = RouterModule.forChild(routes);
