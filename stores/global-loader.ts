import { defineStore } from "pinia";

export const useGlobalLoader = defineStore("globalLoader", () => {
  const isLoading = ref<boolean>(false);
  function setGlobalLoading() {
    isLoading.value = true;
  }

  function resetGlobalLoading() {
    isLoading.value = false;
  }

  return {
    isLoading,
    setGlobalLoading,
    resetGlobalLoading,
  };
});
