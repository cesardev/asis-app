import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRouting } from './pages.routing';

import { PagesComponent } from './pages.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [ PagesComponent ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRouting
  ]
})
export class PagesModule { }
