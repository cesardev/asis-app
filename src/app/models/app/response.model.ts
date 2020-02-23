class EstatusModel {
  public codigo: number;
  public mensaje: string;
}

export class ResponseModel {
  public estatus: EstatusModel;
  public resultado: any;
}
