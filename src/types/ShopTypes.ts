export interface TProduct {
  ProduktID: number
  Produkttitel: string
  PreisBrutto: string
  LinkGrafik: string
  Produktcode: string
}

export interface TCartItem {
  ProduktID: number
  Produkttitel: string
  PreisBrutto: string
  LinkGrafik: string
  Produktcode: string
  quantity: number
}
