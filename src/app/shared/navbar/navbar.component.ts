import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'app/config/app-settings.config';

@Component({
  selector: 'neo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public settings: AppSettings
  ) { }

  ngOnInit() { }

}
