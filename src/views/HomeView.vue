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

          <div class="flex-1 flex items-center justify-end">
            <!-- Search -->
            <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
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
</template>

<script>
import { SearchIcon, BookOpenIcon } from '@heroicons/vue/outline'
import ShoppingBagPopoverPanel from '@/components/organisms/ShoppingBagPopoverPanel.vue'

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

export default {
  components: {
    SearchIcon,
    BookOpenIcon,
    ShoppingBagPopoverPanel,
  },
  setup() {
    return {
      products,
    }
  },
}
</script>
