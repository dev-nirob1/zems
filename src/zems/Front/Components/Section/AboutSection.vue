<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';

</script>

<template>
  <section class="about">
    <div class="container medium-2 gap-3 align-center">
      <!-- img container  -->
      <div class="width-full height-full">
        <BaseImage image="https://zems.uk//uploads/media/1744748295.png" alt="about-image" />
      </div>
      <!-- about us content  -->
      <div>
        <SectionTitle title="Behind Zems Success" sub-title="About Us"/>
        <BaseParagraph data-zems="animate__fadeInRight" class="animate__animated animate__faster">Zems empowers businesses with cutting-edge software solutions designed to streamline operations,
          boost efficiency, and drive growth. Our customizable platforms adapt to your unique workflow needs.
        </BaseParagraph>
        <ul data-zems="animate__fadeInRight" class="animate__animated animate__fast">
          <ListItem>12+ years of industry-specific software expertise</ListItem>
          <ListItem>500+ successful implementations across industries</ListItem>
          <ListItem>Dedicated support teams for every clien</ListItem>
          <ListItem>Continuous innovation with quarterly feature updates</ListItem>
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
.about .section-header .title {
  color: var(--primary-light-color);
}
.about p {
  font-size: 1.1rem;
}
.about img {
  width: 100%;
  height: 80vh;
  object-fit: cover;
}

.about .btn {
  padding: 1rem;
  font-size: 1.15rem;
}
.about ul {
  list-style: none;
  padding-left: 1rem;
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
  color: var(--primary-color);
}
@media (min-width: 768px){
 .about .btn {
  padding: 1.25rem 2rem;
}
}
</style>
