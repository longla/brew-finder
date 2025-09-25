<script setup lang="ts">
defineProps({
  count: {
    type: Number,
    default: 10,
  },
});
</script>

<template>
  <div class="space-y-2 animate-pulse">
    <div v-for="n in count" :key="n" class="p-4 rounded-md">
      <div
        class="h-5 bg-gray-300 dark:bg-gray-700 rounded w-[250px] mb-2"
      ></div>
      <div
        class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-[200px] mb-2"
      ></div>
      <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-[100px]"></div>
    </div>
  </div>
</template>
