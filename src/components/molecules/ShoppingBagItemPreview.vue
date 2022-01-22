<template>
  <li class="py-6 flex items-center">
    <img
      :src="product.imageSrc"
      :alt="product.imageAlt"
      class="flex-none w-16 h-16 rounded-md border border-gray-200"
    />
    <div class="ml-4 flex-auto">
      <h3 class="font-medium text-gray-900">
        <a :href="product.href">{{ product.name }}</a>
      </h3>
      <p class="text-gray-500">{{ product.color }}</p>
    </div>
  </li>
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
