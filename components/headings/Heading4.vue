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
  <h4 :class="['text-fs-2 text-whiteColor font-bold', headingClass]">
    {{ heading }}
  </h4>
</template>
