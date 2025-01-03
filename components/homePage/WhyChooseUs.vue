<script lang="ts" setup>
  import { WHY_TO_CHOOSE_US } from "~/constants/static-data";
  import Heading3 from "../headings/Heading3.vue";
  import Heading5 from "../headings/Heading5.vue";
</script>

<template>
  <section class="bg-whiteColor">
    <div class="container">
      <div class="flex flex-col items-center mb-10">
        <Heading3 heading="Why Choose Elixir" />
        <hr class="w-16 h-1 bg-primaryColor mt-2" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16">
        <img :src="Images.whyChooseUsImage" alt="why to choose us image" class="rounded-md" />

        <div class="flex flex-col gap-14 lg:pr-16">
          <div
            v-for="item in WHY_TO_CHOOSE_US"
            :key="item.title"
            class="flex flex-col gap-4"
            data-aos="fade-up"
          >
            <div class="flex gap-3 items-center">
              <Icon :name="item.icon" style="color: var(--primary-color)" size="1.5rem" />
              <Heading5 :heading="item.title" />
            </div>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
