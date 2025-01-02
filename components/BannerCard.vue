<script lang="ts" setup>
  import type { IBannerDetails } from "~/types/static-types";
  import Heading1 from "./headings/Heading1.vue";

  const props = defineProps<{ bannerDetails?: IBannerDetails }>();

  const defaultBannerDetails: IBannerDetails = {
    title: "",
    bannerImgUrl: "",
    videoUrl: "",
    description: "",
  };

  // Use merged defaults in the component
  const bannerDetails = { ...defaultBannerDetails, ...props.bannerDetails };
</script>

<template>
  <div class="relative py-5 min-h-[85vh] flex">
    <div
      :style="{ 'background-image': `url(${bannerDetails.bannerImgUrl})` }"
      class="absolute backgroundImage w-full min-h-[100%] left-0 top-0 bg-center bg-cover overflow-hidden z-[-1] backface-hidden bg-no-repeat"
    >
      <video v-if="bannerDetails.videoUrl" autoplay loop muted class="min-h-[85vh] object-cover">
        <source :src="bannerDetails.videoUrl" type="video/mp4" />
      </video>
    </div>

    <div class="relative container">
      <div class="max-w-[30rem] lg:max-w-[45rem]">
        <Heading1 :heading="bannerDetails.title" heading-class="text-primaryColor" />
        <p data-aos="fade-up" class="text-primaryColor text-fs-1 md:text-fs-2 font-medium py-4">
          {{ bannerDetails.description }}
        </p>
      </div>

      <div class="py-8 flex flex-col md:flex-row gap-5" data-aos="fade-up">
        <div>
          <Button label="Read More" btn-class="btn-primary">
            <template #icon>
              <Icon
                name="ion:chevron-forward-outline"
                style="color: var(--white-color); font-size: 1.2rem"
              />
            </template>
          </Button>
        </div>

        <div>
          <Button label="Contact Us" btn-class="btn-warning">
            <template #icon>
              <Icon
                name="ion:chevron-forward-outline"
                style="color: var(--primary-color); font-size: 1.2rem"
              />
            </template>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
