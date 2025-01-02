<script lang="ts" setup>
  import { ACHIVEMENTS } from "~/constants/static-data";
  import Heading2 from "../headings/Heading2.vue";
  import Heading6 from "../headings/Heading6.vue";
</script>

<template>
  <section class="relative py-5 min-h-[75vh] flex">
    <div
      class="absolute backgroundImage w-full min-h-[100%] left-0 top-0 bg-center bg-cover overflow-hidden z-[-1] backface-hidden bg-no-repeat overlay overlay-elixir"
    ></div>

    <div class="relative inset-0 flex h-full items-center container">
      <div class="flex gap-2 md:gap-4">
        <div class="pt-3">
          <Icon
            name="ion:md-checkmark-circle-outline"
            size="3.2rem"
            style="color: var(--gold-color)"
          />
        </div>
        <div>
          <Heading2 heading="Take the right step ," heading-class="!text-goldColor" />
          <Heading2 heading="do the big things." heading-class="text-whiteColor" />

          <div class="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
            <div v-for="achivement in ACHIVEMENTS" :key="achivement.name" data-aos="fade-up">
              <Heading2 :heading="achivement.achived" heading-class="text-whiteColor" />
              <Heading6 :heading="achivement.name" heading-class="text-whiteColor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .backgroundImage {
    background-image: url("~/assets/images/background-15.jpg");
  }
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
