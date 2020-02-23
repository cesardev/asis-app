import { Component, OnInit } from '@angular/core';
import { AlertService } from './../../../services/app/commons/alert.service';
import { AppSettings } from 'app/config/app-settings.config';

@Component({
  selector: 'mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.scss']
})
export class MiPerfilComponent implements OnInit {

  constructor(
    public settings: AppSettings,
    private alert: AlertService
  ) { }

  ngOnInit() { }

  showAlert( type: string ) {
    switch (type) {
      case 'success':
        this.alert.success('Éxito', 'La transacción fue exitosa');
        break;
      case 'info':
        this.alert.info('Información que cura', 'Nada en exceso, todo con medida');
        break;
      case 'warning':
        this.alert.warning('Advertencia', 'Estas a punto de cometer un error');
        break;
      case 'error':
        this.alert.error('ERROR', 'Al parecer no pudiste con la curiosidad');
        break;
      case 'question':
        this.alert.question('¿Seguro que desea hacer esto?', () => this.showAlert('success'), () => this.showAlert('error'));
        break;
      case 'toast':
        this.alert.toast('Esto es una notificación', 'success' );
        break;
      default:
        break;
    }
  }

}
