<script setup lang="ts">
  import Heading3 from "../headings/Heading3.vue";
  import Heading5 from "../headings/Heading5.vue";

  type TGlobalLeader = {
    name: string;
    designation: string;
    imgPath: string;
    description: string;
  };

  const globalLeaders: TGlobalLeader[] = [
    {
      name: "Reenal Scott",
      designation: "Advertising Consultant",
      imgPath: Images.leaderImage1,
      description:
        "Reenal Scott is the Founder and CEO of Elixir, which he started from his dorm room in 2013 with 3 people only.",
    },
    {
      name: "Lily Anderson",
      designation: "Activation Consultant",
      imgPath: Images.leaderImage2,
      description:
        "Lily leads Elixir UK and oversees the company’s Customer Operations teams supporting millions ofr users.",
    },
    {
      name: "Thomas Anderson",
      designation: "Change Management Consultant",
      imgPath: Images.leaderImage3,
      description:
        "As the VP of People, Thomas’s focus lies in the development and optimization of talent retention.",
    },
    {
      name: "Legartha Mantana",
      designation: "Brand Management Consultant",
      imgPath: Images.leaderImage4,
      description:
        "As General Counsel of Elixir, Tony oversees global legal activities and policies across all aspects.",
    },
    {
      name: "John Snow",
      designation: "Business Analyst",
      imgPath: Images.leaderImage5,
      description:
        "John has overseen the meteoric growth while protecting scaling its uniquely creative and culture.",
    },
    {
      name: "Ragner Lothbrok",
      designation: "Business Consultant",
      imgPath: Images.leaderImage6,
      description:
        "Ragner, SVP of Engineering, oversees Elixir’s vast engineering organization which drives the core programming.",
    },
  ];
</script>

<template>
  <section class="bg-lightGrayColor">
    <div class="container">
      <div class="flex flex-col items-center mb-10">
        <Heading3 heading="Global Leadership" />
        <hr class="w-16 h-1 bg-primaryColor mt-2" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        <!-- Card -->
        <div v-for="leader in globalLeaders" class="bg-whiteColor text-center rounded-md">
          <img :src="leader.imgPath" :alt="leader.name" class="rounded-t-md w-full" />

          <div class="p-5">
            <Heading5 :heading="leader.name" />
            <p class="text-xs">{{ leader.designation }}</p>
            <p class="mt-4 md:mt-6">{{ leader.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
