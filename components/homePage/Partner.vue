<template>
  <section class="bg-lightGrayColor py-10 lg:py-16">
    <ul class="container grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center gap-5">
      <li v-for="partner in partners" :key="partner.srcPath">
        <img :src="partner.srcPath" :alt="partner.alt" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
  type Tpartner = { srcPath: string; alt: string };
  const partners: Tpartner[] = [
    { srcPath: Images.PartnerLogo1, alt: "logo1" },
    { srcPath: Images.PartnerLogo2, alt: "logo2" },
    { srcPath: Images.PartnerLogo3, alt: "logo3" },
    { srcPath: Images.PartnerLogo4, alt: "logo4" },
    { srcPath: Images.PartnerLogo5, alt: "logo5" },
    { srcPath: Images.PartnerLogo6, alt: "logo6" },
  ];
</script>
