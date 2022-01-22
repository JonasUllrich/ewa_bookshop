import { defineStore } from 'pinia'
import { TProduct, TCartItem } from '@/types/ShopTypes'

export const useStore = defineStore('shop', {
  state: () => ({
    products: [] as TProduct[],
    shoppingCart: [] as TCartItem[],
  }),
  getters: {
    getProducts(): TProduct[] {
      return this.products
    },
    cartItemCount(): number {
      return this.shoppingCart.length
    },
    getCartItems(): TCartItem[] {
      const c = this.shoppingCart.map((i) => {
        return { ...this.products.filter((e) => i.id == e.id)[0], count: i.count }
      })
      console.log(c)
      return c
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
          else this.shoppingCart[index].count++
        }
      } else {
        this.shoppingCart.push({ ...item, count: 1 })
      }
    },
    setProductCount(item: TProduct, count: number) {
      // if (this.products.filter((e) => item.id == e.id).length > 0)
      for (let index = 0; index < this.shoppingCart.length; index++) {
        const element = this.shoppingCart[index]
        if (element.id != item.id) continue
        else if (count == 0) this.shoppingCart.splice(index, 1)
        else this.shoppingCart[index].count == count
      }
      // else this.shoppingCart.push({ ...item, count: 1 })
    },
  },
})
