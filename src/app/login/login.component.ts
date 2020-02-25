import { environment } from './../../environments/environment';
import { Component } from '@angular/core';
import { AppSettings } from 'app/config/app-settings.config';
import { AlertService, UtilService } from 'app/services/app/services-app';
import { NgForm } from '@angular/forms';
import { UserLoginModel } from 'app/models/app/user.model';
import { MSG } from 'app/config/msg-constants.config';
import { Router } from '@angular/router';

@Component({
  selector: 'neo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public assets = environment.assets;
  public user: UserLoginModel = new UserLoginModel();

  constructor(
    public settings: AppSettings,
    private util: UtilService,
    private alert: AlertService,
    private route: Router
  ) { }

  public goArrival( formLogin: NgForm ): void {
    if ( !this.util.validateForm( formLogin ) ) {
      this.alert.toast(MSG.FORM_INVALID, 'error', 'center');
    } else {
      this.alert.toast('Llegada registrada a las 08:00 hrs', 'success', 'center', 0);
    }
  }

  public goExit( formLogin: NgForm ): void {
    if ( !this.util.validateForm( formLogin ) ) {
      this.alert.toast(MSG.FORM_INVALID, 'error', 'center');
    } else {
      this.alert.toast('Salida registrada a las 18:33 hrs', 'success', 'center', 0);
    }
  }

  public goLogin( formLogin: NgForm ): void {
    if ( !this.util.validateForm( formLogin ) ) {
      // this.alert.toast('Formulario incompleto', 'error', 'bottom');
    } else {
      this.alert.success('Sesión iniciada', formLogin.controls.username.value);
      formLogin.resetForm();
      this.route.navigate(['/pages']);
    }
  }

}
