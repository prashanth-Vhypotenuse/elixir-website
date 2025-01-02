<script lang="ts" setup>
  import { FOOTER_LINKS, SOCIAL_MEDIA_LINKS } from "~/constants/static-data";
  import Button from "./Button.vue";
  import TextInput from "./TextInput.vue";

  const formvalues = {
    email: "",
  };
</script>

<template>
  <section class="bg-secondaryColor w-full">
    <div class="container grid grid-cols-1 lg:grid-cols-2 gap-x-[5rem] gap-y-[2rem]">
      <!-- Sign up email alerts -->
      <div class="bg-primaryColor p-6 md:p-10 lg:p-14 rounded-md">
        <form @submit.prevent="() => console.log('Submit button clicked')">
          <div class="mb-[2rem]">
            <h4 class="text-fs-1 lg:text-fs-2 font-semibold text-whiteColor">
              Sign up for email alerts
            </h4>
            <p class="text-white">Stay current with our latest insights</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div class="md:col-span-3">
              <TextInput
                v-model="formvalues.email"
                placeholder="Email Enter Here"
                :on-change="(value) => (formvalues.email = value)"
              />
            </div>

            <div class="md:col-span-2">
              <Button label="Submit" btn-type="submit" btn-class="btn-warning btn-block" />
            </div>
          </div>
        </form>
      </div>
      <div class="grid grid-cols-2 gap-10 lg:gap-14">
        <ul class="flex flex-col gap-3.5">
          <li v-for="item in FOOTER_LINKS">
            <NuxtLink :to="item.path" class="!text-whiteColor font-medium hover:underline">{{
              item.label
            }}</NuxtLink>
          </li>
        </ul>

        <ul class="flex flex-col gap-3.5">
          <li v-for="item in SOCIAL_MEDIA_LINKS">
            <NuxtLink
              :to="item.path"
              class="!text-white flex gap-2 items-center hover:underline font-semibold"
            >
              <span
                v-if="item.icon"
                class="px-2 py-1.5 flex bg-primaryColor rounded hover:underline"
              >
                <Icon :name="item.icon" style="background: white" />
              </span>
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="bg-primaryColor py-5">
    <div class="container flex flex-col md:flex-row justify-between items-center gap-3">
      <NuxtLink to="/">
        <img :src="Images.LogoLight" alt="app-footer-logo" />
      </NuxtLink>

      <p class="text-white font-semibold text-fs-0">© Copyright 2018 Elixir Inc.</p>

      <NuxtLink to="/" class="!text-white font-semibold text-fs-0 hover:underline">
        Designed by Themewagon
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped></style>
