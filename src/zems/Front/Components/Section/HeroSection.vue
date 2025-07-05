<script setup>
const heroContent = {
  title: "High-Performance Software Solutions",
 description: "We build custom software that solves business challenges - from web apps to enterprise platforms, we bring your vision to life.",
  image: "https://zems.uk/uploads/media/1744746136.webp"
}
</script>

<template>
  <section class="hero">
    <div class="container medium-2 align-center gap-2 pt-5">
      <!-- content container  -->
      <div>
        <HeroTitle data-zems="animate__fadeInUp" class="animate__animated">
          {{heroContent.title}}
        </HeroTitle>
        <BaseParagraph data-zems="animate__fadeInUp" class="animate__animated">
          {{heroContent.description}}
        </BaseParagraph>
        <!-- button container  -->
        <div class="flex align-center gap-1">
          <BaseButton data-zems="" class="bg-primary text-white flex anmate__animated">
            OUR SERVICES <i class="fa-solid fa-arrow-right"></i>
          </BaseButton>
          <BaseButton data-zems="animate__fadeInUp" class="animate__animated">
            LEARN MORE
          </BaseButton>
        </div>
      </div>
      <!-- image container  -->
      <div class="width-full">
        <BaseImage class="width-full" :image="heroContent.image" alt="hero-image" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 3.75rem 0;
  min-height: 100vh;
  background-color: rgb(from var(--primary-color) r g b / 10%);
}

.hero .btn {
  padding: 1rem;
}
.hero p {
  font-size: 1.15rem;
}
@media (min-width: 768px) {
  .hero .btn {
    padding: 1.25rem 2rem;
  }
}
</style>
