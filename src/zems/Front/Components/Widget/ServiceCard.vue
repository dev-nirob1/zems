<script setup>
import BaseImage from '@/components/Elements/BaseImage.vue';
import { RouterLink } from 'vue-router';
defineProps({
  service: {
    type: Object
  }
})
</script>

<template>
  <div class="service-card">
    <BaseImage class="graphic-img" :image="service.icon" alt="image"/>
    <div class="icon">
      <BaseImage :image="service.icon" alt="image"/>
    </div>
    <div class="mt-1">
      <SubTitle>{{ service.title }}</SubTitle>
      <BaseParagraph>{{ service.description }}</BaseParagraph>
      <RouterLink to="">Learn More <i class="fas fa-arrow-right"></i></RouterLink>
    </div>
  </div>
</template>

<style scoped>
.service-card {
  position: relative;
  border-radius: .75rem;
  padding: 2rem 1.5rem;
  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
  cursor: pointer;
  transition: all 0.3s ease;
}
.graphic-img {
  position: absolute;
  bottom: .5rem;
  right: .5rem;
  height: 150px;
  width: 150px;
  opacity: .15;
}
.service-card p {
  margin: .75rem 0;
}
.service-card:hover {
  transform: translateY(-.5rem);
}
.service-card a,
.service-card i {
  transition: all .3s ease-in-out;
}
.service-card a {
  text-decoration: none;
  color: var(--primary-color);
  /* padding: .5rem 0; */
  display: flex;
  align-items: center;
  gap: .5rem;
}
.service-card a:hover i {
  padding-left: .5rem;
}
</style>
