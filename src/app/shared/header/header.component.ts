import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { AppSettings } from './../../config/app-settings.config';
import { AppService } from './../../services/app/commons/app.service';
import { ResponseModel } from 'app/models/app/response.model';
import { MenuHeaderModel } from './../../models/app/menu.model';

@Component({
  selector: 'neo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public assets = environment.assets;
  public isSearch = false;
  public menuHeader: MenuHeaderModel[];

  public options = [
    { id: 1, label: 'BUC' },
    { id: 2, label: 'No. CONTRATO' },
    { id: 3, label: 'No. TDD-TDC' }
  ];

  constructor(
    private appService: AppService,
    public settings: AppSettings
  ) { }

  ngOnInit() {
    this.appService.getNavHeader().subscribe( ( response: ResponseModel ) => {
      this.menuHeader = response.resultado;
    });
  }

  public toggleSidebar() {

    const isSidebarOpen = this.settings.config.isSidebarOpen;

    this.settings.config.isSidebarOpen = isSidebarOpen === 1 ? 0 : 1;
  }

  searchClient() {
    console.log('Buscando...');
  }

}
