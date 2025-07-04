<script setup>
</script>

<template>
  <section class="hero">
    <div class="container medium-2 align-center gap-2 pt-5">
      <!-- content container  -->
      <div>
        <HeroTitle data-zems="animate__fadeInUp" class="animate__animated">
          High-Performance Software Solutions
        </HeroTitle>
        <BaseParagraph data-zems="animate__fadeInUp" class="animate__animated">
          We design, develop and deploy custom software systems that solve real business challenges.
          Whether you need web applications, mobile solutions, or enterprise platforms,
          our full-stack expertise brings your vision to life.
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
        <BaseImage class="width-full" image="https://zems.uk/uploads/media/1744746136.webp" alt="hero-image" />
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
