
import { Component, Input, ViewChild } from '@angular/core';
import { MenuModel } from 'app/models/app/menu.model';
import { MatMenu } from '@angular/material';

@Component({
  selector: 'menu-item',
  template: `
    <mat-menu #subMenu="matMenu" [overlapTrigger]="false"
      yPosition="below" xPosition="after">

      <h4 class="title-menu">
        {{ title }}
      </h4>

      <div *ngFor="let submenu of items">

        <div *ngIf="submenu.subMenus && submenu.subMenus.length > 0">
          <button mat-menu-item [matMenuTriggerFor]="navs.childMenu">
            <span>{{ submenu.txtDescMod }}</span>
          </button>
          <menu-item #navs [items]="submenu.subMenus" [title]="submenu.txtDescMod"></menu-item>
        </div>

        <div *ngIf="!submenu.subMenus || submenu.subMenus.length === 0">
          <a mat-menu-item
            *ngIf="submenu.txtUrlNav !== ''"
            [href]="submenu.txtUrlNav" target="_blank">
            {{ submenu.txtDescMod }}
          </a>
          <span mat-menu-item
            *ngIf="submenu.txtUrlNav === ''">
            {{ submenu.txtDescMod }}
          </span>
        </div>
      </div>
    </mat-menu>
  `,
  styles: [
    `.title-menu {
      font-size: 1rem;
      margin-bottom: 0;
      padding: 0.5rem;
      text-align: center;
      font-weight: 600;
    }`
  ],
})
export class MenuItemComponent {

  @Input() items: MenuModel[];
  @Input() title: string;
  @ViewChild(MatMenu, { static: true }) public childMenu: any;

  constructor() { }

}
