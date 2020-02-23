import { environment } from './../../environments/environment';
import { Component } from '@angular/core';
import { AppSettings } from 'app/config/app-settings.config';

@Component({
  selector: 'neo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public assets = environment.assets;

  constructor(
    public settings: AppSettings
  ) { }

}
