import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useBreweryStore = defineStore('brewery', () => {
  const breweries = ref([])
  const selectedBrewery = ref(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const searchParams = reactive({
    query: '',
    by_city: '',
    by_type: '',
    page: 1,
    per_page: 20,
  })

  const API_URL = 'https://api.openbrewerydb.org/v1/breweries'

  async function fetchBreweries() {
    loading.value = true
    error.value = null
    breweries.value = []

    try {
      const params = new URLSearchParams()
      if (searchParams.query) params.append('by_name', searchParams.query)
      if (searchParams.by_city) params.append('by_city', searchParams.by_city)
      if (searchParams.by_type) params.append('by_type', searchParams.by_type)
      params.append('page', searchParams.page.toString())
      params.append('per_page', searchParams.per_page.toString())

      const response = await fetch(`${API_URL}?${params.toString()}`)
      if (!response.ok) throw new Error('Failed to fetch breweries.')
      
      const data = await response.json()
      breweries.value = data
    } catch (e: any) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  async function fetchBreweryById(id: string) {
    loading.value = true
    error.value = null
    selectedBrewery.value = null
    
    try {
      const response = await fetch(`${API_URL}/${id}`)
      if (!response.ok) throw new Error('Failed to fetch brewery details.')

      const data = await response.json()
      selectedBrewery.value = data
    } catch (e: any) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  function clearSelectedBrewery() {
    selectedBrewery.value = null
  }

  return {
    breweries,
    selectedBrewery,
    loading,
    error,
    searchParams,
    fetchBreweries,
    fetchBreweryById,
    clearSelectedBrewery,
  }
})
