interface NeoMxMaeTels {

  numeroLada: string;
  numero: string;
  numeroExtension: string;
  flgOrigen: string;
  codigoImagen: string;
  descrip: string;

}

export class RedesSocialesO {

  public idRde: string;
  public txtDescRdes: string;

  constructor() { }

}

interface GeolocalizacionClienteO {

  codTipoDomicilio: number;
  geoDomicilio: string;

}

interface TncNominaO {

  numBucCte: number;
  idProd: number;
  dscProd: string;
  idSubProd: number;
  dscSubProd: string;
  fchAlt: any;
  fchInfo: any;
  fchDsp: any;
  idBncDsp: number;
  dscBncDsp: string;
  nomEmpresa: string;
  numCntrEnlc: any;
  numMntDsp: any;
  numCntr: any;
  numBucEmp: number;

}

interface TncCaptacionO {

  numSalPnt: any;
  numSalProm: any;
  fchAlt: any;
  fchCan: any;
  numCc: number;
  fchInfo: any;
  txtPlz: string;
  flgStat: number;
  txtMnd: string;
  fchVenc: any;
  txtPlnTar: string;

}

interface TncCreditoO {

  numBucCte: number;
  idProd: number;
  dscProd: string;
  idSubProd: number;
  dscSubProd: string;
  fchInfo: any;
  fchAltCont: any;
  numMonProxPagSint: any;
  numMonProxPmin: any;
  numCapDeu: any;
  numTasa: string;
  numSalProm: any;
  txtPlz: string;
  numCc: number;
  fchProxPag: any;
  numTdc: any;
  numMonCnce: any;
  fchCanc: any;
  codOfiAct: string;
  flgStat: number;
  numSalPnt: any;
  numCntr: any;

}

interface BeanTenenciaLealtad {

  idProd: string;
  idSubProd: string;
  fchAlt: string;
  numTdc: string;
  txtNomTdc: string;
  fchCrte: string;
  numTtalPtosCrt: string;
  fchInfo: string;
  catUltRed: string;
  fchUltRed: string;
  catRedPts: string;
  ptosExp: string;
  txtNumSoc: string;
  fchVenci: string;
  numPtosVenci: string;
  txtDescTpoProg: string;
  txtDesStus: string;
  numPtsRdm: string;
  numDiasPeri: string;
  numPtsBns: string;
  numPtosCons: string;

}

interface TncLealtadO {

  programasLealtad: Array<BeanTenenciaLealtad>;

}

abstract class TenenciaO {

  public numBucCte: number;
  public idProd: number;
  public idSubProd: number;
  public numCntr: any;
  public dscProd: string;
  public dscSubProd: string;
  public tipoPago: string;

}

class TncSegurosO extends TenenciaO {

  public numCta: number;
  public numPrmAnl: any;
  public fchVenc: any;

  constructor() {
    super();
  }

}

interface TncDomicializacionO {

  numBucCte: number;
  idProd: number;
  idSubProd: number;
  idTipoDom: number;
  numCta: number;
  fchDmcl: any;
  txtNomEmp: string;
  dscProd: string;
  dscSubProd: string;
  dscDom: string;
  fchUltCob: any;
  numImpUc: number;

}

interface TncPaqueteO {

  flgStat: number;
  fchAlt: any;
  fchCan: any;
  idOrgPaq: any;

}

interface OperacionesDTO {

  idOperacion: string;
  nombreOperacion: string;
  usoOperacion: string;

}

interface CanalesO {

  idCanal: string;
  nombreCanal: string;
  totalCanal: string;
  color: string;
  flgAfiliado: string;
  lstOperacions: Array<OperacionesDTO>;

}

abstract class SaldosDTO {

  public saldoMesUno: any;
  public saldoMesDos: any;
  public saldoMesTres: any;
  public nombreMesUno: string;
  public nombreMesDos: string;
  public nombreMesTres: string;

  constructor() { }

}

class TenenciaDTO extends SaldosDTO {

  public producto: string;
  public subProducto: string;
  public numContrato: string;
  public saldo: string;
  public fechaInfo: string;
  public descripcionProducto: string;

  constructor() {
    super();
  }

}

class CaptacionDTO extends TenenciaDTO {

  public subFamila: string;
  public saldoPromedoMesUno: any;
  public saldoPromedoMesDos: any;
  public saldoPromedoMesTres: any;
  public codigoSucursal: string;

  constructor() {
    super();
  }

}

class CreditoDTO extends TenenciaDTO {

