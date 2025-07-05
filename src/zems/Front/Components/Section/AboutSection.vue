<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
const aboutData = {
  image: {
    src: "https://zems.uk//uploads/media/1744748295.png",
    alt: "Zems team collaborating on software solutions"
  },
  titles: {
    title: "Behind Zems Success",
    subTitle: "About Zems"
  },
  description: "Zems empowers businesses with cutting-edge software solutions designed to streamline operations, boost efficiency, and drive growth. Our customizable platforms adapt to your unique workflow needs.",
  features: [
    "12+ years of industry-specific software expertise",
    "500+ successful implementations across industries",
    "Dedicated support teams for every client",
    "Continuous innovation with quarterly feature updates"
  ],
}
</script>

<template>
  <section class="about">
    <div class="container medium-2 gap-2 align-center">
      <!-- img container  -->
      <div class="about-image">
        <BaseImage :image="aboutData.image.src" :alt="aboutData.image.alt" />
      </div>

      <!-- about us content  -->
      <div>
        <SectionTitle :title="aboutData.titles.title" :sub-title="aboutData.titles.subTitle"/>
        <BaseParagraph data-zems="animate__fadeInUp" class="animate__animated">
          {{ aboutData.description }}
        </BaseParagraph>
        <ul data-zems="animate__fadeInUp" class="animate__animated">
          <ListItem v-for="(feature, i ) in aboutData.features" :key="i">{{feature}}</ListItem>
        </ul>
        <BaseButton data-zems="animate__fadeInUp" class="bg-primary text-white animate__animated">OUR SERVICES</BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 3.75rem 0;
}
.about-image {
  height: 100%;
  width: 100%;
}
.about-image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.about .btn {
  padding: 1rem;
  font-size: 1.15rem;
}
.about ul li {
  position: relative;
  padding-left: 1rem;
  margin-bottom: .25rem;
}
.about ul li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--primary-light-color);
}

@media (min-width: 768px){
 .about .btn {
  padding: 1.25rem 2rem;
}
}
</style>
