<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    btnType?: "button" | "submit" | "reset" | undefined;
    className?: string;
    handleClick?: () => void;
    buttonVariant?: "fill" | "outlined";
  }>(),
  { className: "", btnType: "button", buttonVariant: "fill" }
);
</script>

<template>
  <button
    :type="btnType"
    @click="handleClick"
    :class="[className, buttonVariant == 'fill' ? '' : '']"
  >
    {{ label }}

    <slot name="icon" />
  </button>
</template>

<style scoped></style>
