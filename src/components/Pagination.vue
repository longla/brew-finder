<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBreweryStore } from '../store/brewery'

const store = useBreweryStore()
const { searchParams, breweries } = storeToRefs(store)

function nextPage() {
  searchParams.value.page++
}

function prevPage() {
  if (searchParams.value.page > 1) {
    searchParams.value.page--
  }
}
</script>

<template>
  <div class="flex justify-center items-center space-x-4 mt-8">
    <button
      @click="prevPage"
      :disabled="searchParams.page <= 1"
      class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-700 dark:text-gray-200"
    >
      Previous
    </button>
    <span class="text-gray-700 dark:text-gray-200">Page {{ searchParams.page }}</span>
    <button
      @click="nextPage"
      :disabled="breweries.length < searchParams.per_page"
      class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-700 dark:text-gray-200"
    >
      Next
    </button>
  </div>
</template>
