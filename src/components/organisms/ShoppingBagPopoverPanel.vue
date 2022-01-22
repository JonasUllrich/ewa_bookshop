<template>
  <Popover class="ml-4 flow-root text-sm lg:relative lg:ml-8">
    <PopoverButton class="group -m-2 p-2 flex items-center">
      <ShoppingBagIcon
        class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
        aria-hidden="true"
      />
      <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
      <span class="sr-only">items in cart, view bag</span>
    </PopoverButton>
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <PopoverPanel
        class="
          absolute
          top-16
          inset-x-0
          mt-px
          pb-6
          bg-white
          shadow-lg
          sm:px-2
          lg:top-full
          lg:left-auto
          lg:right-0
          lg:mt-3
          lg:-mr-1.5
          lg:w-80
          lg:rounded-lg
          lg:ring-1
          lg:ring-black
          lg:ring-opacity-5
        "
      >
        <h2 class="sr-only">Shopping Cart</h2>

        <form class="max-w-2xl mx-auto px-4">
          <ul role="list" class="divide-y divide-gray-200">
            <ShoppingBagItemPreview
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
          </ul>

          <button
            type="submit"
            class="
              w-full
              bg-indigo-600
              border border-transparent
              rounded-md
              shadow-sm
              py-2
              px-4
              text-sm
              font-medium
              text-white
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-offset-gray-50
              focus:ring-indigo-500
            "
          >
            Checkout
          </button>

          <p class="mt-6 text-center">
            <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >View Shopping Bag</a
            >
          </p>
        </form>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup lang="ts">
import { ShoppingBagIcon } from '@heroicons/vue/outline'
import ShoppingBagItemPreview from '@/components/molecules/ShoppingBagItemPreview.vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
// defineProps({
//   product: {
//     required: true,
//     type: Object,
//     // eslint-disable-next-line vue/require-valid-default-prop
//     default: {},
//   },
// })
const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
]
</script>
