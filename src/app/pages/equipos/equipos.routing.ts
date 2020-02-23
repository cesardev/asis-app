import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full' }
];

export const EquiposRouting: ModuleWithProviders = RouterModule.forChild(routes);
