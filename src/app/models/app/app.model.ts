export interface LoaderState { show: boolean; }

export class AppModel {

  public isHeaderFixed: number;
  public isSidebarFixed: number;
  public isFooterFixed: number;
  public isSidebarOpen: number;
  public sidebarType: string;
  public sidebarPos: string;
  public theme: string;
  public pixelsBase: string;
  public typeFormField: string;

  constructor(
    isHeaderFixed: number,
    isSidebarFixed: number,
    isFooterFixed: number,
    isSidebarOpen: number,
    sidebarType: string,
    sidebarPos: string,
    theme: string,
    pixelsBase: string,
    typeFormField: string
  ) {
    this.isHeaderFixed = isHeaderFixed;
    this.isSidebarFixed = isSidebarFixed;
    this.isFooterFixed = isFooterFixed;
    this.isSidebarOpen = isSidebarOpen;
    this.sidebarType = sidebarType;
    this.sidebarPos = sidebarPos;
    this.theme = theme;
    this.pixelsBase = pixelsBase;
    this.typeFormField = typeFormField;
  }

}
