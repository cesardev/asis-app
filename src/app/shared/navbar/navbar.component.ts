import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'app/config/app-settings.config';
import { AppService } from 'app/services/app/services-app';
import { Subscription } from 'rxjs';

@Component({
  selector: 'neo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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
