<script setup lang="ts">
import { PropType } from 'vue'

interface Brewery {
  id: string;
  name: string;
  city: string;
  state: string;
  brewery_type: string;
}

defineProps({
  brewery: {
    type: Object as PropType<Brewery>,
    required: true,
  },
})

const emit = defineEmits(['select'])

function selectBrewery() {
  emit('select')
}
</script>

<template>
  <li @click="selectBrewery" class="p-4 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded-md transition-colors duration-200">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ brewery.name }}</h3>
    <p class="text-gray-600 dark:text-gray-400">{{ brewery.city }}, {{ brewery.state }}</p>
    <p class="text-sm text-gray-500 dark:text-gray-300 capitalize">{{ brewery.brewery_type }}</p>
  </li>
</template>
