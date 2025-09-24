<script setup lang="ts">
import { PropType } from 'vue'
import BreweryListItem from './BreweryListItem.vue'

interface Brewery {
  id: string;
  name: string;
  city: string;
  state: string;
  brewery_type: string;
}

defineProps({
  breweries: {
    type: Array as PropType<Brewery[]>,
    required: true,
  },
})

const emit = defineEmits(['select-brewery'])

function onSelectBrewery(id: string) {
  emit('select-brewery', id)
}
</script>

<template>
  <ul class="space-y-2">
    <BreweryListItem
      v-for="brewery in breweries"
      :key="brewery.id"
      :brewery="brewery"
      @select="onSelectBrewery(brewery.id)"
    />
  </ul>
</template>
