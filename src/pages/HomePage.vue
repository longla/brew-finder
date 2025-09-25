<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useBreweryStore } from '../store/brewery'

import BrewerySearch from '../components/BrewerySearch.vue'
import BreweryList from '../components/BreweryList.vue'
import Pagination from '../components/Pagination.vue'
import BreweryDetail from '../components/BreweryDetail.vue'
import BreweryListSkeleton from '../components/BreweryListSkeleton.vue'

const store = useBreweryStore()
const route = useRoute()
const router = useRouter()

const { breweries, loading, error, searchParams } = storeToRefs(store)
const { fetchBreweries, fetchBreweryById } = store

// Watch for changes in search parameters and update the URL
watch(searchParams, (newParams) => {
  // Reset page to 1 when filters change
  if (newParams.query !== route.query.query || newParams.by_city !== route.query.by_city || newParams.by_type !== route.query.by_type) {
    searchParams.value.page = 1
  }
  router.push({ query: { ...newParams } })
  fetchBreweries()
}, { deep: true })

// Watch for changes in the URL query and update the search parameters
watch(() => route.query, (newQuery) => {
  searchParams.value.query = (newQuery.query as string) || ''
  searchParams.value.by_city = (newQuery.by_city as string) || ''
  searchParams.value.by_type = (newQuery.by_type as string) || ''
  searchParams.value.page = Number(newQuery.page) || 1
}, { deep: true, immediate: true })

function handleSelectBrewery(id: string) {
  fetchBreweryById(id)
}

onMounted(() => {
  fetchBreweries()
})
</script>

<template>
  <div class="p-4 sm:p-6 lg:p-8">
    <header class="mb-8">
      <h1 class="text-4xl font-bold text-gray-800 dark:text-gray-100">Brewery Finder</h1>
      <p class="text-lg text-gray-600 dark:text-gray-400">Find your next favorite brewery.</p>
    </header>

    <BrewerySearch />

    <main>
      <BreweryListSkeleton v-if="loading" :count="searchParams.per_page" />
      <div v-else-if="error" class="text-center text-red-500">
        <p>Error: {{ error }}</p>
      </div>
      <div v-else-if="breweries.length === 0" class="text-center">
        <p>No breweries found. Try a different search.</p>
      </div>
      <div v-else>
        <BreweryList :breweries="breweries" @select-brewery="handleSelectBrewery" />
        <Pagination />
      </div>
    </main>

    <BreweryDetail />
  </div>
</template>
