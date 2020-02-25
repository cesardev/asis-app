import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      // { path: '', redirectTo: 'clientes', pathMatch: 'full' },
      { path: '', pathMatch: 'full' },
      // { path: 'clientes', loadChildren: 'app/pages/clientes/clientes.module#ClientesModule' }
    ]
  }
];

export const PagesRouting: ModuleWithProviders = RouterModule.forChild(routes);
