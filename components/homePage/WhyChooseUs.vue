<script lang="ts" setup>
  import Heading3 from "../headings/Heading3.vue";
  import Heading5 from "../headings/Heading5.vue";

  type TWhyTochooseUs = {
    icon: string;
    title: string;
    description: string;
  };
  const whyTochooseUsList = [
    {
      icon: "ion:chatbubble-working",
      title: "We Are Professional",
      description:
        "We resource, train, speak, mentor and encourage; marketplace leaders, business owners and career professionals to be effective in the workplace.",
    },
    {
      icon: "ion:color-palette",
      title: "We Are Creative",
      description:
        "With so many factors to consider when deciding how to characterize your company , wouldn’t it be great to have a group of forward-thinking, well-informed individuals on board who know what they’re doing?",
    },
    {
      icon: "ion:ios-timer",
      title: "24/7 Great Support",
      description:
        "Design clever and compelling marketing strategies, improve product positioning, and drive conversion rates, Elixir is all time available to guide you.",
    },
  ];
</script>

<template>
  <section class="bg-whiteColor">
    <div class="container">
      <div class="flex flex-col items-center mb-10">
        <Heading3 heading="Why Choose Elixir" />
        <hr class="w-16 h-1 bg-primaryColor mt-2" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
        <img :src="Images.whyChooseUsImage" alt="why to choose us image" />

        <div class="flex flex-col gap-14">
          <div v-for="item in whyTochooseUsList" class="flex flex-col gap-4">
            <div class="flex gap-3 items-center">
              <Icon :name="item.icon" style="color: var(--primary-color)" size="1.5rem" />
              <Heading5 :heading="item.title" />
            </div>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
