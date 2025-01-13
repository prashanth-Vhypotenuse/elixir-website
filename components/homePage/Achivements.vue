<script lang="ts" setup>
  // import { ACHIVEMENTS } from "~/constants/static-data";
  import Heading2 from "../headings/Heading2.vue";
  import Heading6 from "../headings/Heading6.vue";
  import getEnvironmentVariables, { EnvLabel } from "~/config/env-variables";
  import { GetPageContentApi } from "~/services/home";
  import type { TContentItem } from "~/types/api-data-type";

  const baseURL = getEnvironmentVariables(EnvLabel.apiBaseURL);

  const achivements = ref<TContentItem[]>([]);
  const bgImagePath = ref<string>("");
  const heading = ref({
    title1: "",
    title2: "",
    icon: "",
  });

  async function getAchivementsData() {
    const { data = null, status = 500 } = await GetPageContentApi({ Type: "Achivements" });

    if (status == 200) {
      achivements.value = getPageContent(data).filter((item: TContentItem) => item.subTitle);
      bgImagePath.value =
        getPageContent(data).find((item: TContentItem) => item.imagePath)?.imagePath || "";

      const headingData = getPageContent(data).find((item: TContentItem) => item.icon);
      heading.value = {
        title1: headingData?.title.split(",")[0] || "",
        title2: headingData?.title.split(",")[1] || "",
        icon: headingData?.icon || "",
      };
    } else {
      achivements.value = [];
      bgImagePath.value = "";
      heading.value = { title1: "", title2: "", icon: "" };
    }
  }

  onMounted(() => {
    Promise.all([getAchivementsData()]);
  });
</script>

<template>
  <section class="relative py-5 min-h-[75vh] flex">
    <div
      :style="{ 'background-image': `url(${baseURL}/${bgImagePath})` }"
      class="absolute w-full min-h-[100%] left-0 top-0 bg-center bg-cover overflow-hidden z-[-1] backface-hidden bg-no-repeat overlay overlay-elixir"
    ></div>

    <div class="relative inset-0 flex h-full items-center container">
      <div class="flex gap-2 md:gap-4">
        <div class="pt-3">
          <Icon :name="heading.icon" size="3.2rem" style="color: var(--gold-color)" />
        </div>
        <div>
          <Heading2 :heading="heading.title1" heading-class="!text-goldColor" />
          <Heading2 :heading="heading.title2" heading-class="text-whiteColor" />

          <div class="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
            <div v-for="achivement in achivements" :key="achivement.id" data-aos="fade-up">
              <Heading2
                v-if="achivement.subTitle"
                :heading="achivement.subTitle"
                heading-class="text-whiteColor"
              />
              <Heading6 :heading="achivement.title" heading-class="text-whiteColor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  /* .backgroundImage {
    background-image: url("~/assets/images/background-15.jpg");
  } */
  .overlay:before {
    position: absolute;
    content: "";
    background: rgba(0, 0, 0, 0.25);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  .overlay.overlay-elixir::before {
    background-color: rgba(44, 56, 85, 0.7);
  }
</style>
