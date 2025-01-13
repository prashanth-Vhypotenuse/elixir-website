<script lang="ts" setup>
  // import { WHY_TO_CHOOSE_US } from "~/constants/static-data";
  import Heading3 from "../headings/Heading3.vue";
  import Heading5 from "../headings/Heading5.vue";
  import type { TContentItem } from "~/types/api-data-type";
  import { GetPageContentApi } from "~/services/home";
  import getEnvironmentVariables, { EnvLabel } from "~/config/env-variables";

  const baseURL = getEnvironmentVariables(EnvLabel.apiBaseURL);

  const whyToChooseUs = ref<TContentItem[]>([]);

  async function getWhyToChooseUsData() {
    const { data = null, status = 500 } = await GetPageContentApi({ Type: "ChooseElixir" });

    if (status == 200) {
      whyToChooseUs.value = getPageContent(data);
    } else {
      whyToChooseUs.value = [];
    }
  }

  onMounted(() => {
    Promise.all([getWhyToChooseUsData()]);
  });

  function getBgImageData(data: TContentItem[]) {
    const result =
      getLength(data) > 0 ? data.find((item: TContentItem) => item.imagePath) : null;
    return result;
  }
</script>

<template>
  <section class="bg-whiteColor">
    <div class="container">
      <div class="flex flex-col items-center mb-10">
        <Heading3 heading="Why Choose Elixir" />
        <hr class="w-16 h-1 bg-primaryColor mt-2" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16">
        <img
          v-if="getBgImageData(whyToChooseUs)"
          :src="`${baseURL}${getBgImageData(whyToChooseUs)?.imagePath}`"
          :alt="getBgImageData(whyToChooseUs)?.title"
          class="rounded-md"
        />

        <div class="flex flex-col gap-14 lg:pr-16">
          <div
            v-for="item in whyToChooseUs.filter((item: TContentItem) => !item.imagePath)"
            :key="item.title"
            class="flex flex-col gap-4"
            data-aos="fade-up"
          >
            <div class="flex gap-3 items-center">
              <Icon
                v-if="item.icon"
                :name="item.icon"
                style="color: var(--primary-color)"
                size="1.5rem"
              />
              <Heading5 :heading="item.title" />
            </div>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
