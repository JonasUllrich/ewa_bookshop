<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <header class="relative bg-white">
    <nav aria-label="Top" class="max-w-[90rem] mx-auto sm:px-6 lg:px-8">
      <div class="relative border-b border-gray-200 px-4 pb-14 sm:static sm:px-0 sm:pb-0">
        <div class="h-20 flex items-center justify-between">
          <!-- Logo -->
          <div class="flex-1 flex">
            <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
              <span class="sr-only">Workflow</span>
              <BookOpenIcon class="w-10 h-10" aria-hidden="true" />
            </a>
          </div>

          <p
            class="
              tracking-wide
              font-bold
              text-3xl text-indigo-600
              font-extrabold
              text-transparent
              bg-clip-text bg-gradient-to-r
              from-indigo-600
              to-purple-600
            "
          >
            WeBooks
          </p>

          <div class="flex-1 flex items-center justify-end">
            <!-- Search -->
            <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
              <span class="sr-only">Search</span>
              <SearchIcon class="w-6 h-6" aria-hidden="true" />
            </a>
            <!-- Cart -->
            <div
              class="group -m-2 p-2 flex items-center"
              @click="shopStore.toggleShoppingCartPreview()"
            >
              <ShoppingBagIcon
                class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
              <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{{
                shopStore.cartItemQuantity
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <ShopCatalog />
  <ShoppingBagOverview :open="true" />
</template>

<script setup lang="ts">
import { SearchIcon, BookOpenIcon, ShoppingBagIcon } from '@heroicons/vue/outline'
// import ShoppingBagPopoverPanel from '@/components/organisms/ShoppingBagPopoverPanel.vue'
import ShopCatalog from '@/components/organisms/ShopCatalog.vue'
import ShoppingBagOverview from '@/components/organisms/ShoppingBagOverview.vue'
import { TProduct } from '@/types/ShopTypes'
import { useStore } from '@/stores/shop'

const shopStore = useStore()

const products: Array<TProduct> = [
  {
    ProduktID: 1,
    Produktcode: 'abc123',
    Produkttitel: 'PHP-Kochbuch',
    Autorname: 'PHP-Kochbuch',
    PreisBrutto: '74.90',
    Lagerbestand: 1,
    LinkGrafik:
      'https://nord-sued.com/wp-content/uploads/2021/09/U1_978-3-314-10582-1_3D_sRGB-997x1024.png',
  },
  {
    ProduktID: 2,
    Produktcode: '1234abc',
    Produkttitel: 'Java-Kochbuch',
    Autorname: 'PHP-Kochbuch',

    PreisBrutto: '32.10',
    Lagerbestand: 0,

    LinkGrafik:
      'https://articles-images.sftcdn.net/wp-content/uploads/sites/8/2013/01/Minecraft_Zauberbuch.png',
  },
  {
    ProduktID: 3,
    Autorname: 'PHP-Kochbuch',

    Produktcode: '1234abcd',
    Lagerbestand: 15,
    Produkttitel: 'JavaScript-Frameworks',
    PreisBrutto: '64.20',
    LinkGrafik: 'https://shop.ksta.de/de/autothumb/1000x1000/Wandertag_Cover_Quadrat.jpg',
  },
]
// const v = [
//   {
//     ProduktID: 1,
//     Produktcode: 'abc123',
//     Produkttitel: 'PHP-Kochbuch',
//     Autorname: 'King of PHP',
//     Verlagsname: 'PHPBu00fcchersindblu00f6d GmbH',
//     PreisNetto: '70.00',
//     Mwstsatz: 0.07,
//     PreisBrutto: '74.90',
//     Lagerbestand: 500,
//     Kurzinhalt: 'Dieses Buch ist fu00fcr Buchstaben da.',
//     Gewicht: 500,
//     LinkGrafik:
//       'https://nord-sued.com/wp-content/uploads/2021/09/U1_978-3-314-10582-1_3D_sRGB-997x1024.png',
//   },
//   {
//     ProduktID: 2,
//     Produktcode: '1234abc',
//     Produkttitel: 'Java-Kochbuch',
//     Autorname: 'Dr. Java',
//     Verlagsname: 'JBooks',
//     PreisNetto: '30.00',
//     Mwstsatz: 0.07,
//     PreisBrutto: '32.10',
//     Lagerbestand: 6,
//     Kurzinhalt: 'In diesem Buch lernen Sie wie man in MineCraft kocht.',
//     Gewicht: 300,
//     LinkGrafik:
//       'https://articles-images.sftcdn.net/wp-content/uploads/sites/8/2013/01/Minecraft_Zauberbuch.png',
//   },
//   {
//     ProduktID: 3,
//     Produktcode: '1234abcd',
//     Produkttitel: 'JavaScript-Frameworks',
//     Autorname: 'Mr. JayScript',
//     Verlagsname: 'JScripts',
//     PreisNetto: '60.00',
//     Mwstsatz: 0.07,
//     PreisBrutto: '64.20',
//     Lagerbestand: 1000,
//     Kurzinhalt: 'Dieses Buch erklu00e4rt Ihnen verschiedene JS-Frameworks',
//     Gewicht: 800,
//     LinkGrafik: 'https://shop.ksta.de/de/autothumb/1000x1000/Wandertag_Cover_Quadrat.jpg',
//   },
// ]

shopStore.setProducts(products)

// fetch('https://iws107.informatik.htw-dresden.de/ewa/G04/api/api.php')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//     shopStore.setProducts(data)
//   })
</script>
