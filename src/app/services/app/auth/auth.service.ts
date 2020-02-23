import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderState } from './../../../models/app/app.model';


@Injectable({ providedIn: 'root' })
export class AuthService {

  private loaderSubject = new Subject<LoaderState>();

  public loaderState = this.loaderSubject.asObservable();

  constructor() { }

  public showLoader() {
    this.loaderSubject.next({ show: true } as LoaderState);
  }

  public hideLoader() {
    this.loaderSubject.next({ show: false } as LoaderState);
  }
}
