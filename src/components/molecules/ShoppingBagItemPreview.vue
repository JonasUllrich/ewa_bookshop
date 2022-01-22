<template>
  <li class="py-6 flex">
    <div class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
      <img :src="product.LinkGrafik" class="w-full h-full object-center object-cover" />
    </div>

    <div class="ml-4 flex-1 flex flex-col">
      <div>
        <div class="flex justify-between text-base font-medium text-gray-900">
          <h3>
            <a :href="product.LinkGrafik">
              {{ product.Produkttitel }}
            </a>
          </h3>
          <p class="ml-4 font-bold text-lg">{{ product.PreisBrutto }} €</p>
        </div>
        <p class="mt-1 text-sm text-gray-500">
          {{ product.Produktcode }}
        </p>
        <div class="mx-1 flex w-full justify-end pb-4 items-center gap-2">
          <PlusSmIcon
            class="
              w-8
              h-8
              text-gray-400
              border border-gray-300
              text-xs
              p-1
              rounded-full
              hover:bg-gray-100
            "
            @click="shopStore.incProductquantity(product.ProduktID)"
          />
          <input
            :value="product.quantity"
            type="text"
            min="0"
            name="count"
            class="
              shadow-sm
              focus:ring-indigo-500 focus:border-indigo-500
              block
              p-2
              text-center
              w-12
              sm:text-sm
              border-gray-300
              rounded-md
            "
            readonly
            placeholder="Anzahl"
          />
          <MinusSmIcon
            class="
              w-8
              h-8
              text-gray-400
              border border-gray-300
              text-xs
              p-1
              rounded-full
              hover:bg-gray-100
            "
            @click="shopStore.decProductquantity(product.ProduktID)"
          />
        </div>
      </div>
      <div class="flex-1 flex items-end justify-between text-sm">
        <div class="flex justify-end w-full">
          <button
            type="button"
            class="font-medium text-indigo-600 hover:text-indigo-500"
            @click="shopStore.removeProductFromCart(product.ProduktID)"
          >
            Entfernen
          </button>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
// import { computed } from 'vue'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/vue/solid'
// import { TProduct } from '@/types/ShopTypes'
import { useStore } from '@/stores/shop'

const shopStore = useStore()

defineProps({
  product: {
    type: Object,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: {
      ProduktID: 1,
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
