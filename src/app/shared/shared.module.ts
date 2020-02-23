import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModules } from './../utils/mat-modules';
import { PipesModule } from 'app/pipes/pipes.module';

import { HeaderComponent } from './../shared/header/header.component';
import { SidebarComponent } from './../shared/sidebar/sidebar.component';
import { NavbarComponent } from 'app/shared/navbar/navbar.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { TotalCarteraComponent } from './../shared/total-cartera/total-cartera.component';
import { AgendaInteractivaComponent } from './../shared/agenda-interactiva/agenda-interactiva.component';
import { FooterComponent } from './../shared/footer/footer.component';
import { CustomAppComponent } from './../utils/custom-app/custom-app.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    NavbarComponent,
    MenuItemComponent,
    TotalCarteraComponent,
    AgendaInteractivaComponent,
    FooterComponent,
    CustomAppComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatModules,
    PipesModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    NavbarComponent,
    MenuItemComponent,
    TotalCarteraComponent,
    AgendaInteractivaComponent,
    FooterComponent,
    CustomAppComponent
  ]
})
export class SharedModule { }
