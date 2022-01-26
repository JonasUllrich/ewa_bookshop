import { defineStore } from 'pinia'
import { TProduct, TCartItem, TStatusCode } from '@/types/ShopTypes'

export const useStore = defineStore('shop', {
  state: () => ({
    products: [] as TProduct[],
    shoppingCart: [] as TCartItem[],
    shoppingCartPreview: false,
    searchvalue: '',
  }),
  getters: {
    getProducts(): TProduct[] {
      return this.products.filter(
        (e) => e.Produkttitel.toLowerCase().indexOf(this.searchvalue.toLowerCase()) > -1
      )
    },
    getItemsForPayment(): any {
      const c = this.shoppingCart.map((book) => {
        return {
          name: book.Produkttitel,
          description: 'xwdwedwed',
          images: [[book.LinkGrafik]],
          amount: parseInt(`${parseFloat(book.PreisBrutto) * 100}`),
          currency: 'eur',
          quantity: book.quantity,
        }
      })
      console.log(c)
      return c
    },
    cartItemQuantity(): number {
      return this.shoppingCart.length
    },
    getCartItems(): TCartItem[] {
      const c = this.shoppingCart.map((i) => {
        return {
          ...this.products.filter((e) => i.ProduktID == e.ProduktID)[0],
          quantity: i.quantity,
        }
      })
      console.log(c)
      return c
    },
    getShoppingCartPreview(): boolean {
      return this.shoppingCartPreview
    },
    getCartTotalPrice(): number {
      let price = 0
      for (let index = 0; index < this.shoppingCart.length; index++) {
        const element = this.shoppingCart[index]
        price += parseFloat(element.PreisBrutto) * element.quantity
        console.log(parseFloat(element.PreisBrutto), element.quantity)
      }
      return price
    },
  },
  actions: {
    setProducts(items: TProduct[]) {
      this.products = items
    },
    checkProductIfAvailable(itemid: number): boolean {
      return (
        this.getCartQuantityOfProduct(itemid) <
        (this.shoppingCart.find((e) => itemid == e.ProduktID)?.Lagerbestand || 0)
      )
    },

    addProductToCart(item: TProduct): TStatusCode {
      if (this.shoppingCart.filter((e) => item.ProduktID == e.ProduktID).length > 0) {
        for (let index = 0; index < this.shoppingCart.length; index++) {
          const element = this.shoppingCart[index]
          if (element.ProduktID != item.ProduktID) continue
          else if (this.shoppingCart[index].Lagerbestand > this.shoppingCart[index].quantity) {
            this.shoppingCart[index].quantity++
            return TStatusCode.success
          } else {
            return TStatusCode.error
          }
        }
      } else {
        if (item.Lagerbestand > 0) {
          this.shoppingCart.push({ ...item, quantity: 1 })
          return TStatusCode.success
        } else {
          return TStatusCode.error
        }
      }
      return TStatusCode.error
    },
    setProductquantity(item: TProduct, quantity: number) {
      // if (this.products.filter((e) => item.ProduktID == e.ProduktID).length > 0)
      for (let index = 0; index < this.shoppingCart.length; index++) {
        const element = this.shoppingCart[index]
        if (element.ProduktID != item.ProduktID) continue
        else if (quantity == 0) this.shoppingCart.splice(index, 1)
        else this.shoppingCart[index].quantity == quantity
      }
      // else this.shoppingCart.push({ ...item, quantity: 1 })
    },
    incProductquantity(itemid: number): TStatusCode {
      // if (this.products.filter((e) => item.ProduktID == e.ProduktID).length > 0)
      for (let index = 0; index < this.shoppingCart.length; index++) {
        const element = this.shoppingCart[index]
        if (element.ProduktID != itemid) continue
        else if (this.checkProductIfAvailable(itemid)) {
          this.shoppingCart[index].quantity++
          return TStatusCode.success
        }
      }
      return TStatusCode.error
      // else this.shoppingCart.push({ ...item, quantity: 1 })
    },
    decProductquantity(itemid: number): TStatusCode {
      // if (this.products.filter((e) => item.ProduktID == e.ProduktID).length > 0)
      for (let index = 0; index < this.shoppingCart.length; index++) {
        const element = this.shoppingCart[index]
        if (element.ProduktID != itemid) {
          continue
        } else if (element.quantity == 0) {
          this.shoppingCart.splice(index, 1)
        } else {
          this.shoppingCart[index].quantity--
          return TStatusCode.success
        }
      }
      return TStatusCode.error

      // else this.shoppingCart.push({ ...item, quantity: 1 })
    },
    removeProductFromCart(itemid: number) {
      // if (this.products.filter((e) => item.ProduktID == e.ProduktID).length > 0)
      for (let index = 0; index < this.shoppingCart.length; index++) {
        const element = this.shoppingCart[index]
        if (element.ProduktID != itemid) continue
        this.shoppingCart.splice(index, 1)
      }
      // else this.shoppingCart.push({ ...item, quantity: 1 })
    },
    toggleShoppingCartPreview() {
      console.log('togge')
      this.shoppingCartPreview = !this.shoppingCartPreview
    },
    getCartQuantityOfProduct(itemid: number): number {
      return this.shoppingCart.find((e) => itemid == e.ProduktID)?.quantity || 0
    },
  },
})
