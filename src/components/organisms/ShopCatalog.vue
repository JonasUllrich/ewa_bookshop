<template>
  <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 bg-[#ffffff]">
    <h2
      class="
        text-xl
        font-bold
        text-transparent
        bg-clip-text bg-gradient-to-r
        from-indigo-600
        to-purple-600
      "
    >
      Unsere Bücher
    </h2>
    <div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      <ShopItem
        v-for="product in shopStore.getProducts"
        :key="product.ProduktID"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ShopItem from '@/components/molecules/ShopItem.vue'
// import { TProduct } from '@/types/ShopTypes'
import { useStore } from '@/stores/shop'
// import { storeToRefs } from 'pinia'

const shopStore = useStore()

// import { computed } from 'vue'
// defineProps({
//   product: {
//     required: true,
//     type: Object,
//     // eslint-disable-next-line vue/require-valid-default-prop
//     default: {},
//   },
// })
// const products1 = [
//   {
//     ProduktID: 1,
//     name: 'Throwback Hip Bag',
//     href: '#',
//     color: 'Salmon',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
//     imageAlt:
//       'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
//   },
//   {
//     ProduktID: 2,
//     name: 'Throwback Hip Bag',
//     href: '#',
//     color: 'Salmon',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
//     imageAlt:
//       'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
//   },
//   {
//     ProduktID: 3,
//     name: 'Throwback Hip Bag',
//     href: '#',
//     color: 'Salmon',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
//     imageAlt:
//       'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
//   },
// ]
</script>