  public montoConcedido: string;
  public saldoPuntual: string;
  public montoPagoMinimo: string;
  public montoPagoMinimoInt: string;
  public fechaProxPago: string;
  public tasa: string;
  public numTdc: string;
  public subFamila: string;

  constructor() {
    super();
  }

}

class NominaDTO extends TenenciaDTO {

  public bancaDispersora: string;
  public subFamila: string;
  public empresaDsp: string;
  public fechaUltimaDsp: string;
  public montoUltimoDsp: any;
  public idTipDisp: string;

  constructor() {
    super();
  }

}

interface PosicionConsolidadaGrlDTO {

  buc: string;
  listaCaptacion: Array<CaptacionDTO>;
  listaCredito: Array<CreditoDTO>;
  listaNomina: Array<NominaDTO>;
  saldoMesUno: any;
  saldoMesDos: any;
  saldoMesTres: any;

}

interface MarkBiometricoDTO {

  flgBio: number;
  descBioMtrcs: string;
  fchStsMtrcs: string;

}

interface MarkPersonalDTO {

  nomEjec: string;
  clvOficial: string;

}

export class CustomerModel {

  public buc: number;
  public horarioCont: string;
  public contactabilidad: string;
  public fechNac: string;
  public fechAlta: string;
  public fechFirma: string;
  public tipoCliente: string;
  public tipoClienteBD: string;
  public tipoClienteWS: string;
  public tipoClienteNominaWS: string;
  public universidad: string;
  public desUniversidad: string;
  public periodo: string;
  public carrera: string;
  public actComercial: string;
  public idActComerDb: string;
  public actComerDb: string;
  public ocupacion: string;
  public idOcupDb: string;
  public ocupDb: string;
  public email: string;
  public expediente: string;
  public segmento: string;
  public desSegmento: string;
  public nombre: string;
  public apellido1: string;
  public apellido2: string;
  public neoMxMaeTelsCtesSemCasa: NeoMxMaeTels;
  public neoMxMaeTelsCtesSemCelular: NeoMxMaeTels;
  public neoMxMaeTelsCtesSemOtro: NeoMxMaeTels;
  public callCasa: string;
  public colCasa: string;
  public locCasa: string;
  public ciudCasa: string;
  public cpCasa: string;
  public edoCasa: string;
  public cordCasa: string;
  public callOfi: string;
  public colOfi: string;
  public locOfi: string;
  public ciudOfi: string;
  public cpOfi: string;
  public edoOfi: string;
  public cordOfi: string;
  public codEjecutivo: string;
  public ejecutivo: string;
  public sucursal: string;
  public sucursalOp: string;
  public desSucursal: string;
  public desSucursalOp: string;
  public codSucRh: string;
  public desSucRh: string;
  public latitud: string;
  public longitud: string;
  public toolTipNomina: string;
  public toolTipFechaNomina: string;
  public toolTipMonto: string;
  public toolTipNomEmp: string;
  public imgFirma: string;
  public numCuenta: string;
  public codActEspecifica: string;
  public codActGenerica: string;
  public codOcupacion: string;
  public codError: string;
  public estr: number;
  public indicador: number;
  public txtDesSat: string;
  public satis: number;
  public mbb: number;
  public dscSta: string;
  public cNuevo: number;
  public favorito: number;
  public idCteMultCnl: number;
  public txtCanal: string;
  public nombreCompleto: string;
  public lstRedes: Array<RedesSocialesO>;
  public lstGeolocalizacion: Array<GeolocalizacionClienteO>;
  public tncNomina: Array<TncNominaO>;
  public tncCaptacion: Array<TncCaptacionO>;
  public tncCredito: Array<TncCreditoO>;
  public tncLealtad: TncLealtadO;
  public tncSeguros: Array<TncSegurosO>;
  public tncDomiciliacion: Array<TncDomicializacionO>;
  public tncPaquetes: Array<TncPaqueteO>;
  public tncCanales: Array<CanalesO>;
  public objPosicionConsolidadaDTO: PosicionConsolidadaGrlDTO;
  public geolocalizacion: string;
  public codStaCte: number;
  public descStaCte: string;
  public banderaTenencia: number;
  public banderaDepositosRecurrentes: number;
  public descripcionDepositosRecurrentes: string;
  public biometrico: MarkBiometricoDTO;
  public marcaPersonal: MarkPersonalDTO;
  public noMolestar: string;
  public sprTkn: boolean;

  constructor() { }

}
