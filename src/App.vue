<script setup lang="ts"></script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <header class="bg-white shadow-sm">
      <div
        class="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between"
      >
        <h1 class="text-2xl font-bold text-brew-amber">Brewery Finder</h1>
        <a
          class="text-sm underline text-gray-600 hover:text-gray-800"
          href="https://www.openbrewerydb.org/documentation"
          target="_blank"
          rel="noreferrer"
          >API docs</a
        >
      </div>
    </header>
    <main class="max-w-5xl mx-auto px-4 py-10">
      <router-view />
    </main>
  </div>
</template>
