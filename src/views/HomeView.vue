<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <header class="relative bg-white">
    <nav aria-label="Top" class="max-w-[90rem] mx-auto sm:px-6 lg:px-8">
      <div class="relative border-b border-gray-200 px-4 pb-14 sm:static sm:px-0 sm:pb-0">
        <div class="h-16 flex items-center justify-between">
          <!-- Logo -->
          <div class="flex-1 flex">
            <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
              <span class="sr-only">Workflow</span>
              <BookOpenIcon class="w-10 h-10" aria-hidden="true" />
            </a>
          </div>

          <p class="text-xl tracking-wide font-medium text-gray-400">EWAs Bücher (G04)</p>

          <div class="flex-1 flex items-center justify-end">
            <!-- Search -->

            <input
              id="search"
              type="text"
              name="search"
              class="
                shadow-sm
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-64
                pr-12
                sm:text-sm
                border-gray-300
                rounded-md
              "
              :class="[expandSearchbar ? 'expandSearchbar' : 'hideSearchbar']"
            />
            <a href="#" class="p-2 text-gray-400 hover:text-gray-500" @click="toggleSearch">
              <span class="sr-only">Search</span>
              <SearchIcon class="w-6 h-6" aria-hidden="true" />
            </a>
            <!-- Cart -->
            <a href="#">
              <ShoppingBagPopoverPanel />
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <ShopCatalog />
</template>

<script setup lang="ts">
import { SearchIcon, BookOpenIcon } from '@heroicons/vue/outline'
import ShoppingBagPopoverPanel from '@/components/organisms/ShoppingBagPopoverPanel.vue'
import ShopCatalog from '@/components/organisms/ShopCatalog.vue'
import { TProduct } from '@/types/ShopTypes'
import { useStore } from '@/stores/shop'
import { ref } from 'vue'

const shopStore = useStore()

const products: Array<TProduct> = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    price: 122.2,
    color: 'Salmon',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    price: 122.2,
    color: 'Salmon',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    price: 122.2,
    color: 'Salmon',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    price: 122.2,
    color: 'Salmon',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
]
shopStore.setProducts(products)
const expandSearchbar = ref(false)
const toggleSearch = () => {
  expandSearchbar.value = !expandSearchbar.value
}
</script>
<style>
@keyframes searchBarAnimation {
  from {
    opacity: 0 !important;
    width: 0% !important;
    border: 2px solid red !important;
  }
  to {
    opacity: 1 !important;
    width: 100% !important;
    border: 2px solid green !important;
  }
}

.expandSearchbar {
  /* animation: searchBarAnimation 0.5s ease-in 0s 1 normal forwards !important; */
  animation-name: searchBarAnimation;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.hideSearchbar {
  /* animation: searchBarAnimation 0.5s ease-in 0s 1 reverse backwards !important; */
  animation-name: searchBarAnimation;
  animation-duration: 1s;
  animation-direction: reverse;
  animation-fill-mode: backwards;
}
</style>
