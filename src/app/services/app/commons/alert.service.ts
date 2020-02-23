import { Injectable } from '@angular/core';
import { AngularService } from './angular.service';
import Swal from 'sweetalert2';


@Injectable({ providedIn: 'root' })
export class AlertService {

  constructor(private angular: AngularService) { }

  public success( title: string, msg?: any, method?: () => void ) {
    this.viewAlert(title, 'success', msg, method);
  }

  public info( title: string, msg?: any, method?: () => void ) {
    this.viewAlert(title, 'info', msg, method);
  }

  public warning( title: string, msg?: any, method?: () => void ) {
    this.viewAlert(title, 'warning', msg, method);
  }

  public error( title: string, msg?: any, method?: () => void ) {
    this.viewAlert(title, 'error', msg, method);
  }

  public viewAlert( title: string, type: any, msg?: any, method?: () => void ) {

    const fakeMethod = () => { return; };

    if (typeof msg === 'function') { method = msg; }

    Swal.mixin({
      customClass: {
        container: `custom-alert-container ${type}`,
        confirmButton: 'btn'
      },
      buttonsStyling: false,
    }).fire({
      title,
      text: typeof msg === 'function' ? '' : msg,
      icon: type,
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false,
      allowEscapeKey: false
    }).then(result => {
      if (result.value) {
        method ? method() : fakeMethod();
      }
    });
  }

  public question(question: string, msg?: any, methodSuccess?: () => void, methodCancel?: () => void) {

    const fakeMethod = () => { return; };

    if (typeof msg === 'function') {
      methodCancel = this.angular.copy(methodSuccess);
      methodSuccess = this.angular.copy(msg);
    }

    const mixinSwal = Swal.mixin({
      customClass: {
        container: 'custom-alert-container question',
        confirmButton: 'btn',
        cancelButton: 'btn'
      },
      buttonsStyling: false,
    });

    mixinSwal.fire({
      title: question,
      text: typeof msg === 'function' ? '' : msg,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
      allowOutsideClick: false,
      allowEscapeKey: false
    }).then((result) => {
      if (result.value) {
        methodSuccess ? methodSuccess() : fakeMethod();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        methodCancel ? methodCancel() : fakeMethod();
      }
    });
  }

  public toast(noti: string, type: any, position?: any, timer?: number, ) {

    let animate: string;

    if (typeof position === 'number') {
      timer = this.angular.copy(position);
      position = null;
    }

    // if ( type === 'error' ) { animate = 'a-5ms bounceIn'; }
    // else { animate = 'a-2ms fadeInDown'; }

    animate = type === 'error' ? 'a-5ms bounceIn' : 'a-2ms fadeInDown';

    Swal.mixin({
      toast: true,
      // Positions: 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end'
      position: position || 'top',
      animation: true,
      customClass: {
        container: 'custom-toast',
        popup: animate
      },
      buttonsStyling: false,
      showCloseButton: true,
      showConfirmButton: false,
      timer: timer || 3000
    }).fire({
      icon: type || 'info',
      title: noti
    });
  }
}
