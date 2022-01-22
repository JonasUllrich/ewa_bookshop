import { defineStore } from 'pinia'
import { TProduct, TCartItem } from '@/types/ShopTypes'

export const useStore = defineStore('shop', {
  state: () => ({
    products: [] as TProduct[],
    shoppingCart: [] as TCartItem[],
    shoppingCartPreview: false,
  }),
  getters: {
    getProducts(): TProduct[] {
      return this.products
    },
    cartItemQuantity(): number {
      return this.shoppingCart.length
    },
    getCartItems(): TCartItem[] {
      const c = this.shoppingCart.map((i) => {
        return { ...this.products.filter((e) => i.id == e.id)[0], quantity: i.quantity }
      })
      console.log(c)
      return c
    },
    getShoppingCartPreview(): boolean {
      return this.shoppingCartPreview
    },
  },
  actions: {
    setProducts(items: TProduct[]) {
      this.products = items
    },
    addProductToCart(item: TProduct) {
      if (this.shoppingCart.filter((e) => item.id == e.id).length > 0) {
        for (let index = 0; index < this.shoppingCart.length; index++) {
          const element = this.shoppingCart[index]
          if (element.id != item.id) continue
          else this.shoppingCart[index].quantity++
        }
      } else {
        this.shoppingCart.push({ ...item, quantity: 1 })
      }
    },
    setProductquantity(item: TProduct, quantity: number) {
      // if (this.products.filter((e) => item.id == e.id).length > 0)
      for (let index = 0; index < this.shoppingCart.length; index++) {
        const element = this.shoppingCart[index]
        if (element.id != item.id) continue
        else if (quantity == 0) this.shoppingCart.splice(index, 1)
        else this.shoppingCart[index].quantity == quantity
      }
      // else this.shoppingCart.push({ ...item, quantity: 1 })
    },
    incProductquantity(itemid: number) {
      // if (this.products.filter((e) => item.id == e.id).length > 0)
      for (let index = 0; index < this.shoppingCart.length; index++) {
        const element = this.shoppingCart[index]
        if (element.id != itemid) continue
        // else if (element.quantity == 0) this.shoppingCart.splice(index, 1)
        else this.shoppingCart[index].quantity++
      }
      // else this.shoppingCart.push({ ...item, quantity: 1 })
    },
    decProductquantity(itemid: number) {
      // if (this.products.filter((e) => item.id == e.id).length > 0)
      for (let index = 0; index < this.shoppingCart.length; index++) {
        const element = this.shoppingCart[index]
        if (element.id != itemid) continue
        else if (element.quantity == 0) this.shoppingCart.splice(index, 1)
        else this.shoppingCart[index].quantity--
      }
      // else this.shoppingCart.push({ ...item, quantity: 1 })
    },
    removeProductFromCart(itemid: number) {
      // if (this.products.filter((e) => item.id == e.id).length > 0)
      for (let index = 0; index < this.shoppingCart.length; index++) {
        const element = this.shoppingCart[index]
        if (element.id != itemid) continue
        this.shoppingCart.splice(index, 1)
      }
      // else this.shoppingCart.push({ ...item, quantity: 1 })
    },
    toggleShoppingCartPreview() {
      console.log('togge')

      this.shoppingCartPreview = !this.shoppingCartPreview
    },
  },
})
