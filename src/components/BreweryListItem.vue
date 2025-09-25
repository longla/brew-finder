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
  <li @click="selectBrewery" class="p-5 bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-shadow duration-300">
    <h3 class="text-lg font-semibold text-gray-800">{{ brewery.name }}</h3>
    <p class="text-gray-600">{{ brewery.city }}, {{ brewery.state }}</p>
    <p class="text-sm text-brew-amber font-semibold capitalize">{{ brewery.brewery_type }}</p>
  </li>
</template>
