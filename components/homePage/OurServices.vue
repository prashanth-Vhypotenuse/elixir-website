<script lang="ts" setup>
  import { ADDITIONAL_SERVICES, SERVICES } from "~/constants/static-data";
  import Heading3 from "../headings/Heading3.vue";
  import Heading5 from "../headings/Heading5.vue";
</script>

<template>
  <section class="bg-lightGrayColor">
    <div class="container">
      <div class="flex flex-col items-center mb-10">
        <Heading3 heading="Our Services" />
        <hr class="w-16 h-1 bg-primaryColor mt-2" />
      </div>

      <div class="grid grid-cols-1 gap-y-10 lg:gap-y-0">
        <div
          v-for="(service, index) in SERVICES"
          :key="service.serviceTitle"
          class="grid grid-cols-1 lg:grid-cols-2 bg-whiteColor place-items-center rounded-md"
        >
          <img
            :src="service.imgPath"
            :alt="service.serviceTitle + 'image'"
            :class="[
              index % 2 ? 'lg:order-2' : 'lg:order-1',
              'rounded-t-md lg:rounded-t-none',
              index == 0 ? 'lg:rounded-tl-md' : index == 2 ? 'lg:rounded-bl-md' : '',
            ]"
          />
          <div :class="[index % 2 ? 'lg:order-1' : 'lg:order-2', 'p-10 lg:p-14']">
            <div class="flex flex-col gap-4" data-aos="fade-up">
              <Heading5 :heading="service.serviceTitle" />

              <p>{{ service.serviceDescription }}</p>

              <NuxtLink
                :to="service.linkPath"
                class="flex gap-2 items-center font-semibold hover:underline !text-primaryColor"
              >
                Learn More
                <Icon
                  name="fa6-solid:arrow-right-long"
                  style="color: var(--gray-color)"
                  size="1.2rem"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 pt-10 md:pt-20">
        <div v-for="service in ADDITIONAL_SERVICES" :key="service.title" data-aos="fade-up">
          <div class="flex items-center gap-3">
            <Icon :name="service.icon" size="1.4rem" style="color: var(--primary-color)" />
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
