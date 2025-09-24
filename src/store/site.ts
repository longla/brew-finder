export const useSiteStore = defineStore("site", () => {
  return {};
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSiteStore, import.meta.hot));
