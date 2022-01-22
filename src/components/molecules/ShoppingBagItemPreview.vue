<template>
  <li class="py-6 flex items-center">
    <img :src="product.imageSrc" class="flex-none w-16 h-16 rounded-md border border-gray-200" />
    <div class="ml-4 flex-auto">
      <h3 class="font-medium text-gray-900">
        <a :href="product.href">{{ product.name }}</a>
      </h3>
      <p class="text-gray-500">{{ product.author }}</p>
      <p class="text-gray-500">Quantity: {{ product.quantity }}</p>
      <button>+</button>
      <div class="mx-1 flex items-center gap-2">
        <PlusIcon class="w-6 h-6 bg-gray-100 p-2 rounded-full font-bold" />
        <input
          type="number"
          min="0"
          name="count"
          class="
            shadow-sm
            focus:ring-indigo-500 focus:border-indigo-500
            block
            p-2
            w-12
            bg-gray-100
            sm:text-sm
            border-gray-300
            rounded-md
          "
          placeholder="Anzahl"
        />
        <MinusIcon class="w-6 h-6 bg-gray-100 p-2 rounded-full font-bold" />
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
// import { computed } from 'vue'
import { MinusIcon, PlusIcon } from '@heroicons/vue/outline'
defineProps({
  product: {
    type: Object,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: {
      id: 1,
      name: 'Vue.js Buch',
      href: '#',
      author: 'Prof. Dr. Wiedemann',
      imageSrc:
        'https://shop.ksta.de/de/autothumb/1000x1000/Das_Gute_Nacht_Geschichten_Buch_vom_Koelner_Stadt_Anzeiger.jpg',
      quantity: 1,
    },
  },
})
</script>
