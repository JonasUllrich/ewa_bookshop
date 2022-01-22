<template>
  <div>
    <div class="relative shadow-xs">
      <div class="relative w-full h-72 rounded-lg overflow-hidden">
        <div
          aria-hidden="true"
          class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
        />
        <img :src="product.LinkGrafik" class="w-full h-full object-center object-cover" />
      </div>
      <div class="relative mt-4">
        <h3 class="text-sm font-medium text-gray-900">{{ product.Produkttitel }}</h3>
        <p class="mt-1 text-sm text-gray-500">{{ product.Produktcode }}</p>
      </div>
      <div
        class="
          absolute
          top-0
          inset-x-0
          h-72
          rounded-lg
          p-4
          flex
          items-end
          justify-end
          overflow-hidden
        "
      >
        <p class="relative text-lg font-semibold text-white">{{ product.PreisBrutto }}</p>
      </div>
    </div>
    <div class="mt-6">
      <button
        class="
          relative
          flex
          bg-gray-100
          border border-transparent
          rounded-md
          py-2
          px-8
          items-center
          justify-center
          text-sm
          font-medium
          text-gray-900
          hover:bg-gray-200
        "
        @click="addToCart(product as TProduct)"
      >
        Add to bag
        <span class="sr-only">, {{ product.Produkttitel }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { useStore } from '@/stores/shop'
// import { TProduct } from '@/types/ShopTypes'
// import { TProduct } from '@/types/ShopTypes.ts'
interface TProduct {
  ProduktID: number
  Produkttitel: string
  PreisBrutto: number
  LinkGrafik: string
  Produktcode: string
}

const shopStore = useStore()

defineProps({
  product: {
    type: Object as PropType<TProduct>,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: {
      ProduktID: 1,
      Produkttitel: 'Throwback Hip Bag',
      PreisBrutto: 122.2,
      Produktcode: 'Salmon',
      LinkGrafik:
        'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    },
  },
})

const addToCart = (item: TProduct) => {
  shopStore.addProductToCart(item)
}
</script>
