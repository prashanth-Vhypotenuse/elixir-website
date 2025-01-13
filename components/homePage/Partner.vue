<script lang="ts" setup>
  import getEnvironmentVariables, { EnvLabel } from "~/config/env-variables";
  // import { PARTNERS } from "~/constants/static-data";
  import { GetPageContentApi } from "~/services/home";
  import type { TContentItem } from "~/types/api-data-type";

  const baseURL = getEnvironmentVariables(EnvLabel.apiBaseURL);

  const partners = ref<TContentItem[]>([]);

  async function getPartnersData() {
    const { data = null, status = 500 } = await GetPageContentApi({ Type: "Partners" });

    if (status == 200) {
      partners.value = getPageContent(data);
    } else {
      partners.value = [];
    }
  }

  onMounted(() => {
    Promise.all([getPartnersData()]);
  });
</script>

<template>
  <section class="bg-lightGrayColor py-10 lg:py-16">
    <ul class="container grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center gap-5">
      <li v-for="partner in partners" :key="partner.id">
        <img :src="`${baseURL}${partner.imagePath}`" :alt="partner.title" />
      </li>
    </ul>
  </section>
</template>
