<script setup>
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import BaseTitle from '@/components/Elements/BaseTitle.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="service-card">
    <div class="icon">
      <i class="fas fa-code fa-2x text-primary"></i>
    </div>
    <BaseTitle tag="h5">Web Development</BaseTitle>
    <BaseParagraph>Custom websites and web applications built with modern technologies.</BaseParagraph>
    <RouterLink to="">Learn More <i class="fas fa-arrow-right"></i></RouterLink>
  </div>
</template>

<style scoped>
.service-card {
  border-radius: .75rem;
  padding: 2rem 1.5rem;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-.5rem);
}

.service-card .icon {
  height: 70px;
  width: 70px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  background-color: rgb(from var(--primary-light-color)r g b / 70%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-card a {
  text-decoration: none;
  color: var(--secondary-color);
  padding: .5rem 0;
}
</style>
