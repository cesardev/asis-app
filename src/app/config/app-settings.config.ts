import { Injectable } from '@angular/core';
import { AppModel } from 'app/models/app/app.model';
import { MenuModel } from 'app/models/app/menu.model';
import { UserModel } from 'app/models/app/user.model';


@Injectable()
export class AppSettings {

  public version = '1.0.0';
  public menu: MenuModel[];
  public user: UserModel;
  public isSession: boolean;
  public config = new AppModel(
    1, // header: 1 = true, 0 = false
    1, // sidebar: 1 = true, 0 = false
    0, // footer: 1 = true, 0 = false
    1, // sidebarOpen: 1 = true, 0 = false
    'normal', // sidebarType: 'mini, 'normal'
    'vertical', // sidebarPos: 'vertical', 'horizontal'
    'neo-light', // theme
    '14', // pixelsBase
    'outline' // typeFormField: 'legacy', 'standard', 'fill', 'outline'
  );

}
