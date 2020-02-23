import { MenuModel } from 'app/models/app/menu.model';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from './../../../models/app/response.model';
import { AppSettings } from 'app/config/app-settings.config';

@Injectable({providedIn: 'root'})
export class AppService {

  private readonly URL = `${environment.assets}/data/app`;

  constructor(
    private http: HttpClient,
    private settings: AppSettings
  ) { }

  public getNavHeader(): any {
    return this.http.get<ResponseModel>(`${this.URL}/menuHeader.json`);
  }

  public getMenu(): any {
    return this.http.get<ResponseModel>(`${this.URL}/menuDinamico.json`)
      .pipe( map( ( response: ResponseModel ) => {

        const result: MenuModel[] = response.resultado;
        const menuDinamico: MenuModel[] = [];

        if ( result && result.length > 0 ) {

          result.forEach(( item: MenuModel ) => {
            item.subMenus = [];
            item.txtCodUrl = item.txtCodUrl === '' ? `menu${item.idMod}` : item.txtCodUrl;

            if ( item.idNivel === 0 ) {
              item.subMenus = null;
              menuDinamico.push( item );
            }

            if ( item.idNivel === 1 ) {

              for ( const menu of result ) {
                if ( menu.idPadre === item.idMod ) {
                  item.subMenus.push( menu );
                }
              }

              menuDinamico.push( item );
            }

          });

          for ( const menu of menuDinamico ) {

            if ( menu.subMenus && menu.subMenus.length > 0 ) {
              for ( const submenu of menu.subMenus ) {
                for ( const item of result ) {
                  if ( submenu.idMod === item.idPadre ) {
                    submenu.subMenus.push( item );
                  }
                }
              }
            }
          }
        }

        this.settings.menu = menuDinamico;

        return this.settings.menu;
      }));
  }

}
