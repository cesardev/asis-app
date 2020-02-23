import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { AccionesComercialesComponent } from './acciones-comerciales/acciones-comerciales.component';


const routes: Routes = [
  { path: '', redirectTo: 'mi-perfil', pathMatch: 'full' },
  { path: 'mi-perfil', component: MiPerfilComponent },
  { path: 'acciones-comerciales', component: AccionesComercialesComponent },
  { path: 'derivacion-ventanilla', component: MiPerfilComponent }
];

export const ClientesRouting: ModuleWithProviders = RouterModule.forChild(routes);

