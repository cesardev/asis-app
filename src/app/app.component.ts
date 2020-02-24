import { Component, OnInit } from '@angular/core';
import { AppSettings } from './config/app-settings.config';

@Component({
  selector: 'app-neo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    public settings: AppSettings
  ) { }

  ngOnInit(): void {
    document.getElementById('maincontent')
      .classList.add(this.settings.config.theme);
  }
}
