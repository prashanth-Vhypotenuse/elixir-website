<script lang="ts" setup>
  import Heading6 from "~/components/headings/Heading6.vue";
  import getEnvironmentVariables, { EnvLabel } from "~/config/env-variables";
  import type { TContentItem } from "~/types/api-data-type";
  // import type { IClientDetails } from "~/types/static-types";

  const baseURL = getEnvironmentVariables(EnvLabel.apiBaseURL);

  defineProps<{ clientDetails: TContentItem }>();
</script>

<template>
  <div class="flex flex-col md:flex-row gap-8 px-2 md:px-6 lg:px-20">
    <div class="flex justify-center">
      <div class="w-40 md:w-56 h-44 flex justify-end">
        <img
          :src="`${baseURL}${clientDetails.imagePath}`"
          :alt="clientDetails.title + 'Image'"
          class="rounded-xl"
        />
      </div>
    </div>
    <div class="flex flex-col gap-7 px-4">
      <p class="lead">{{ clientDetails.description }}</p>

      <div class="flex flex-col gap-1">
        <Heading6 :heading="clientDetails.title" />
        <p>{{ clientDetails.subTitle }}</p>
      </div>
    </div>
  </div>
</template>
