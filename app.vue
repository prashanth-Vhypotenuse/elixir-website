<script lang="ts" setup>
  const globalLoader = useGlobalLoader();
</script>
<template>
  <!-- <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet"
  /> -->

  <transition v-show="globalLoader.isLoading" name="fade">
    <div class="loading transition-all !ease-out" id="preloader">
      <div class="h-screen flex justify-center items-center">
        <div class="line-scale">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </transition>
  <div>
    <Header />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <Footer />
  </div>
</template>
