<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <footer class="bg-white border-t border-[#8620a5] max-w-[90rem] mx-auto">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
        <div class="px-5 py-2 flex">
          <div class="flex flex-col items-center">
            <img class="h-8" src="@/assets/vue.png" />
            Vue
          </div>
          <PlusSmIcon
            class="w-8 h-8 text-gray border border-white text-xs p-1 rounded-full hover:bg-pink-500"
          />
          <div class="flex flex-col items-center">
            <img class="h-8" src="@/assets/typescript.png" />
            typescript
          </div>
          <PlusSmIcon class="w-8 h-8 text-grey border border-white text-xs p-1" />
          <div class="flex flex-col items-center">
            <img class="h-8" src="@/assets/tailwind.png" />
            tailwindcss
          </div>
          <PlusSmIcon
            class="w-8 h-8 text-gray border border-white text-xs p-1 rounded-full hover:bg-pink-500"
          />
          <div class="flex flex-col items-center">
            <img class="h-8" src="@/assets/vite.png" />
            Vite
          </div>
        </div>
      </nav>
      <div class="mt-8 flex justify-center space-x-6">
        <div class="flex items-center">
          <img class="h-8" src="@/assets/github.png" />
          <a
            href="https://github.com/JonasUllrich/ewa_bookshop"
            class="text-gray-400 hover:text-gray-500 mx-3"
            >Git Hub Repo</a
          >
        </div>
      </div>
      <p class="mt-8 text-center text-base text-gray-400">
        &copy; 2022 - Hänisch Timm, Heiß Alexander, Ullrich Jonas
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { PlusSmIcon } from '@heroicons/vue/solid'
</script>
