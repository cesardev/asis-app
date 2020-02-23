import { Component } from '@angular/core';
import { AppSettings } from './../../config/app-settings.config';

@Component({
  selector: 'neo-custom-app',
  templateUrl: './custom-app.component.html',
  styleUrls: ['./custom-app.component.scss']
})
export class CustomAppComponent {

  public isSettings = false;
  public pixelsBase: number;

  constructor(
    public settings: AppSettings
  ) { }

  changeHeader() {

    this.settings.config.isHeaderFixed = this.settings.config.isHeaderFixed === 1 ? 0 : 1;

    const sidebarPos = this.settings.config.sidebarPos;
    const isHeaderFixed = this.settings.config.isHeaderFixed;
    const isSidebarFixed = this.settings.config.isSidebarFixed;

    if ( sidebarPos === 'horizontal' ) {
      if ( isHeaderFixed === 0 && isSidebarFixed === 1 ) {
        this.settings.config.isSidebarFixed = 0;
      }
    }

  }

  changeSidebar() {

    this.settings.config.isSidebarFixed = this.settings.config.isSidebarFixed === 1 ? 0 : 1;

    const sidebarPos = this.settings.config.sidebarPos;
    const isHeaderFixed = this.settings.config.isHeaderFixed;
    const isSidebarFixed = this.settings.config.isSidebarFixed;

    if ( sidebarPos === 'horizontal' ) {
      if ( isSidebarFixed === 1 && isHeaderFixed === 0 ) {
        this.settings.config.isHeaderFixed = 1;
      }
    }

  }

}
