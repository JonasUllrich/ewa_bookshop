<template>
  <TransitionRoot as="template" :show="shopStore.getShoppingCartPreview">
    <Dialog
      as="div"
      class="fixed inset-0 overflow-hidden"
      @close="shopStore.toggleShoppingCartPreview()"
    >
      <div class="absolute inset-0 overflow-hidden">
        <TransitionChild
          as="template"
          enter="ease-in-out duration-500"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in-out duration-500"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="absolute inset-0 bg-gray-600 bg-opacity-80 transition-opacity" />
        </TransitionChild>

        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <TransitionChild
            as="template"
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <div class="w-screen max-w-md">
              <div class="h-full flex flex-col bg-[#191720] shadow-xl overflow-y-scroll">
                <div class="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                  <div class="flex items-start justify-between">
                    <DialogTitle
                      class="
                        text-2xl text-transparent
                        bg-clip-text bg-gradient-to-r
                        from-indigo-600
                        to-purple-600
                        font-bold
                      "
                    >
                      Warenkorb
                    </DialogTitle>
                    <div class="ml-3 h-7 flex items-center">
                      <button
                        type="button"
                        class="-m-2 p-2 text-gray-300 hover:text-white"
                        @click="shopStore.toggleShoppingCartPreview()"
                      >
                        <span class="sr-only">Close panel</span>
                        <XIcon class="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div class="mt-8">
                    <div class="flow-root">
                      <ul role="list" class="-my-6 divide-y white">
                        <ShoppingBagItemPreview
                          v-for="product in shopStore.getCartItems"
                          :key="product.ProduktID"
                          :product="product"
                          class="py-6 flex"
                        />
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <div class="flex justify-between text-base font-medium text-white">
                    <p>Gesamtpreis</p>
                    <p>{{ shopStore.getCartTotalPrice.toFixed(2) }} €</p>
                  </div>
                  <div class="mt-6">
                    <!-- <form action="../stripe/stripe_redirect.php" method="POST"> -->
                    <form
                      ref="cartform"
                      action="https://iws107.informatik.htw-dresden.de/ewa/G04/stripe/stripe_redirect.php"
                      method="POST"
                    >
                      <!-- <button id="checkout-button" type="submit">Checkout</button> -->
                      <input id="custId" ref="cartItems" type="hidden" name="custId" />
                      <div class="flex justify-center items-center">
                        <button
                          type="button"
                          class="
                            relative
                            inline-flex
                            items-center
                            px-12
                            py-3
                            overflow-hidden
                            text-lg
                            font-medium
                            text-white
                            border-2 border-white
                            rounded-full
                            hover:text-white
                            group
                            hover:bg-gray-50
                          "
                          @click="buy()"
                        >
                          <span
                            class="
                              absolute
                              left-0
                              block
                              w-full
                              h-0
                              transition-all
                              bg-gradient-to-br
                              from-[#4f46e5]
                              via-[#9e54ff]
                              to-[#bf33ea]
                              group-hover:from-[#4f46e5]
                              group-hover:via-[#9e54ff]
                              group-hover:to-[#bf33ea]
                              opacity-100
                              group-hover:h-full
                              top-1/2
                              group-hover:top-0
                              duration-400
                              ease
                            "
                          ></span>
                          <span
                            class="
                              absolute
                              right-0
                              flex
                              items-center
                              justify-start
                              w-10
                              h-10
                              duration-300
                              transform
                              translate-x-full
                              group-hover:translate-x-0
                              ease
                            "
                          >
                            <svg
                              class="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              ></path>
                            </svg>
                          </span>
                          <span class="relative">{{
                            shopStore.getCartItems.length > 0
                              ? 'Zur Kasse'
                              : 'Bitte Artikel hinzufügen'
                          }}</span>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="mt-6 flex justify-center text-sm text-center text-gray-300">
                    <p>
                      oder
                      <button
                        type="button"
                        class="text-indigo-500 font-medium hover:text-indigo-400"
                        @click="shopStore.toggleShoppingCartPreview()"
                      >
                        weitere Bücher kaufen<span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ShoppingBagItemPreview from '@/components/molecules/ShoppingBagItemPreview.vue'
// import { storeToRefs } from 'pinia'

import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

import { XIcon } from '@heroicons/vue/outline'
import { useStore } from '@/stores/shop'
import { storeToRefs } from 'pinia'

const shopStore = useStore()
const { shoppingCart } = storeToRefs(shopStore)
const cartItems = ref()
const cartform = ref()
const shoppingBag = computed(() => {
  return JSON.stringify(shoppingCart.value)
})
const buy = () => {
  if (shopStore.getCartTotalPrice > 0) {
    cartItems.value.value = JSON.stringify(shopStore.getItemsForPayment)
    console.log(shoppingBag.value)
    console.log(shopStore.getItemsForPayment)
    cartform.value.submit()
  }
}

// const open = ref(true)
</script>
