<script lang="ts" setup>
  withDefaults(
    defineProps<{
      label: string;
      btnType?: "button" | "submit" | "reset" | undefined;
      handleClick?: () => void;
      // "btn-primary" | "btn-warning" | "btn-outline-primary";
      btnClass?: string;
    }>(),
    { btnType: "button", btnClass: "btn-primary" },
  );
</script>

<template>
  <button
    :type="btnType"
    @click="handleClick"
    :class="['btn', btnClass, 'flex gap-1 items-center']"
  >
    {{ label }}
    <slot name="icon" />
  </button>
</template>

<style scoped>
  .btn {
    padding: 0.7rem 2rem;
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: 0.01em;
    border-radius: 0.1rem;
    transition: all 0.2s ease-in-out;
    line-height: 1.5;
    color: #fff;
  }

  .btn-block {
    display: block;
    width: 100%;
  }

  .btn-primary {
    background-color: #2a3855;
    border-color: #2a3855;
  }

  .btn-primary:focus,
  .btn-primary:hover {
    background-color: #3d4c6f;
    border-color: #3d4c6f;
  }

  .btn-warning {
    color: #2a3855;
    background-color: #fdd428;
    border-color: #fdcf0f;
  }

  .btn-warning:focus,
  .btn-warning:hover {
    background-color: #f0c202;
    border-color: #cca502;
  }

  .btn-white {
    color: var(--black-color);
    background-color: var(--white-color);
    border-radius: 1.3rem;
  }

  .btn-white:focus,
  .btn-white:hover {
    background-color: var(--light-gray-color);
  }

  .btn-outline-primary {
    padding: 0.5rem 2rem;
    color: #2a3855;
    background-image: none;
    background-color: #fff;
    border: 0.1rem solid #2a3855;
    border-radius: 8rem;
  }

  .btn-outline-primary:hover,
  .btn-outline-primary.focus {
    color: #fff;
    background-color: #2a3855;
    border-color: #2a3855;
  }
</style>
