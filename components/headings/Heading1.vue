<script lang="ts" setup>
  withDefaults(
    defineProps<{
      heading: string;
      headingClass?: string;
    }>(),
    {
      headingClass: "",
    },
  );
</script>

<template>
  <!-- data-aos="fade-up" -->

  <h1 :class="['text-fs-3 md:text-fs-4 lg:text-fs-5 text-primaryColor font-bold', headingClass]">
    {{ heading }}
  </h1>
</template>
