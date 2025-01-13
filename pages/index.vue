<script lang="ts" setup>
  import Heading4 from "~/components/headings/Heading4.vue";
  import BannerCarousel from "~/components/homePage/BannerCarousel.vue";
  import Achivements from "~/components/homePage/Achivements.vue";
  import ClientTestimonialSlider from "~/components/homePage/ClientTestimonialSlider.vue";
  import GlobalLeadership from "~/components/homePage/GlobalLeadership.vue";
  import LatestNews from "~/components/homePage/LatestNews.vue";
  import OurServices from "~/components/homePage/OurServices.vue";
  import Partner from "~/components/homePage/Partner.vue";
  import RequestACallBack from "~/components/homePage/RequestACallBack.vue";
  import ThingsYouGet from "~/components/homePage/ThingsYouGet.vue";
  import WelcomeToElixir from "~/components/homePage/WelcomeToElixir.vue";
  import WhyChooseUs from "~/components/homePage/WhyChooseUs.vue";
  import { GetPageContentApi } from "~/services/home";

  const contactText = ref<string>("");
  const defaultContactText = "If you have any query related investment... we are available 24/7";

  async function getServicesData() {
    const { data = null, status = 500 } = await GetPageContentApi({ Type: "Contact" });

    if (status == 200) {
      contactText.value = getLength(data) > 0 ? data[0].description : defaultContactText;
    } else {
      contactText.value = defaultContactText;
    }
  }

  onMounted(() => {
    Promise.all([getServicesData()]);
  });
</script>

<template>
  <BannerCarousel />

  <WelcomeToElixir />

  <OurServices />

  <WhyChooseUs />

  <!-- Contact Link -->
  <section class="bg-primaryColor">
    <div class="container flex flex-col md:flex-row gap-5 md:items-center">
      <Heading4 :heading="contactText" heading-class="text-whiteColor w-full" />
      <div class="flex">
        <Button label="Contact Us" btn-class="btn-white whitespace-nowrap" />
      </div>
    </div>
  </section>

  <ThingsYouGet />

  <RequestACallBack />

  <GlobalLeadership />

  <Achivements />

  <ClientTestimonialSlider />

  <Partner />

  <LatestNews />
</template>
