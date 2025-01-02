<script lang="ts" setup>
  const navBarList = ref([
    {
      label: "Home",
      path: "/",
      childList: [
        { label: "Slider Header", path: "/" },
        { label: "Slider Classic", path: "/" },
        { label: "Static Header", path: "/" },
        { label: "Static Classic", path: "/" },
        { label: "Youtube Background", path: "/" },
        { label: "Youtube Classic", path: "/" },
        { label: "Self-hosted Video", path: "/" },
        { label: "Self-hosted Classic", path: "/" },
      ],
    },
    {
      label: "Pages",
      path: "/",
      childList: [
        { label: "Services", path: "/" },
        { label: "About", path: "/" },
        { label: "Alumni", path: "/" },
        { label: "Blank Page", path: "/" },
        { label: "404 Page", path: "/" },
        { label: "Login", path: "/" },
        { label: "Registration", path: "/" },
      ],
    },
    {
      label: "News",
      path: "/",
      childList: [
        { label: "Newsroom", path: "/" },
        { label: "Single News", path: "/" },
      ],
    },
    {
      label: "Elements",
      path: "/",
      childList: [
        { label: "Buttons", path: "/" },
        { label: "Colors", path: "/" },
        { label: "Google Map", path: "/" },
        { label: "Grid", path: "/" },
        { label: "Icons", path: "/" },
        { label: "Layout Helpers", path: "/" },
        { label: "Modal Video", path: "/" },
        { label: "Owl Carousal", path: "/" },
        { label: "Slider", path: "/" },
        { label: "Typography", path: "/" },
      ],
    },
    {
      label: "Contact",
      path: "/",
      childList: [],
    },
  ]);

  const activeLabel = ref("");
  const showHeader = ref(false);
</script>

<template>
  <!-- nav top banner -->
  <div class="hidden md:block bg-primaryColor py-5">
    <div class="px-[2rem] lg:px-[8rem] flex justify-between">
      <div class="flex gap-10 items-center">
        <div class="hidden lg:flex gap-2">
          <Icon name="fa-solid:map-marker-alt" style="color: #fdd428" />
          <p class="font-bold text-fs--1 text-whiteColor">1010 Avenue, New York, NY 10018 US.</p>
        </div>

        <div class="flex gap-2">
          <Icon name="fa-solid:phone-alt" style="color: #fdd428" />
          <p class="font-bold text-fs--1 text-whiteColor">212 386 5575, 212 386 5576</p>
        </div>
      </div>

      <div class="flex gap-2">
        <Icon name="fa-solid:clock" style="color: #fdd428" />
        <p class="font-bold text-fs--1 text-whiteColor">Mon-Sat, 8.00-18.00. Sunday CLOSED</p>
      </div>
    </div>
  </div>
  <!-- desktop and laptop header -->
  <div
    class="lg:px-[8rem] py-[0.8rem] bg-whiteColor shadow-md hidden lg:flex justify-between items-center sticky top-0 z-50"
  >
    <div class="flex gap-10 items-center">
      <img :src="Images.LogoDark" alt="App-logo" />

      <nav>
        <ul class="flex gap-6">
          <li
            v-for="navItem in navBarList"
            class="flex gap-3 relative"
            @mouseenter="() => (activeLabel = navItem.label)"
            @mouseleave="() => (activeLabel = '')"
          >
            <div class="flex justify-center items-center gap-1 cursor-pointer">
              <NuxtLink
                :to="navItem.path"
                style="color: #2a3855; font-weight: 600; font-size: 1rem"
              >
                {{ navItem.label }}
              </NuxtLink>
              <Icon
                v-if="navItem.childList?.length > 0"
                name="line-md:chevron-down"
                style="color: #2a3855; font-size: 1.1rem"
              />
            </div>

            <ul
              v-if="navItem.childList?.length > 0 && activeLabel == navItem.label"
              class="absolute flex flex-col p-5 gap-2 top-6 bg-whiteColor z-50 rounded nav-dropdown-container"
            >
              <li
                v-for="subItem in navItem.childList"
                class="whitespace-nowrap text-[.75019rem] font-[600] text-primaryColor hover:text-black"
                @click="() => (activeLabel = '')"
              >
                <NuxtLink :to="subItem.path">{{ subItem.label }}</NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>

    <div>
      <Button label="Purchase" btn-class="btn-outline-primary" />
    </div>
  </div>

  <!-- mobile header -->
  <div class="px-[2rem] py-[0.8rem] bg-whiteColor shadow-md sticky top-0 lg:hidden z-50">
    <div class="flex justify-between items-center">
      <div class="flex gap-10 items-center">
        <img :src="Images.LogoDark" alt="App-logo" />
      </div>

      <div @click="() => (showHeader = !showHeader)" class="cursor-pointer">
        <span v-if="showHeader == false">
          <Icon name="fa6-solid:bars" size="1.2rem" />
        </span>
        <span v-else>
          <Icon name="fa6-solid:x" size="1.2rem" />
        </span>
      </div>
    </div>

    <div v-if="showHeader" class="pt-5">
      <nav>
        <ul class="flex gap-3 flex-col">
          <li
            v-for="navItem in navBarList"
            class="flex flex-col gap-2"
            @click="
              () => {
                if (navItem.label === activeLabel) {
                  activeLabel = '';
                } else {
                  activeLabel = navItem.label;
                }
              }
            "
          >
            <div class="flex justify-between items-center gap-1 cursor-pointer">
              <NuxtLink
                :to="navItem.path"
                style="color: #2a3855; font-weight: 600; font-size: 1rem"
              >
                {{ navItem.label }}
              </NuxtLink>
              <Icon
                v-if="navItem.childList?.length > 0"
                name="line-md:chevron-down"
                style="color: #2a3855; font-size: 1.1rem"
              />
            </div>

            <ul
              v-if="navItem.childList?.length > 0 && activeLabel == navItem.label"
              class="flex flex-col p-5 gap-2 bg-white z-50 rounded nav-dropdown-container"
            >
              <li
                v-for="subItem in navItem.childList"
                class="pl-5 whitespace-nowrap text-[.75019rem] font-[600] text-primaryColor hover:text-black"
                @click="
                  () => {
                    activeLabel = '';
                    showHeader = false;
                  }
                "
              >
                <NuxtLink :to="subItem.path">{{ subItem.label }}</NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="pt-5 pb-2">
        <Button label="Purchase" btn-class="btn-outline-primary btn-block" />
      </div>
    </div>
  </div>
</template>

<style>
  .nav-dropdown-container {
    box-shadow: 0 0 1.8rem 0 rgba(0, 0, 0, 0.08);
  }
</style>
