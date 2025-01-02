<script lang="ts" setup>
  // Define the props using `defineModel` macro
  const modelValue = defineModel<string | number>("modelValue", {
    default: "",
  });

  const props = withDefaults(
    defineProps<{
      label?: string;
      inputType?: string;
      onChange: (value: string) => void;
      disabled?: boolean;
      placeholder?: string;
      errorText?: string;
      required?: boolean;
    }>(),
    {
      label: "",
      inputType: "text",
    },
  );

  const onChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    let value: string | number = target.value;

    modelValue.value = value;
    if (props.onChange) props.onChange(value);
  };
</script>

<template>
  <div class="w-full">
    <input
      :type="inputType"
      v-model="modelValue"
      @input="onChange"
      :disabled="disabled"
      :placeholder="placeholder"
      class="px-4 py-2.5 text-sm w-full placeholder:text-sm font-normal placeholder:text-gray-400 border-0 outline-0 text-gray-800 disabled:text-gray-500 disabled:bg-50 rounded"
    />
  </div>
</template>
