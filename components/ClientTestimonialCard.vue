<script lang="ts" setup>
  import Heading6 from "~/components/headings/Heading6.vue";
  import type { IClientDetails } from "~/types/static-types";

  defineProps<{ clientDetails: IClientDetails }>();
</script>

<template>
  <div class="flex flex-col md:flex-row gap-8">
    <div class="flex justify-center">
      <div class="w-40 md:w-56 h-44 flex justify-end">
        <img
          :src="clientDetails.clientImg"
          :alt="clientDetails.name + 'Image'"
          class="rounded-xl"
        />
      </div>
    </div>
    <div class="flex flex-col gap-7 px-4">
      <p class="lead">{{ clientDetails.description }}</p>

      <div class="flex flex-col gap-1">
        <Heading6 :heading="clientDetails.name" />
        <p>{{ clientDetails.designation }}</p>
      </div>
    </div>
  </div>
</template>
