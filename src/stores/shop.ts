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
  },
  actions: {
    setProducts(items: TProduct[]) {
      this.products = items
    },
  },
})
