<script lang="ts" setup>
  import { onMounted, onUnmounted, ref } from "vue";
  import BannerCard from "../BannerCard.vue";
  import { BANNERS } from "~/constants/static-data";

  const activeSlideIndex = ref(0);
  const intervalId = ref<number | null | any>(null);

  const startAutoSlide = function () {
    stopAutoSlide();
    intervalId.value = setInterval(() => {
      activeSlideIndex.value = (activeSlideIndex.value + 1) % BANNERS.length;
    }, 10000);
  };

  const stopAutoSlide = function () {
    if (intervalId.value !== null) {
      clearInterval(intervalId.value);
      intervalId.value = null;
    }
  };

  const resetAutoSlide = function () {
    stopAutoSlide();
    startAutoSlide();
  };

  const handleSlideChange = function (type: "prev" | "next") {
    stopAutoSlide();
    if (type === "prev") {
      activeSlideIndex.value =
        activeSlideIndex.value === 0 ? BANNERS.length - 1 : activeSlideIndex.value - 1;
    } else {
      activeSlideIndex.value = (activeSlideIndex.value + 1) % BANNERS.length;
    }
    resetAutoSlide();
  };

  onMounted(() => {
    startAutoSlide();
  });
  onUnmounted(() => {
    stopAutoSlide();
  });
</script>

<template>
  <div class="relative">
    <div class="relative overflow-hidden group">
      <!-- Sliding Container -->
      <div
        class="flex transition-transform duration-700 ease-in-out"
        :style="{ transform: `translateX(-${activeSlideIndex * 100}%)` }"
      >
        <div v-for="(banner, index) in BANNERS" :key="index" class="flex-shrink-0 w-full">
          <BannerCard :banner-details="banner" :activeBanner="index == activeSlideIndex" />
        </div>
      </div>

      <!-- Navigation Buttons -->
      <button
        @click="() => handleSlideChange('prev')"
        class="absolute -left-1 md:hidden md:group-hover:block md:left-4 top-1/2 transform -translate-y-1/2 text-grayColor hover:text-blackColor"
      >
        <Icon name="ion:chevron-back-outline" size="1.9rem" />
      </button>
      <button
        @click="() => handleSlideChange('next')"
        class="absolute -right-1 md:hidden md:group-hover:block md:right-4 top-1/2 transform -translate-y-1/2 text-grayColor hover:text-blackColor"
      >
        <Icon name="ion:chevron-forward-outline" size="1.9rem" />
      </button>
    </div>
  </div>
</template>
