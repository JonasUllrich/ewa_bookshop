<template>
  <li class="py-6 flex items-center">
    <img
      :src="product.imageSrc"
      :alt="product.imageAlt"
      class="flex-none w-16 h-16 rounded-md border border-gray-200"
    />
    <div class="ml-4 flex-auto">
      <h3 class="font-medium text-gray-900">
        <a :href="product.href">{{ product.name }}</a>
      </h3>
      <p class="text-gray-500">{{ product.color }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    product: {
      required: true,
      type: Object,
    },
  },
  setup(props) {
    console.log(props.title)
    return {}
  },
}
</script>
