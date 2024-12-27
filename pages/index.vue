<script lang="ts" setup>
const formValues = ref({
  fullName: "",
});
</script>

<template>
  <h1 class="text-3xl font-bold underline text-[var(--primary-color)]">
    Initial Page!
  </h1>

  <div class="bg-purple-700 p-5 grid grid-cols-2 gap-5">
    <TextInput
      input-type="text"
      :model-value="formValues.fullName"
      :on-change="(value) => (formValues.fullName = value)"
      placeholder="Enter a full name"
    />

    <TextInput
      input-type="text"
      :model-value="formValues.fullName"
      :on-change="(value) => (formValues.fullName = value)"
      placeholder="Enter a full name"
    />
  </div>
</template>
