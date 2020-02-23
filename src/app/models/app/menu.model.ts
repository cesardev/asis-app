export class MenuModel {

  public idMod: any;
  public idPadre: any;
  public flgActv: any;
  public idNivel: any;
  public txtDescMod: string;
  public txtUrlImg: string;
  public txtUrlNav: string;
  public codImgn: string;
  public txtCodUrl: string;
  public tpoCodUrl: string;
  public mascCodUrl: string;
  public flgHeader: any;
  public txtMascTmpl: string;
  public subMenus: MenuModel[];

  constructor() { }

}

export class MenuHeaderModel {
  public idMenu: number;
  public idPadre: number;
  public cdMenu: string;
  public nbMenu: string;
  public nbUri: string;
  public txUrl: string;

  constructor() { }
}
