<script lang="ts" setup>
  import Heading3 from "../headings/Heading3.vue";
  import Heading5 from "../headings/Heading5.vue";

  type TCompanyMetric = {
    icon: string;
    title: string;
    description: string;
  };

  const companyMetricsList: TCompanyMetric[] = [
    {
      icon: "ion:bar-chart",
      title: "Business Consulting",
      description: "Solution for every business related problems, readily and skillfully.",
    },
    {
      icon: "ion:md-alarm",
      title: "Risk Management",
      description: "Calculate every possible risk in your business, take control over them.",
    },
    {
      icon: "ion:android-bulb",
      title: "Market Research",
      description: "Know the market before taking any step, reduce risks before you go.",
    },
    {
      icon: "ion:md-headset",
      title: "Quality Services",
      description: "Experience unparalleled service, from beginning to final construction.",
    },
  ];

  type TCompanySupport = {
    icon: string;
    title: string;
    description: string;
  };
  const companySupportList: TCompanySupport[] = [
    {
      icon: "fa-solid:users",
      title: "Awesome Team",
      description:
        "Before talking destination, we shine a spotlight across your organization to fully understand it.",
    },
    {
      icon: "fa-solid:comments",
      title: "Excellent Support",
      description:
        "If you face any trouble, you can always let our dedicated support team help you. They are ready for you 24/7.",
    },
    {
      icon: "fa-solid:bolt",
      title: "Faster Performance",
      description:
        "We develop a systematic well-ordered process of analysis, from concept through implementation.",
    },
  ];

  const showYoutubeModal = ref(false);

  const toggleModal = () => {
    showYoutubeModal.value = !showYoutubeModal.value;

    if (showYoutubeModal.value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  const closeModal = () => {
    showYoutubeModal.value = false;
    document.body.style.overflow = "visible";
  };

  // Listen for the Escape key to close the modal
  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  onMounted(() => {
    window.addEventListener("keydown", handleEscapeKey);
  });

  onUnmounted(() => {
    window.removeEventListener("keydown", handleEscapeKey);
  });
</script>

<template>
  <section>
    <div class="container">
      <div class="flex flex-col items-center mb-10">
        <Heading3 heading="Welcome to the Elixir" />
        <p class="max-w-[30rem] text-center pt-2">
          Get expert consultancy and support with Elixir, an advisory firm that stand by your side
          always.
        </p>
        <hr class="w-16 h-1 bg-primaryColor mt-2" />
      </div>

      <div class="py-8 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="companyMetric in companyMetricsList"
          :key="companyMetric.title"
          class="flex flex-col gap-5 items-center p-5"
        >
          <div class="w-24 h-24 rounded-full border flex items-center justify-center">
            <Icon :name="companyMetric.icon" size="36px" style="color: var(--black-color)" />
          </div>

          <Heading5 heading="Business Consulting" heading-class="text-center" />

          <p class="text-center">Solution for every business related problems, readily</p>
        </div>
      </div>

      <div class="relative my-10">
        <img :src="Images.videoScreenShotImage" alt="Video Screenshot Image" />

        <!-- <div class="absolute inset-0 flex items-center justify-center"> -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div class="border-8 rounded-full flex items-center cursor-pointer" @click="toggleModal">
            <Icon name="ion:md-play-circle" size="100px" style="color: white; font-size: 80px" />
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 pt-10 md:pt-20">
        <div v-for="support in companySupportList">
          <div class="flex items-center gap-3">
            <Icon :name="support.icon" size="24px" style="color: var(--primary-color)" />
            <Heading5 :heading="support.title" />
          </div>
          <p class="pt-3">
            {{ support.description }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Youtube modal -->
  <div v-if="showYoutubeModal">
    <div class="fixed top-0 left-0 w-screen h-screen bg-modalOverlayColor z-[99] opacity-95"></div>

    <div class="fixed left-1/2 z-[1000] top-1/2 transform -translate-y-1/2 -translate-x-1/2">
      <button class="absolute -top-6 -left-7" @click="toggleModal">
        <Icon name="ion:close-outline" size="30px" style="color: var(--white-color)" />
      </button>
      <iframe
        class="w-[80vw] h-[80vh] lg:w-[70vw] lg:h-[70vh] rounded-md"
        src="https://www.youtube.com/embed/jlWMTNZNOc0?si=Fy_lK-16moAF00oV"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
