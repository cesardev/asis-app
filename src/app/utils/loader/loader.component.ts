import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { AuthService } from '../../services/app/auth/auth.service';
import { LoaderState } from '../../models/app/app.model';
import { debounce, takeWhile } from 'rxjs/operators';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  public show = false;
  private subscription: Subscription;

  constructor( private appService: AuthService ) { }

  ngOnInit() {
    this.subscription = this.appService.loaderState
      .pipe(
        debounce( () => timer(200)),
        takeWhile( res => res.show <= true )
      )
      .subscribe((state: LoaderState) => { this.show = state.show; });
  }

  ngOnDestroy() { this.subscription.unsubscribe(); }
}
