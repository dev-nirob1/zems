<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue';
import BaseImage from '@/components/Elements/BaseImage.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import HeroTitle from '@/components/Elements/HeroTitle.vue';

</script>

<template>
  <section class="hero">
    <div class="container medium-2 align-center gap-2 pt-5">
      <!-- content container  -->
      <div>
        <HeroTitle>
          Transform Your Ideas Into Powerful Software
        </HeroTitle>
        <BaseParagraph>
          We craft custom digital solutions that drive growth.
          From startups to enterprises, our full-cycle development delivers results.
        </BaseParagraph>
        <!-- button container  -->
        <div class="flex align-center gap-1">
          <BaseButton class="bg-primary text-white">
            OUR SERVICES
          </BaseButton>
          <BaseButton>
            LEARN MORE
          </BaseButton>
        </div>
      </div>
      <!-- image container  -->
      <div class="width-full">
        <BaseImage class="width-full" image="https://zems.uk/uploads/media/1744746136.webp" alt="hero-image" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 3.75rem 0;
 background-color: rgb(from var(--primary-color) r g b / 10%);
}
.hero .btn {
  padding: 1rem;
}
.hero p {
  font-size: 1.15rem;
}
@media (min-width: 768px){
 .hero .btn {
  padding: 1.25rem 2rem;
}
}
</style>
