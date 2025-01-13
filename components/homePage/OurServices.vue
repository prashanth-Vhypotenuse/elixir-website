<script lang="ts" setup>
  // import { ADDITIONAL_SERVICES, SERVICES } from "~/constants/static-data";
  import Heading3 from "../headings/Heading3.vue";
  import Heading5 from "../headings/Heading5.vue";
  import type { TContentItem } from "~/types/api-data-type";
  import { GetPageContentApi } from "~/services/home";
  import getEnvironmentVariables, { EnvLabel } from "~/config/env-variables";

  const baseURL = getEnvironmentVariables(EnvLabel.apiBaseURL);

  const services = ref<TContentItem[]>([]);

  async function getServicesData() {
    const { data = null, status = 500 } = await GetPageContentApi({ Type: "Services" });

    if (status == 200) {
      services.value = getPageContent(data);
    } else {
      services.value = [];
    }
  }

  onMounted(() => {
    Promise.all([getServicesData()]);
  });
</script>

<template>
  <section class="bg-lightGrayColor">
    <div class="container">
      <div class="flex flex-col items-center mb-10">
        <Heading3 heading="Our Services" />
        <hr class="w-16 h-1 bg-primaryColor mt-2" />
      </div>

      <div class="grid grid-cols-1 gap-y-10 lg:gap-y-0">
        <!-- {{ JSON.stringify(services) }} -->
        <div
          v-for="(service, index) in services.filter((item: TContentItem) => item.imagePath)"
          :key="service.title"
          class="grid grid-cols-1 lg:grid-cols-2 bg-whiteColor place-items-center rounded-md relative"
        >
          <div
            class="hidden lg:block absolute top-1/2 left-1/2 z-[999] h-6 w-6 bg-whiteColor rotate-45"
            style="transform: translate3d(-50%, -50%, 0) rotate(45deg)"
          ></div>
          <img
            :src="`${baseURL}/${service.imagePath}`"
            :alt="service.title + 'image'"
            :class="[
              index % 2 ? 'lg:order-2' : 'lg:order-1',
              'rounded-t-md lg:rounded-t-none',
              index == 0 ? 'lg:rounded-tl-md' : index == 2 ? 'lg:rounded-bl-md' : '',
            ]"
          />
          <div :class="[index % 2 ? 'lg:order-1' : 'lg:order-2', 'p-10 lg:p-14']">
            <div class="flex flex-col gap-4" data-aos="fade-up">
              <Heading5 :heading="service.title" />

              <p>{{ service.description }}</p>

              <NuxtLink
                :to="service.linkPath"
                class="flex gap-2 items-center font-semibold hover:underline !text-primaryColor"
              >
                {{ service.linkText }}
                <Icon
                  v-if="service.linkIcon"
                  :name="service.linkIcon"
                  style="color: var(--gray-color)"
                  size="1rem"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 pt-10 md:pt-20">
        <div
          v-for="service in services.filter((item: TContentItem) => item.icon)"
          :key="service.title"
          data-aos="fade-up"
        >
          <div class="flex items-center gap-3">
            <Icon
              v-if="service.icon"
              :name="service.icon"
              size="1.2rem"
              style="color: var(--primary-color)"
            />
            <Heading5 :heading="service.title" />
          </div>
          <p class="pt-3">
            {{ service.description }}

            <NuxtLink
              v-if="service.linkPath"
              class="font-semibold inline-flex items-center gap-2"
              :to="service.linkPath"
            >
              {{ service.linkText }}
              <Icon
                v-if="service.linkIcon"
                :name="service.linkIcon"
                size="1rem"
                style="color: var(--primary-color)"
              />
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
