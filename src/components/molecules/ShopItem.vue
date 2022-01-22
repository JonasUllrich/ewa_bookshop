<template>
  <div>
    <div class="relative">
      <div class="relative w-full h-72 rounded-lg overflow-hidden">
        <img
          :src="product.imageSrc"
          :alt="product.imageAlt"
          class="w-full h-full object-center object-cover"
        />
      </div>
      <div class="relative mt-4">
        <h3 class="text-sm font-medium text-gray-900">{{ product.name }}</h3>
        <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
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
        <p class="relative text-lg font-semibold text-white">{{ product.price }}</p>
      </div>
    </div>
    <div class="mt-6">
      <a
        :href="product.href"
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
      >
        Add to bag
        <span class="sr-only">, {{ product.name }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { computed } from 'vue'
defineProps({
  product: {
    type: Object,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: {
      id: 1,
      name: 'Throwback Hip Bag',
      href: '#',
      color: 'Salmon',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
      imageAlt:
        'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
  },
})
</script>
