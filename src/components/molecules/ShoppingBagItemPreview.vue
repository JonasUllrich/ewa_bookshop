<template>
  <li class="py-6 flex">
    <div class="flex-shrink-0 w-24 h-24 border border-white rounded-md overflow-hidden">
      <img :src="product.LinkGrafik" class="w-full h-full object-center object-cover" />
    </div>

    <div class="ml-4 flex-1 flex flex-col">
      <div>
        <div class="flex justify-between text-base font-medium text-white">
          <h3>
            <a :href="product.LinkGrafik">
              {{ product.Produkttitel }}
            </a>
          </h3>
          <p class="ml-4 font-bold text-lg">{{ product.PreisBrutto }} €</p>
        </div>
        <p class="mt-1 text-sm text-white">
          {{ product.Produktcode }}
        </p>
        <div class="mx-1 flex w-full justify-end pb-4 items-center gap-2">
          <PlusSmIcon
            class="
              w-8
              h-8
              text-white
              border border-white
              text-xs
              p-1
              rounded-full
              hover:bg-indigo-600
            "
            :class="[hint ? 'hidden' : '']"
            @click="addProduct(product.ProduktID)"
          />
          <input
            :value="product.quantity"
            type="text"
            min="0"
            name="count"
            class="
              shadow-sm
              focus:ring-white focus:border-white
              block
              p-2
              text-center
              w-12
              sm:text-sm
              border-gray-200
              bg-[#191720]
              text-white
              rounded-md
            "
            readonly
            placeholder="Anzahl"
          />
          <MinusSmIcon
            class="
              w-8
              h-8
              text-white
              border border-white
              text-xs
              p-1
              rounded-full
              hover:bg-pink-500
            "
            @click="rmProduct(product.ProduktID)"
          />
        </div>
      </div>
      <div class="flex-1 flex items-end justify-between text-sm">
        <div class="flex justify-end w-full">
          <button
            type="button"
            class="font-medium text-indigo-500 hover:text-indigo-400"
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
import { ref } from 'vue'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/vue/solid'
// import { TProduct } from '@/types/ShopTypes'
import { useStore } from '@/stores/shop'
import { TStatusCode } from '@/types/ShopTypes'

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
const hint = ref(false)
const addProduct = (productId: number) => {
  if (shopStore.incProductquantity(productId) == TStatusCode.error) hint.value = true
}
const rmProduct = (productId: number) => {
  if (shopStore.decProductquantity(productId) == TStatusCode.success) hint.value = false
}
</script>
