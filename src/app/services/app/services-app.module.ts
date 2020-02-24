import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  AppGuard,
  AuthService,
  UtilService,
  AlertService,
  StorageService,
  AppService
} from './services-app';
import { ErrorInterceptor } from './auth/error.interceptor';
import { RequestInterceptor } from './auth/request.interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AppGuard,
    AuthService,
    UtilService,
    AlertService,
    StorageService,
    AppService,
    RequestInterceptor,
    ErrorInterceptor,
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class ServicesAppModule { }
