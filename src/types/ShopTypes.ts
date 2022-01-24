export interface TProduct {
  ProduktID: number
  Produkttitel: string
  PreisBrutto: string
  LinkGrafik: string
  Produktcode: string
  Autorname: string
  Lagerbestand: number
}

export interface TCartItem {
  ProduktID: number
  Produkttitel: string
  PreisBrutto: string
  LinkGrafik: string
  Produktcode: string
  Autorname: string
  Lagerbestand: number
  quantity: number
}

export enum TStatusCode {
  success = 1,
  error,
}
