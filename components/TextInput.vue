<template>
  <div class="w-full">
    <input
      :type="inputType"
      v-model="localModelValue"
      @input="onChange"
      :disabled="disabled"
      :placeholder="placeholder"
      class="px-4 py-2 text-sm w-full placeholder:text-gray-400 border-0 outline-0 text-gray-800 disabled:text-gray-500 disabled:bg-50 rounded"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = withDefaults(
  defineProps<{
    label?: string;
    inputType?: string;
    modelValue: string | number;
    onChange: (value: string) => void;
    disabled?: boolean;
    placeholder?: string;
    errorText?: string;
    required?: boolean;
  }>(),
  {
    label: "",
    inputType: "text",
  }
);

const localModelValue = ref<string | number>(props.modelValue || "");
const emit = defineEmits(["update:modelValue"]);

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  let value: string | number = target.value;

  localModelValue.value = value;
  emit("update:modelValue", value);
  if (props.onChange) props.onChange(value);
};

watch(
  () => props.modelValue,
  (newVal: any) => {
    localModelValue.value = newVal;
  }
);
</script>
