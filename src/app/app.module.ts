import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRouting } from './app.routing';
import { ServicesAppModule } from './services/app/services-app.module';
import { AppSettings } from './config/app-settings.config';

import { AppComponent } from './app.component';
import { LoaderComponent } from './utils/loader/loader.component';
import { RippleGlobalOptions, MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { GestureConfig } from '@angular/material';
import { MSG } from './config/msg-constants.config';

// Configuración del ripple de angular material
const globalRippleConfig: RippleGlobalOptions = {
  disabled: false,
  terminateOnPointerUp: false,
  animation: {
    enterDuration: 300,
    exitDuration: 0
  }
};

@NgModule({
  declarations: [ AppComponent, LoaderComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting,
    ServicesAppModule
  ],
  providers: [
    AppSettings,
    MSG,
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig },
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
