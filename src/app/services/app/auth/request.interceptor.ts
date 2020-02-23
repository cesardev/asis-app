import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';
import { AuthService } from './auth.service';


@Injectable({providedIn: 'root'})
export class RequestInterceptor implements HttpInterceptor {

  private countRequest = 0;

  constructor(
    private authService: AuthService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if ( !request.headers.has('Content-Type') ) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json;charset=UFT-8') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    let showLoader = true;

    for ( const skip of environment.skipWsLoader ) {
      if ( new RegExp(skip).test(request.url) ) {
        showLoader = false;
        break;
      }
    }

    if ( showLoader ) {

      if ( this.countRequest === 0 ) { this.onStart(); }

      this.countRequest++;

      return next.handle(request).pipe(
        map( (event: HttpEvent<any>) => event ),
        finalize( () => {
          this.countRequest--;
          if ( this.countRequest === 0 ) { this.onEnd(); }
        })
      );

    } else {

      return next.handle(request);

    }
  }

  private onStart(): void { this.authService.showLoader(); }

  private onEnd(): void { this.authService.hideLoader(); }

}
