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
        <h3 class="text-md font-medium text-gray-900">{{ product.Produkttitel }}</h3>
        <p class="mt-1 text-sm text-gray-500">Autor: {{ product.Autorname }}</p>
        <p class="mt-1 text-sm text-gray-500">ISBN: {{ product.Produktcode }}</p>
        <!-- <p class="mt-1 text-sm text-red-700">{{ hint ? 'Ausverkauft!' : '' }}</p> -->
        <p
          class="
            mt-1
            text-sm text-transparent
            bg-clip-text bg-gradient-to-r
            from-[#5338c9]
            via-[#c046e5]
            to-[#e546d0]
            font-bold
          "
        >
          {{
            product.Lagerbestand - shopStore.getCartQuantityOfProduct(product.ProduktID) > 0
              ? `Noch ${
                  product.Lagerbestand - shopStore.getCartQuantityOfProduct(product.ProduktID)
                } verfügbar`
              : 'Nicht mehr verfügbar'
          }}
          {{ hint ? ' - Ausverkauft!' : '' }}
        </p>
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
        <p class="relative text-lg font-semibold text-white">{{ product.PreisBrutto }} €</p>
      </div>
    </div>
    <div class="mt-6">
      <button @click="addToCart(product as TProduct)">
        <a
          href="#_"
          class="
            relative
            p-0.5
            inline-flex
            items-center
            justify-center
            text-sm
            font-bold
            overflow-hidden
            group
            rounded-md
          "
        >
          <span
            class="
              w-full
              h-full
              bg-gradient-to-br
              from-[#4f46e5]
              via-[#9e54ff]
              to-[#bf33ea]
              group-hover:from-[#4f46e5] group-hover:via-[#9e54ff] group-hover:to-[#bf33ea]
              absolute
            "
          ></span>
          <span
            class="
              relative
              px-6
              py-3
              transition-all
              ease-out
              bg-white
              rounded-md
              group-hover:bg-opacity-0
              duration-400
            "
          >
            <span class="relative">Zum Warenkorb hinzufügen</span>
          </span>
        </a>
        <span class="sr-only">, {{ product.Produkttitel }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue'
import { useStore } from '@/stores/shop'
// import { TProduct } from '@/types/ShopTypes'
// import { TProduct } from '@/types/ShopTypes.ts'
interface TProduct {
  ProduktID: number
  Produkttitel: string
  PreisBrutto: string
  LinkGrafik: string
  Autorname: string
  Produktcode: string
  Lagerbestand: number
}

enum TStatusCode {
  success = 1,
  error,
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
      Autorname: 'string',
      Lagerbestand: 2,
      LinkGrafik:
        'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    },
  },
})
const hint = ref(false)

const addToCart = (item: TProduct) => {
  if (shopStore.addProductToCart(item) == TStatusCode.success) {
    return
  } else {
    hint.value = true
  }
}
</script>
