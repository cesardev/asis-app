import { Component, OnInit, HostListener } from '@angular/core';
import { AppSettings } from './../config/app-settings.config';

@Component({
  selector: 'neo-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(
    public settings: AppSettings
  ) { }

  ngOnInit() {
    // document.getElementById('maincontent')
    //   .classList.add(this.settings.config.theme);

    if ( window.innerWidth <= 768 ) {
      this.settings.config.isSidebarOpen = 0;
    }
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    if ( window.innerWidth <= 768 ) {
      this.settings.config.isSidebarOpen = 0;
    } else {
      this.settings.config.isSidebarOpen = 1;
    }
  }

}
