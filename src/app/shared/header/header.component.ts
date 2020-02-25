import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'neo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public assets = environment.assets;
  public title = `Header it's work`;

  constructor( ) { }

  ngOnInit() { }

}
