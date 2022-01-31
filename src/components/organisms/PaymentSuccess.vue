<template>
  <div
    class="
      max-w-2xl
      w-full
      mx-auto
      py-16
      px-4
      sm:py-24 sm:px-6
      lg:max-w-7xl lg:px-8
      flex
      items-center
      flex-col
    "
  >
    <h2 class="text-xl font-bold text-gray-900">Vielen Dank für den Einkauf!</h2>
    <button
      type="button"
      class="
        top-10
        relative
        inline-flex
        items-center
        px-12
        py-3
        overflow-hidden
        text-lg
        font-medium
        text-black
        border-2
        bg-neutral-100
        border-white
        rounded-full
        hover:text-neutral-100
        group
        hover:bg-neutral-700
      "
      @click="router.push({ name: 'home' })"
    >
      Zurück zur Startseite
    </button>
  </div>
</template>

<script setup lang="ts">
import router from '@/routes/index'
</script>
