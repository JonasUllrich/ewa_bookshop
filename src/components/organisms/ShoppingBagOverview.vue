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
          <DialogOverlay class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
              <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                <div class="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                  <div class="flex items-start justify-between">
                    <DialogTitle class="text-lg font-medium text-gray-900"> Warenkorb </DialogTitle>
                    <div class="ml-3 h-7 flex items-center">
                      <button
                        type="button"
                        class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        @click="shopStore.toggleShoppingCartPreview()"
                      >
                        <span class="sr-only">Close panel</span>
                        <XIcon class="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div class="mt-8">
                    <div class="flow-root">
                      <ul role="list" class="-my-6 divide-y divide-gray-200">
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
                  <div class="flex justify-between text-base font-medium text-gray-900">
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

                      <button
                        type="button"
                        class="
                          flex
                          justify-center
                          items-center
                          px-6
                          py-3
                          border border-transparent
                          rounded-md
                          shadow-sm
                          text-base
                          font-medium
                          text-white
                          bg-indigo-600
                          hover:bg-indigo-700
                        "
                        @click="buy()"
                      >
                        Zur Kasse
                      </button>
                    </form>
                  </div>
                  <div class="mt-6 flex justify-center text-sm text-center text-gray-500">
                    <p>
                      oder
                      <button
                        type="button"
                        class="text-indigo-600 font-medium hover:text-indigo-500"
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
  cartItems.value.value = JSON.stringify(shopStore.getItemsForPayment)
  console.log(shoppingBag.value)
  console.log(shopStore.getItemsForPayment)

  cartform.value.submit()
}

// const open = ref(true)
</script>
