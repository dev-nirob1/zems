<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';

const founderData = {
    image: "https://images.pexels.com/photos/901424/pexels-photo-901424.jpeg?_gl=1*1od4usr*_ga*OTAzOTgwMTguMTczNzAwNTI1OA..*_ga_8JE65Q40S6*czE3NTA4NzM4MjIkbzE4JGcxJHQxNzUwODc0MDQ4JGo0NSRsMCRoMA..",
  intro: {
    title: "Meet the Visionary",
    description: "Driven by innovation and a passion for solving real-world problems, our founder laid the foundation for this company to empower businesses through smart technology solutions."
  },
  cards: [
    {
      title: "Leadership & Mission",
      description: "With 10+ years of experience, our founder leads with purpose and a vision to build impactful software."
    },
    {
      title: "Innovation First",
      description: "From the first prototype to global reach, innovation has guided every decision and fueled lasting growth."
    }
  ]
};

</script>

<template>
  <section class="container founder">
    <div class="large-2 gap-2">
      <div class="founder-image bg-light flex align-center justify-center order-2 large-order-1">
        <BaseImage
          :image="founderData.image"
          alt="founder image" />
      </div>
      <div class="order-1 large-order-2">
        <SectionTitle class="mb-1" title="Meet Our Inspiring Founder" sub-title="Founder Spotlight" />

        <div class="mb-1">
          <SubTitle  data-zems="animate__slideInUp" class="animate__animated">{{founderData.intro.title}}</SubTitle>
          <BaseParagraph data-zems="animate__slideInUp" class="animate__animated">
            {{founderData.intro.description}}
          </BaseParagraph>
        </div>
        <div class="medium-2 gap-1">
          <div class="founder-card">
            <div class="py-1">
              <i class="fa-solid fa-user-tie fa-2x"></i>
            </div>
            <SubTitle>{{founderData.cards[0].title}}</SubTitle>
            <BaseParagraph>
             {{founderData.cards[0].description}}
            </BaseParagraph>
          </div>
          <div class="founder-card">
            <div class="py-1">
              <i class="fa-solid fa-lightbulb fa-2x"></i>
            </div>
            <SubTitle>{{founderData.cards[1].title}}</SubTitle>
            <BaseParagraph>
             {{founderData.cards[1].description}}
            </BaseParagraph>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.founder {
  padding: 3.75rem 0;
}
.founder-image {
  padding: 1rem;
}
.founder-image img {
  height: 280px;
  width: 280px;
  object-fit: cover;
}
.founder-card {
  padding: 1rem;
  background-color: rgb(from var(--primary-color) r g b/ 80%);
  color: var(--white-color);
}

@media (min-width: 992px) {
  .founder-image {
    padding: 4rem;
  }
  .founder-image img {
    height: 400px;
    width: 350px;
  }
}
</style>
