<script lang="ts" setup>
  import { onMounted, onUnmounted, ref } from "vue";
  import BannerCard from "../BannerCard.vue";

  type TBannerDetails = {
    title: string;
    bannerImgUrl?: string;
    videoUrl?: string;
    description: string;
  };

  const banners: TBannerDetails[] = [
    {
      title: "Helping Leaders",
      bannerImgUrl: Images.bannerImage1,
      description: "We look forward to help you in taking your company to new height.",
    },
    {
      title: "Expert Consultants",
      bannerImgUrl: Images.bannerImage2,
      description:
        "Over 10 years of experience in helping clients finding comprehensive solutions.",
    },
    {
      title: "Growth Partners",
      bannerImgUrl: Images.bannerImage3,
      description: "Connect with top consultants hand-picked by Elixir consulting and finance.",
    },
    {
      title: "Expert Consultants",
      bannerImgUrl: Images.bannerImage4,
      description:
        "Over 10 years of experience in helping clients finding comprehensive solutions.",
    },
    {
      title: "Expert Consultants",
      videoUrl: Videos.video1,
      description:
        "Over 10 years of experience in helping clients finding comprehensive solutions.",
    },
  ];

  const activeSlideIndex = ref(0);
  const intervalId = ref<number | null | any>(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalId.value = setInterval(() => {
      activeSlideIndex.value = (activeSlideIndex.value + 1) % banners.length;
    }, 10000);
  };

  const stopAutoSlide = () => {
    if (intervalId.value !== null) {
      clearInterval(intervalId.value);
      intervalId.value = null;
    }
  };

  const resetAutoSlide = () => {
    stopAutoSlide();
    startAutoSlide();
  };

  const handleSlideChange = (type: "prev" | "next") => {
    stopAutoSlide();
    if (type === "prev") {
      activeSlideIndex.value =
        activeSlideIndex.value === 0 ? banners.length - 1 : activeSlideIndex.value - 1;
    } else {
      activeSlideIndex.value = (activeSlideIndex.value + 1) % banners.length;
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
        <div v-for="(banner, index) in banners" :key="index" class="flex-shrink-0 w-full">
          <BannerCard :banner-details="banner" />
        </div>
      </div>

      <!-- Navigation Buttons -->
      <button
        @click="() => handleSlideChange('prev')"
        class="absolute -left-1 md:hidden md:group-hover:block md:left-4 top-1/2 transform -translate-y-1/2 text-grayColor hover:text-blackColor"
      >
        <Icon name="ion:chevron-back-outline" size="30px" />
      </button>
      <button
        @click="() => handleSlideChange('next')"
        class="absolute -right-1 md:hidden md:group-hover:block md:right-4 top-1/2 transform -translate-y-1/2 text-grayColor hover:text-blackColor"
      >
        <Icon name="ion:chevron-forward-outline" size="30px" />
      </button>
    </div>
  </div>
</template>
