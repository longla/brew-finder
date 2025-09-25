<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBreweryStore } from '../store/brewery'

const store = useBreweryStore()
const { searchParams } = storeToRefs(store)

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
      v-model.lazy.trim="searchParams.query"
      type="text"
      placeholder="Search by name..."
      class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    />
    <input
      v-model.lazy.trim="searchParams.by_city"
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
