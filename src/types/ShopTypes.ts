export interface TProduct {
  id: number
  name: string
  price: number
  href: string
  color: string
  imageSrc: string
  imageAlt: string
}

export interface TCartItem {
  id: number
  name: string
  price: number
  href: string
  color: string
  imageSrc: string
  imageAlt: string
  count: number
}
