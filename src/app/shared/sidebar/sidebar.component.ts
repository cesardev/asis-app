import { MenuModel } from 'app/models/app/menu.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppSettings } from 'app/config/app-settings.config';
import { AppService } from 'app/services/app/services-app';
import { Subscription } from 'rxjs';

@Component({
  selector: 'neo-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  private menuSuscription: Subscription;

  constructor(
    public settings: AppSettings,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.menuSuscription = this.appService.getMenu().subscribe();
  }

  OnDestroy() {
    this.menuSuscription.unsubscribe();
  }

}
