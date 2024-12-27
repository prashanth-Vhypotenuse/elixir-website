<script setup lang="ts">
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
</script>

<template>
  <div
    class="px-[2rem] lg:px-[10rem] py-[1.5rem] bg-white shadow-md flex justify-between opacity-90 sticky top-0"
  >
    <div class="flex gap-10">
      <img :src="Images.Logo" alt="App-logo" />

      <nav>
        <ul class="flex gap-6">
          <li
            v-for="navItem in navBarList"
            class="flex gap-3 relative"
            @mouseenter="() => (activeLabel = navItem.label)"
            @mouseleave="() => (activeLabel = '')"
          >
            <NuxtLink :to="navItem.path">{{ navItem.label }}</NuxtLink>
            <span></span>

            <ul
              v-if="
                navItem.childList?.length > 0 && activeLabel == navItem.label
              "
              class="absolute top-6 bg-white drop-shadow-lg z-40 rounded"
            >
              <li
                v-for="subItem in navItem.childList"
                class="whitespace-nowrap px-5 py-1.5"
              >
                <NuxtLink :to="subItem.path">{{ subItem.label }}</NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>

    <div>
      <Button label="Purchase" button-variant="outlined" />
    </div>
  </div>
</template>
