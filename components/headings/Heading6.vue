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
  <h6 :class="['text-fs-0 text-primaryColor font-bold', headingClass]">
    {{ heading }}
  </h6>
</template>
