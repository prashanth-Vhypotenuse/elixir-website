<script lang="ts" setup>
  // import { GLOBAL_LEADERS } from "~/constants/static-data";
  import Heading3 from "../headings/Heading3.vue";
  import Heading5 from "../headings/Heading5.vue";
  import type { TContentItem } from "~/types/api-data-type";
  import { GetPageContentApi } from "~/services/home";
  import getEnvironmentVariables, { EnvLabel } from "~/config/env-variables";

  const baseURL = getEnvironmentVariables(EnvLabel.apiBaseURL);

  const globalLeaders = ref<TContentItem[]>([]);

  async function getGlobalLeadersData() {
    const { data = null, status = 500 } = await GetPageContentApi({ Type: "GlobalLeaders" });

    if (status == 200) {
      globalLeaders.value = getPageContent(data);
    } else {
      globalLeaders.value = [];
    }
  }

  onMounted(() => {
    Promise.all([getGlobalLeadersData()]);
  });
</script>

<template>
  <section class="bg-lightGrayColor">
    <div class="container">
      <div class="flex flex-col items-center mb-10">
        <Heading3 heading="Global Leadership" />
        <hr class="w-16 h-1 bg-primaryColor mt-2" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        <!-- Card -->
        <div
          v-for="leader in globalLeaders"
          :key="leader.id"
          class="bg-whiteColor text-center rounded-md"
        >
          <img
            :src="`${baseURL}${leader.imagePath}`"
            :alt="leader.title"
            class="rounded-t-md w-full"
          />

          <div class="p-5" data-aos="fade-up">
            <Heading5 :heading="leader.title" />
            <p class="text-xs">{{ leader.subTitle }}</p>
            <p class="mt-4 md:mt-6">{{ leader.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
