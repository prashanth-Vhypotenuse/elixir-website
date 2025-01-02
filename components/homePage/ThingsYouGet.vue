<script lang="ts" setup>
  import Heading3 from "../headings/Heading3.vue";
  import Heading5 from "../headings/Heading5.vue";

  type TThingsYouGet = {
    icon: string;
    title: string;
    description: string;
  };

  const thingsYouGetList: TThingsYouGet[] = [
    {
      icon: "fa6-solid:building-circle-check",
      title: "Creative Support",
      description:
        "We transform brands, grow businesses, and tell brand and product stories in a most creative way.",
    },
    {
      icon: "fa6-solid:envelope",
      title: "Creating Experiences",
      description:
        "We transform brands, grow businesses, and tell brand and product stories in a most creative way.",
    },
    {
      icon: "fa6-solid:building-columns",
      title: "Product Consulting",
      description:
        "We guide you through the pipelines that generate new products with higher potential and lower risk.",
    },
    {
      icon: "fa6-solid:globe",
      title: "Business Boosting",
      description:
        "We provide energy-efficient and environmentally conservative solutions to our clients to boost their business.",
    },
    {
      icon: "fa6-solid:money-bill-1",
      title: "Strategic Approach",
      description:
        "Based on solid strategic framework and real, relevant research, we create prototypes, not presentations.",
    },
    {
      icon: "fa6-solid:chart-line",
      title: "Logistic Consulting",
      description:
        "We work buy side and sell side to give our clienrts hard hitting answers and focus hard on best opportunities.",
    },
  ];
</script>

<template>
  <section class="bg-whiteColor">
    <div class="container">
      <div class="flex flex-col items-center mb-12">
        <Heading3 heading="Things You Get" />
        <hr class="w-16 h-1 bg-primaryColor mt-2" />
      </div>

      <!-- Card -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 place-content-center"
      >
        <div
          v-for="item in thingsYouGetList"
          class="flex flex-col items-center justify-center text-center gap-2"
        >
          <Icon :name="item.icon" size="1.9rem" style="color: var(--primary-color)" />

          <Heading5 :heading="item.title" />

          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
