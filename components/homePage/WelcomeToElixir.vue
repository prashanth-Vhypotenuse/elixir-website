<script lang="ts" setup>
  import { COMPANY_METRICS, COMPANYSUPPORTS } from "~/constants/static-data";
  import Heading3 from "../headings/Heading3.vue";
  import Heading5 from "../headings/Heading5.vue";
  import getEnvironmentVariables, { EnvLabel } from "~/config/env-variables";
  import type { TContentItem } from "~/types/api-data-type";
  import { GetPageContentApi } from "~/services/home";

  const showYoutubeModal = ref(false);

  const baseURL = getEnvironmentVariables(EnvLabel.apiBaseURL);

  const heading = ref({
    title: "",
    description: "",
  });
  const companyMetrics = ref<TContentItem[]>([]);
  const companySupports = ref<TContentItem[]>([]);

  const bgImageDetails = ref({
    imagePath: "",
    youtubeLink: "",
    icon: "",
  });

  async function getWelcomeSectionData() {
    const { data = null, status = 500 } = await GetPageContentApi({
      Type: "ExpertConsultancySupport",
    });

    if (status == 200) {
      heading.value = {
        title: getPageContent(data)[0]?.title || "",
        description: getPageContent(data)[0]?.description || "",
      };
      companyMetrics.value = getPageContent(data).slice(1, 5);
      companySupports.value = getPageContent(data).slice(5, 8);

      const newBgImageDetails = getPageContent(data).findLast(
        (item: TContentItem) => item.title == "ServiceBannerImage",
      );

      bgImageDetails.value = {
        imagePath: newBgImageDetails?.imagePath || "",
        youtubeLink: newBgImageDetails?.linkPath || "",
        icon: newBgImageDetails?.icon || "",
      };
    } else {
      companyMetrics.value = [];
      companySupports.value = [];
      heading.value = {
        title: "",
        description: "",
      };
      bgImageDetails.value = {
        imagePath: "",
        youtubeLink: "",
        icon: "",
      };
    }
  }

  onMounted(() => {
    Promise.all([getWelcomeSectionData()]);
  });

  const toggleModal = function () {
    showYoutubeModal.value = !showYoutubeModal.value;

    if (showYoutubeModal.value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  const closeModal = function () {
    showYoutubeModal.value = false;
    document.body.style.overflow = "visible";
  };

  // Listen for the Escape key to close the modal
  const handleEscapeKey = function (event: KeyboardEvent) {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  onMounted(() => {
    window.addEventListener("keydown", handleEscapeKey);
  });

  onUnmounted(() => {
    window.removeEventListener("keydown", handleEscapeKey);
  });
</script>

<template>
  <section>
    <div class="container">
      <div class="flex flex-col items-center mb-10">
        <!-- <Heading3 heading="Welcome to the Elixir" />
        <p class="max-w-[30rem] text-center pt-2">
          Get expert consultancy and support with Elixir, an advisory firm that stand by your side
          always.
        </p> -->
        <Heading3 :heading="heading.title" />
        <p class="max-w-[30rem] text-center pt-2">
          {{ heading.description }}
        </p>
        <hr class="w-16 h-1 bg-primaryColor mt-2" />
      </div>

      <div class="py-8 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="companyMetric in companyMetrics"
          :key="companyMetric.title"
          class="flex flex-col gap-5 items-center p-5"
          data-aos="fade-up"
        >
          <div class="w-24 h-24 rounded-full border flex items-center justify-center">
            <Icon
              v-if="companyMetric.icon"
              :name="companyMetric.icon"
              size="2.2rem"
              style="color: var(--black-color)"
            />
          </div>

          <Heading5 heading="Business Consulting" heading-class="text-center" />

          <p class="text-center">{{ companyMetric.description }}</p>
        </div>
      </div>

      <div class="relative my-10">
        <!-- <img :src="Images.videoScreenShotImage" alt="Video Screenshot Image" class="rounded-xl" /> -->
        <img
          :src="`${baseURL}${bgImageDetails.imagePath}`"
          alt="Video Screenshot Image"
          class="rounded-xl"
        />

        <!-- <div class="absolute inset-0 flex items-center justify-center"> -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div
            class="border-[0.6rem] rounded-full flex items-center cursor-pointer"
            @click="toggleModal"
          >
            <!-- <Icon name="ion:md-play-circle" style="color: white; font-size: 6rem" /> -->
            <Icon :name="bgImageDetails.icon" style="color: white; font-size: 6rem" />
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 pt-10 md:pt-20">
        <div v-for="support in companySupports" :key="support.title" data-aos="fade-up">
          <div class="flex items-center gap-3">
            <Icon
              v-if="support.icon"
              :name="support.icon"
              size="1.4rem"
              style="color: var(--primary-color)"
            />
            <Heading5 :heading="support.title" />
          </div>
          <p class="pt-3">
            {{ support.description }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Youtube modal -->
  <div v-if="showYoutubeModal">
    <div class="fixed top-0 left-0 w-screen h-screen bg-modalOverlayColor z-[99] opacity-95"></div>

    <div class="fixed left-1/2 z-[1000] top-1/2 transform -translate-y-1/2 -translate-x-1/2">
      <button class="absolute -top-6 -left-7" @click="toggleModal">
        <Icon name="ion:close-outline" size="1.9rem" style="color: var(--white-color)" />
      </button>

      <!-- src="https://www.youtube.com/embed/jlWMTNZNOc0?si=Fy_lK-16moAF00oV" -->

      <iframe
        class="w-[80vw] h-[80vh] lg:w-[70vw] lg:h-[70vh] rounded-md"
        title="YouTube video player"
        :src="bgImageDetails.youtubeLink"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
