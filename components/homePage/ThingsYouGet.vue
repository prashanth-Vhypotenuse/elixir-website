<script lang="ts" setup>
  // import { THINGS_YOU_GETS } from "~/constants/static-data";
  import Heading3 from "../headings/Heading3.vue";
  import Heading5 from "../headings/Heading5.vue";
  import type { TContentItem } from "~/types/api-data-type";
  import { GetPageContentApi } from "~/services/home";

  const thingsYouGets = ref<TContentItem[]>([]);

  async function getThingYouGetsData() {
    const { data = null, status = 500 } = await GetPageContentApi({ Type: "ThingsYouGet" });

    if (status == 200) {
      thingsYouGets.value = getPageContent(data);
    } else {
      thingsYouGets.value = [];
    }
  }

  onMounted(() => {
    Promise.all([getThingYouGetsData()]);
  });
</script>

<template>
  <section class="bg-whiteColor">
    <div class="container">
      <div class="flex flex-col items-center mb-12">
        <Heading3 heading="Things You Get" />
        <hr class="w-16 h-1 bg-primaryColor mt-2" />
      </div>

      <!-- Card -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 place-content-center"
      >
        <div
          v-for="item in thingsYouGets"
          :key="item.title"
          class="flex flex-col items-center justify-center text-center gap-2"
          data-aos="fade-up"
        >
          <Icon
            v-if="item.icon"
            :name="item.icon"
            size="1.9rem"
            style="color: var(--primary-color)"
          />

          <Heading5 :heading="item.title" />

          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
