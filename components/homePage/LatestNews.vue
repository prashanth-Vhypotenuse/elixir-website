<script lang="ts" setup>
  import Heading3 from "../headings/Heading3.vue";
  import Heading5 from "../headings/Heading5.vue";

  interface IGlobalLeader {
    newsName: string;
    newsBy: string;
    imgPath: string;
    description: string;
    newsLink: string;
  }

  const latestNews: IGlobalLeader[] = [
    {
      newsName: "Tax impacts of lease mean accounting change",
      newsBy: "By Paul O'Sullivan",
      imgPath: Images.leaderImage1,
      description:
        "HMRC released a consultation document to flag some potential tax impacts that a forthcoming change...",
      newsLink: "/",
    },
    {
      newsName: "What brexit means for data protection law",
      newsBy: "By Enrico Ambrosi",
      imgPath: Images.leaderImage2,
      description:
        "Assuming that the referendum is not ignored completely, there are two possible futures for the UK...",
      newsLink: "/",
    },
    {
      newsName: "The growing meanace of social engineering fraud",
      newsBy: "By Robson",
      imgPath: Images.leaderImage3,
      description:
        "Social engineering involves the collection of information from various sources about a target...",
      newsLink: "/",
    },
  ];
</script>

<template>
  <section class="bg-whiteColor">
    <div class="container">
      <div class="flex flex-col items-center mb-10">
        <Heading3 heading="Global Leadership" />
        <hr class="w-16 h-1 bg-primaryColor mt-2" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        <!-- Card -->
        <div
          v-for="news in latestNews"
          :key="news.newsName"
          class="bg-whiteColor text-left rounded-md"
        >
          <img :src="news.imgPath" :alt="news.newsName" class="rounded-t-md w-full" />

          <div class="p-5" data-aos="fade-up">
            <Heading5 :heading="news.newsName" />
            <p class="text-sm pt-1">{{ news.newsBy }}</p>
            <p class="mt-4 md:mt-6">{{ news.description }}</p>
            <NuxtLink
              :to="news.newsLink"
              class="mt-4 flex gap-2 items-center font-semibold hover:underline !text-primaryColor"
            >
              Learn More
              <Icon
                name="fa6-solid:arrow-right-long"
                style="color: var(--gray-color)"
                size="1.2rem"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
