<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <header class="relative bg-[#191720]">
    <nav aria-label="Top" class="max-w-[90rem] mx-auto sm:px-6 lg:px-8">
      <div class="relative border-b border-[#8620a5] px-20 pb-14 sm:static sm:px-0 sm:pb-0">
        <div class="h-20 flex items-center justify-between">
          <!-- Logo -->
          <div class="flex-1 flex">
            <a href="" class="p-2 text-gray-500 hover:text-gray-400">
              <span class="sr-only">Workflow</span>
              <BookOpenIcon class="w-10 h-10" aria-hidden="true" />
            </a>
          </div>

          <p
            class="
              tracking-wide
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
            <input
              id="search"
              v-model="searchvalue"
              type="text"
              name="search"
              class="
                shadow-sm
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-64
                pr-12
                sm:text-sm
                border-gray-500
                text-sm text-transparent
                bg-clip-text bg-gradient-to-r
                from-[#fdfdfd]
                to-[#e546d0]
                rounded-md
              "
              placeholder="Suche"
              :class="[expandSearchbar ? 'expandSearchbar' : 'hideSearchbar']"
            />
            <a href="#" class="p-2 text-gray-500 hover:text-gray-400" @click="toggleSearch">
              <span class="sr-only">Search</span>
              <SearchIcon class="w-6 h-6" aria-hidden="true" />
            </a>
            <!-- Cart -->
            <div
              class="group -m-2 p-2 flex items-center"
              @click="shopStore.toggleShoppingCartPreview()"
            >
              <ShoppingBagIcon
                class="flex-shrink-0 h-6 w-6 text-gray-500 group-hover:text-gray-400"
                aria-hidden="true"
                :class="[shopStore.cartItemQuantity ? 'bounce' : '']"
              />

              <span class="ml-2 text-lg font-medium text-gray-500">{{
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
import { ref } from 'vue'
import { SearchIcon, BookOpenIcon, ShoppingBagIcon } from '@heroicons/vue/outline'
// import ShoppingBagPopoverPanel from '@/components/organisms/ShoppingBagPopoverPanel.vue'
import ShopCatalog from '@/components/organisms/ShopCatalog.vue'
import ShoppingBagOverview from '@/components/organisms/ShoppingBagOverview.vue'
import { TProduct } from '@/types/ShopTypes'
import { useStore } from '@/stores/shop'
import { storeToRefs } from 'pinia'

const shopStore = useStore()
const { searchvalue } = storeToRefs(shopStore)

const products: Array<TProduct> = [
  {
    ProduktID: 1,
    Produktcode: '978-3-608-93826-5',
    Produkttitel: 'Get Programming with JS',
    Autorname: 'John R. Larsen',
    PreisBrutto: '42.80',
    Lagerbestand: 1,
    LinkGrafik:
      'https://images.manning.com/book/4/48bdbd0-19ed-4259-898b-88e9fd2b7a32/Larsen_hires.png',
  },
  {
    ProduktID: 2,
    Produktcode: '878-3-708-93826-4',
    Produkttitel: 'Accessible Vue',
    Autorname: 'Marcus Hermann',
    PreisBrutto: '32.10',
    Lagerbestand: 3,

    LinkGrafik: 'https://d2sofvawe08yqg.cloudfront.net/accessible-vue/s_hero2x?1620623767',
  },
  {
    ProduktID: 3,
    Produktcode: '672-3-408-92866-1',
    Autorname: 'Jon Duckett',
    Produkttitel: 'JavaScript & JQuery',
    PreisBrutto: '64.20',
    Lagerbestand: 10,
    LinkGrafik: 'https://javascriptbook.com/images/book/javascript-and-jquery-book-cover.png',
  },
  {
    ProduktID: 4,
    Produktcode: '525-2-408-98166-8',
    Produkttitel: 'Fullstack Vue',
    Autorname: 'Hassan Djirdeh',
    PreisBrutto: '53.50',
    Lagerbestand: 15,
    LinkGrafik:
      'https://ph-files.imgix.net/55f4cce3-a55a-4de7-8dff-d943819fcd56.png?auto=format&auto=compress&codec=mozjpeg&cs=strip',
  },
  {
    ProduktID: 5,
    Produktcode: '825-4-406-77166-9',
    Produkttitel: 'Design Patterns for Vue.js',
    Autorname: 'Lachlan Miller',
    PreisBrutto: '37.45',
    Lagerbestand: 5,
    LinkGrafik: 'https://miro.medium.com/max/1400/0*jZh-20DQW5NiEMYK.png',
  },
  {
    ProduktID: 6,
    Produktcode: '972-2-123-89466-1',
    Produkttitel: 'HTML & CSS',
    Autorname: 'Jon Duckett',
    PreisBrutto: '74.90',
    Lagerbestand: 7,
    LinkGrafik:
      'https://i1.rgstatic.net/publication/350941656_BOOK_abut_HTML_CSS/links/607a900c907dcf667ba463ad/largepreview.png',
  },
  {
    ProduktID: 7,
    Produktcode: '782-6-390-73829-7',
    Produkttitel: 'The modern web design',
    Autorname: 'webflow',
    PreisBrutto: '21.40',
    Lagerbestand: 2,
    LinkGrafik: 'https://www.lapabooks.com/assets/images/the-modern-web-design-process.png',
  },
]
// const v = [
//  https://ph-files.imgix.net/55f4cce3-a55a-4de7-8dff-d943819fcd56.png?auto=format&auto=compress&codec=mozjpeg&cs=strip
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
  }
  to {
    opacity: 1 !important;
    width: 100% !important;
  }
}

.expandSearchbar {
  animation: searchBarAnimation 0.5s ease-in 0s 1 normal forwards !important;
  /* animation-name: searchBarAnimation;
  animation-duration: 1s;
  animation-fill-mode: forwards; */
}
.hideSearchbar {
  animation: searchBarAnimation 0.5s ease-in 0s 1 reverse backwards !important;
  /* animation-name: searchBarAnimation;
  animation-duration: 1s;
  animation-direction: reverse;
  animation-fill-mode: backwards; */
}
.bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
