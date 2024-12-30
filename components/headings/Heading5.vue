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
  <h5 :class="['text-fs-0 lg:text-fs-1 text-primaryColor font-bold', headingClass]">
    {{ heading }}
  </h5>
</template>
