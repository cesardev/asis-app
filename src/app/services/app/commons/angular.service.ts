import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AngularService {

  private TYPED_ARRAY_REGEXP = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/;
  private stackSource = [];
  private stackDest = [];

  constructor() { }

  public isNumber(value: any): boolean {
    // if ( typeof value === 'number' ) {
    //   return true;
    // } else {
    //   return false;
    // }

    return ( typeof value === 'number' ) ? true : false;
  }

  public isTypedArray(value: any) {
    return value && this.isNumber(value.length) && this.TYPED_ARRAY_REGEXP.test(toString.call(value));
  }

  public isArrayBuffer(obj: any) {
    return toString.call(obj) === '[object ArrayBuffer]';
  }

  public isUndefined(value: any) {return typeof value === 'undefined'; }

  public isObject(value: any) {  return value !== null && typeof value === 'object'; }

  public isBlankObject(value: any) {
    return value !== null && typeof value === 'object' && !Object.getPrototypeOf(value);
  }

  public isFunction(value: any) { return typeof value === 'function'; }

  public setHashKey(obj: any, h: any) {
    if ( h ) {
      obj.$$hashKey = h;
    } else {
      delete obj.$$hashKey;
    }
  }

  private isWindow(obj: any) { return obj && obj.window === obj; }

  private isScope(obj: any) { return obj && obj.$evalAsync && obj.$watch; }

  private copyRecurse(source: any, destination: any) {

    const h = destination.$$hashKey;

    if (Array.isArray(source)) {
      for (let i = 0, ii = source.length; i < ii; i++) {
        destination.push(this.copyElement(source[i]));
      }
    } else if (this.isBlankObject(source)) {
      for (const key of Object.keys(source)) {
        destination[key] = this.copyElement(source[key]);
      }
    } else if (source && typeof source.hasOwnProperty === 'function') {
      for (const key of Object.keys(source)) {
        destination[key] = this.copyElement(source[key]);
      }
    } else {
      for (const key of Object.keys(source)) {
        destination[key] = this.copyElement(source[key]);
      }
    }
    this.setHashKey(destination, h);
    return destination;
  }

  private copyElement(source: any) {

    if (!this.isObject(source)) {
      return source;
    }

    const index = this.stackSource.indexOf(source);

    if (index !== -1) {
      return this.stackDest[index];
    }

    if (this.isWindow(source) || this.isScope(source)) {
      throw console.log('Cant copy! Making copies of Window or Scope instances is not supported.');
    }

    let needsRecurse = false;
    let destination = this.copyType(source);

    if (destination === undefined) {
      destination = Array.isArray(source) ? [] : Object.create(Object.getPrototypeOf(source));
      needsRecurse = true;
    }

    this.stackSource.push(source);
    this.stackDest.push(destination);

    return needsRecurse
      ? this.copyRecurse(source, destination)
      : destination;
  }

  private copyType = ( source: any ) => {

    switch (toString.call(source)) {
      case '[object Int8Array]':
      case '[object Int16Array]':
      case '[object Int32Array]':
      case '[object Float32Array]':
      case '[object Float64Array]':
      case '[object Uint8Array]':
      case '[object Uint8ClampedArray]':
      case '[object Uint16Array]':
      case '[object Uint32Array]':
        return new source.constructor(this.copyElement(source.buffer), source.byteOffset, source.length);

      case '[object ArrayBuffer]':
        if (!source.slice) {
          const copied = new ArrayBuffer(source.byteLength);
          new Uint8Array(copied).set(new Uint8Array(source));
          return copied;
        }
        return source.slice(0);

      case '[object Boolean]':
      case '[object Number]':
      case '[object String]':
      case '[object Date]':
        return new source.constructor(source.valueOf());

      case '[object RegExp]':
        const re = new RegExp(source.source, source.toString().match(/[^\/]*$/)[0]);
        re.lastIndex = source.lastIndex;
        return re;

      case '[object Blob]':
        return new source.constructor([source], {type: source.type});
    }

    if (this.isFunction(source.cloneNode)) {
      return source.cloneNode(true);
    }
  }

  public copy(source: any, destination?: any) {

    if (destination) {
      if (this.isTypedArray(destination) || this.isArrayBuffer(destination)) {
        throw console.log('No se puede copiar! El destino de TypedArray no puede ser mutado.');
      }
      if (source === destination) {
        throw console.log('No es posible copiar origen y destino idénticos.');
      }

      if (Array.isArray(destination)) {
        destination.length = 0;
      } else {
        destination.forEach((value: any, key: any) => {
          if (key !== '$$hashKey') {
            delete destination[key];
          }
        });
      }

      this.stackSource.push(source);
      this.stackDest.push(destination);
      return this.copyRecurse(source, destination);
    }

    return this.copyElement(source);
  }
}
