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
  <h3 :class="['text-fs-2 lg:text-fs-3 text-primaryColor font-bold', headingClass]">
    {{ heading }}
  </h3>
</template>
