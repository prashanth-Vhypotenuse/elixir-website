<script lang="ts" setup>
  import Heading4 from "../headings/Heading4.vue";

  type TformValues = {
    name: string;
    phoneNo: string;
    subject: string;
  };
  const formValues = ref<TformValues>({
    name: "",
    phoneNo: "",
    subject: "",
  });

  const handleFormValueChanges = (fieldName: string, fieldValue: string) => {
    formValues.value = {
      ...formValues.value,
      [fieldName]: fieldValue,
    };
  };

  const handleSubmit = () => {
    console.log("Submit clicked", formValues.value);
  };
</script>

<template>
  <section class="bg-primaryColor">
    <div class="container grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-16">
      <div class="lg:col-span-2 border-2 border-goldColor p-10 text-center rounded-xl">
        <Heading4 heading="Request a call back" />
        <p class="text-whiteColor">
          Would you like to speak to one of our financial advisers over the phone? Just submit your
          details and we’ll be in touch shortly. You can also email us if you would prefer.
        </p>
      </div>
      <form
        @submit.prevent="() => handleSubmit()"
        class="lg:col-span-4 grid grid-cols-2 gap-6 lg:gap-8 place-content-center"
      >
        <div class="col-span-2">
          <Heading4 heading="I would like to discuss:" />
        </div>
        <TextInput
          v-model="formValues.name"
          placeholder="Your Name"
          :on-change="(value) => handleFormValueChanges('name', value)"
        />

        <TextInput
          v-model="formValues.phoneNo"
          placeholder="Phone Number"
          :on-change="(value) => handleFormValueChanges('phoneNo', value)"
        />

        <TextInput
          v-model="formValues.subject"
          placeholder="Subject"
          :on-change="(value) => handleFormValueChanges('subject', value)"
        />

        <Button btn-type="submit" label="Submit" btn-class="btn-warning" />
      </form>
    </div>
  </section>
</template>
