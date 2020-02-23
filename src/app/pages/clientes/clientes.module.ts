import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRouting } from './clientes.routing';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { AccionesComercialesComponent } from './acciones-comerciales/acciones-comerciales.component';


@NgModule({
  declarations: [
    MiPerfilComponent,
    AccionesComercialesComponent
  ],
  imports: [
    CommonModule,
    ClientesRouting
  ]
})
export class ClientesModule { }
