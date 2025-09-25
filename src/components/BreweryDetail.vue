<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBreweryStore } from "../store/brewery";
import BreweryDetailSkeleton from "./BreweryDetailSkeleton.vue";

const store = useBreweryStore();
const { selectedBrewery, detailLoading } = storeToRefs(store);
const { clearSelectedBrewery } = store;
</script>

<template>
  <div
    v-if="selectedBrewery || detailLoading"
    class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
  >
          <div
            class="bg-gray-50 p-8 rounded-xl shadow-2xl w-full max-w-lg max-h-full overflow-y-auto m-4"
          >      <BreweryDetailSkeleton v-if="detailLoading" />
      <div v-else-if="selectedBrewery">
        <header class="flex justify-between items-start mb-6">
          <h2 class="text-3xl font-bold text-gray-800">
            {{ selectedBrewery.name }}
          </h2>
          <button
            @click="clearSelectedBrewery"
            class="text-gray-500 hover:text-gray-800 transition-colors"
          >
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </header>
        <div class="space-y-3 text-gray-700">
          <p>
            <strong>Type: </strong>
            <span class="capitalize font-semibold text-brew-amber">{{
              selectedBrewery.brewery_type
            }}</span>
          </p>
          <p>
            <strong>Address:</strong> {{ selectedBrewery.street }},
            {{ selectedBrewery.city }}, {{ selectedBrewery.state }}
            {{ selectedBrewery.postal_code }}
          </p>
          <p v-if="selectedBrewery.phone">
            <strong>Phone:</strong> {{ selectedBrewery.phone }}
          </p>
          <p v-if="selectedBrewery.website_url">
            <strong>Website: </strong>
            <a
              :href="selectedBrewery.website_url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-brew-amber hover:underline font-semibold"
            >
              {{ selectedBrewery.website_url }}
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
