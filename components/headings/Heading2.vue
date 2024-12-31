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
  <h2 :class="['text-fs-3 md:text-fs-4 text-primaryColor font-bold', headingClass]">
    {{ heading }}
  </h2>
</template>
