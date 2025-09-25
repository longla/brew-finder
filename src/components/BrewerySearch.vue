<script setup lang="ts">
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { watchDebounced } from '@vueuse/core'
import { useBreweryStore } from '../store/brewery'

const store = useBreweryStore()
const { searchParams } = storeToRefs(store)

// Local state for inputs to allow for debouncing
const localQuery = ref(searchParams.value.query)
const localCity = ref(searchParams.value.by_city)

// Debounce updates to the central store from local input
watchDebounced(localQuery, (newQuery) => {
  searchParams.value.query = newQuery
}, { debounce: 400, maxWait: 2000 })

watchDebounced(localCity, (newCity) => {
  searchParams.value.by_city = newCity
}, { debounce: 400, maxWait: 2000 })

// Keep local state in sync if the central store is changed from elsewhere (e.g., URL)
watch(searchParams, (newParams) => {
  if (newParams.query !== localQuery.value) {
    localQuery.value = newParams.query
  }
  if (newParams.by_city !== localCity.value) {
    localCity.value = newParams.by_city
  }
}, { deep: true })

const breweryTypes = [
  'micro',
  'nano',
  'regional',
  'brewpub',
  'large',
  'planning',
  'bar',
  'contract',
  'proprietor',
  'closed'
]
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
    <input
      v-model.trim="localQuery"
      type="text"
      placeholder="Search by name..."
      class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    />
    <input
      v-model.trim="localCity"
      type="text"
      placeholder="Filter by city..."
      class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    />
    <select
      v-model="searchParams.by_type"
      class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    >
      <option value="">All Types</option>
      <option v-for="type in breweryTypes" :key="type" :value="type">
        {{ type.charAt(0).toUpperCase() + type.slice(1) }}
      </option>
    </select>
  </div>
</template>
