<script lang="ts" setup>
  import { COMPANY_METRICS, COMPANYSUPPORTS } from "~/constants/static-data";
  import Heading3 from "../headings/Heading3.vue";
  import Heading5 from "../headings/Heading5.vue";

  const showYoutubeModal = ref(false);

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
        <Heading3 heading="Welcome to the Elixir" />
        <p class="max-w-[30rem] text-center pt-2">
          Get expert consultancy and support with Elixir, an advisory firm that stand by your side
          always.
        </p>
        <hr class="w-16 h-1 bg-primaryColor mt-2" />
      </div>

      <div class="py-8 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="companyMetric in COMPANY_METRICS"
          :key="companyMetric.title"
          class="flex flex-col gap-5 items-center p-5"
          data-aos="fade-up"
        >
          <div class="w-24 h-24 rounded-full border flex items-center justify-center">
            <Icon :name="companyMetric.icon" size="2.2rem" style="color: var(--black-color)" />
          </div>

          <Heading5 heading="Business Consulting" heading-class="text-center" />

          <p class="text-center">Solution for every business related problems, readily</p>
        </div>
      </div>

      <div class="relative my-10">
        <img :src="Images.videoScreenShotImage" alt="Video Screenshot Image" />

        <!-- <div class="absolute inset-0 flex items-center justify-center"> -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div
            class="border-[0.6rem] rounded-full flex items-center cursor-pointer"
            @click="toggleModal"
          >
            <Icon name="ion:md-play-circle" style="color: white; font-size: 6rem" />
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 pt-10 md:pt-20">
        <div v-for="support in COMPANYSUPPORTS" :key="support.title" data-aos="fade-up">
          <div class="flex items-center gap-3">
            <Icon :name="support.icon" size="1.4rem" style="color: var(--primary-color)" />
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
      <iframe
        class="w-[80vw] h-[80vh] lg:w-[70vw] lg:h-[70vh] rounded-md"
        src="https://www.youtube.com/embed/jlWMTNZNOc0?si=Fy_lK-16moAF00oV"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
