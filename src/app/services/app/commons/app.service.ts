import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from './../../../models/app/response.model';

@Injectable({providedIn: 'root'})
export class AppService {

  private readonly URL = `${environment.assets}/data/app`;

  constructor(
    private http: HttpClient
  ) { }

  public getNavHeader(): any {
    return this.http.get<ResponseModel>(`${this.URL}/menuHeader.json`);
  }

}
