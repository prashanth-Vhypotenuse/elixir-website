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
  <h1 :class="['text-fs-4 md:text-fs-5 text-primaryColor font-bold', headingClass]">
    {{ heading }}
  </h1>
</template>
