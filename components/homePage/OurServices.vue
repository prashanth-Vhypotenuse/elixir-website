<script setup lang="ts">
  import Heading3 from "../headings/Heading3.vue";
  import Heading5 from "../headings/Heading5.vue";

  type Tservice = {
    imgPath: string;
    serviceTitle: string;
    serviceDescription: string;
    linkPath: string;
  };
  const services: Tservice[] = [
    {
      imgPath: Images.serviceImage1,
      serviceTitle: "Business Consulting",
      serviceDescription:
        "As one of the world’s largest accountancy networks, elixir helps a diverse range of clients with a diverse range of needs.This is especially true of our Advisory Practice, which provides corporate finance and transaction services, business restructuring.",
      linkPath: "/",
    },
    {
      imgPath: Images.serviceImage2,
      serviceTitle: "Tax consulting",
      serviceDescription:
        "Elixir serves clients across the country and around the world as they navigate an increasingly complex tax landscape. Our tax professionals draw on deep experience and industry-specific knowledge to deliver clients the insights and innovation they need.",
      linkPath: "/",
    },
    {
      imgPath: Images.serviceImage3,
      serviceTitle: "Advisory",
      serviceDescription:
        "To help you understand what this road looks like, we surveyed 1165 digital marketers across Europe and North America to explore current trends and priorities in digital marketing.",
      linkPath: "/",
    },
  ];

  type TadditionalService = {
    icon: string;
    title: string;
    description: string;
    linkPath?: string;
    linkText?: string;
    linkIcon?: string;
  };
  const additionalServices: TadditionalService[] = [
    {
      icon: "fa6-solid:credit-card",
      title: "Special financing",
      description: "Apply for special financial support and earn exclusive rewards.",
    },
    {
      icon: "fa6-solid:comment-dots",
      title: "Chat with team",
      description: "Have a question? Chat online with an expert.",
      linkPath: "/",
      linkIcon: "fa6-solid:arrow-up-right-from-square",
      linkText: "Start chatting",
    },
    {
      icon: "fa6-solid:phone",
      title: "Call a specialist",
      description: "Our 24/7 support team is ready for you at 1-800-MY-Elixir.",
    },
  ];
</script>

<template>
  <section class="bg-whiteColor md:bg-lightGrayColor">
    <div class="container">
      <div class="flex flex-col items-center mb-10">
        <Heading3 heading="Our Services" />
        <hr class="w-16 h-1 bg-primaryColor mt-2" />
      </div>

      <div v-for="(service, index) in services" :key="service.serviceTitle">
        <div class="grid grid-cols-1 md:grid-cols-2 bg-whiteColor">
          <img
            :src="service.imgPath"
            :alt="service.serviceTitle + 'image'"
            :class="[index % 2 ? 'md:order-2' : 'md:order-1']"
          />
          <div :class="[index % 2 ? 'md:order-1' : 'md:order-2', 'p-4 md:p-14']">
            <div class="flex flex-col gap-4">
              <Heading5 :heading="service.serviceTitle" />

              <p>{{ service.serviceDescription }}</p>

              <NuxtLink
                :to="service.linkPath"
                class="flex gap-2 items-center font-semibold hover:underline !text-primaryColor"
              >
                Learn More
                <Icon
                  name="fa6-solid:arrow-right-long"
                  style="color: var(--gray-color)"
                  size="20px"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 pt-10 md:pt-20">
        <div v-for="service in additionalServices">
          <div class="flex items-center gap-3">
            <Icon :name="service.icon" size="24px" style="color: var(--primary-color)" />
            <Heading5 :heading="service.title" />
          </div>
          <p class="pt-3">
            {{ service.description }}

            <NuxtLink
              v-if="service.linkPath"
              class="font-semibold inline-flex items-center gap-2"
              :to="service.linkPath"
            >
              {{ service.linkText }}
              <Icon
                v-if="service.linkIcon"
                :name="service.linkIcon"
                size="16px"
                style="color: var(--primary-color)"
              />
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
