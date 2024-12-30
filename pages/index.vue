<script lang="ts" setup>
  import Heading4 from "~/components/headings/Heading4.vue";
  import GlobalLeadership from "~/components/homePage/GlobalLeadership.vue";
  import LatestNews from "~/components/homePage/LatestNews.vue";
  import OurServices from "~/components/homePage/OurServices.vue";
  import Partner from "~/components/homePage/Partner.vue";
  import RequestACallBack from "~/components/homePage/RequestACallBack.vue";
  import ThingsYouGet from "~/components/homePage/ThingsYouGet.vue";
  import WelcomeToElixir from "~/components/homePage/WelcomeToElixir.vue";
  import WhyChooseUs from "~/components/homePage/WhyChooseUs.vue";
</script>

<template>
  <!-- <section class="bg-primaryColor">
    <div class="container">
      <Heading1 heading="Expert Consultants" heading-class="text-whiteColor" />
    </div>
  </section> -->
  <WelcomeToElixir />

  <OurServices />

  <WhyChooseUs />

  <!-- Contact Link -->
  <section class="bg-primaryColor">
    <div class="container flex flex-col md:flex-row gap-5 md:gap-10 md:items-center">
      <Heading4
        heading="If you have any query related investment... we are available 24/7"
        heading-class="text-whiteColor"
      />
      <div class="flex">
        <Button label="Contact Us" btn-class="btn-white whitespace-nowrap" />
      </div>
    </div>
  </section>

  <ThingsYouGet />

  <RequestACallBack />

  <GlobalLeadership />

  <Partner />

  <LatestNews />
</template>
