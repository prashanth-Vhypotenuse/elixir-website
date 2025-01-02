<script lang="ts" setup>
  import { PARTNERS } from "~/constants/static-data";
</script>

<template>
  <section class="bg-lightGrayColor py-10 lg:py-16">
    <ul class="container grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center gap-5">
      <li v-for="partner in PARTNERS" :key="partner.srcPath">
        <img :src="partner.srcPath" :alt="partner.alt" />
      </li>
    </ul>
  </section>
</template>
