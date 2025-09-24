<script setup lang="ts"></script>

<template>
  <div class="min-h-screen text-gray-900">
    <header>
      <div
        class="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between"
      >
        <h1 class="text-xl font-semibold">Brewery Finder</h1>
        <a
          class="text-sm underline"
          href="https://www.openbrewerydb.org/documentation"
          target="_blank"
          rel="noreferrer"
          >API docs</a
        >
      </div>
    </header>
    <main class="max-w-5xl mx-auto px-4 py-6">
      <router-view />
    </main>
  </div>
</template>
