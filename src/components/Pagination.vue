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
  <div class="flex justify-center items-center space-x-6 mt-10">
    <button
      @click="prevPage"
      :disabled="searchParams.page <= 1"
      class="px-5 py-2 bg-brew-amber text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      Previous
    </button>
    <span class="text-gray-800 font-semibold">Page {{ searchParams.page }}</span>
    <button
      @click="nextPage"
      :disabled="breweries.length < searchParams.per_page"
      class="px-5 py-2 bg-brew-amber text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      Next
    </button>
  </div>
</template>
