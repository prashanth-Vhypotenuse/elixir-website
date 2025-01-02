<script lang="ts" setup>
  import { onMounted, onUnmounted, ref } from "vue";

  type TClient = {
    name: string;
    designation: string;
    clientImg: string;
    description: string;
  };

  const clients: TClient[] = [
    {
      name: "Michael Clarke",
      designation: "CEO, A.E.T Institute",
      clientImg: Images.clientImage1,
      description:
        "Their work on our website and Internet marketing has made a significant difference to our business.",
    },
    {
      name: "Maria Sharapova",
      designation: "Managing Director, Themewagon Inc.",
      clientImg: Images.clientImage2,
      description:
        "Writing case studies was a daunting task for us. We didn’t know where to begin or what questions to ask.",
    },
    {
      name: "David Beckham",
      designation: "Chairman, Harmony Corporation",
      clientImg: Images.clientImage3,
      description:
        "As a sales gamification company, we were skeptical to work with a consultant to optimize our sales emails.",
    },
  ];

  const activeSlideIndex = ref(0);
  const intervalId = ref<number | null | any>(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalId.value = setInterval(() => {
      activeSlideIndex.value = (activeSlideIndex.value + 1) % clients.length;
    }, 10000);
  };

  const stopAutoSlide = () => {
    if (intervalId.value !== null) {
      clearInterval(intervalId.value);
      intervalId.value = null;
    }
  };

  const resetAutoSlide = () => {
    stopAutoSlide();
    startAutoSlide();
  };

  const handleSlideChange = (type: "prev" | "next") => {
    stopAutoSlide();
    if (type === "prev") {
      activeSlideIndex.value =
        activeSlideIndex.value === 0 ? clients.length - 1 : activeSlideIndex.value - 1;
    } else {
      activeSlideIndex.value = (activeSlideIndex.value + 1) % clients.length;
    }
    resetAutoSlide();
  };

  let startX = 0;

  const onTouchStart = (event: TouchEvent) => {
    stopAutoSlide();
    startX = event.touches[0].clientX;
  };

  const onTouchEnd = (event: TouchEvent) => {
    const endX = event.changedTouches[0].clientX;
    if (startX - endX > 50) handleSlideChange("next");
    if (startX - endX < -50) handleSlideChange("prev");
    resetAutoSlide();
  };

  const onDotClick = (index: number) => {
    stopAutoSlide();
    activeSlideIndex.value = index;
    resetAutoSlide();
  };

  const onMouseOver = () => stopAutoSlide();
  const onMouseOut = () => resetAutoSlide();

  onMounted(() => {
    startAutoSlide();
  });
  onUnmounted(() => {
    stopAutoSlide();
  });
</script>

<template>
  <section
    class="relative"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
    @mouseover="onMouseOver"
    @mouseout="onMouseOut"
  >
    <div class="container relative group overflow-hidden">
      <!-- Sliding Container -->
      <div
        class="flex transition-transform duration-700 ease-in-out"
        :style="{ transform: `translateX(-${activeSlideIndex * 100}%)` }"
      >
        <div v-for="(client, index) in clients" :key="index" class="flex-shrink-0 w-full">
          <ClientTestimonialCard :clientDetails="client" />
        </div>
      </div>

      <!-- Navigation Buttons -->
      <button
        @click="() => handleSlideChange('prev')"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <Icon name="ion:chevron-back-outline" size="1.4rem" />
      </button>
      <button
        @click="() => handleSlideChange('next')"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <Icon name="ion:chevron-forward-outline" size="1.4rem" />
      </button>

      <!-- Dots Navigation -->
      <div class="flex justify-center mt-6 space-x-2">
        <button
          v-for="(_client, index) in clients"
          :key="index"
          @click="onDotClick(index)"
          :class="[
            'w-3 h-3 rounded-full transition-all duration-300',
            activeSlideIndex === index ? 'bg-primaryColor' : 'bg-gray-300',
          ]"
        ></button>
      </div>
    </div>
  </section>
</template>
