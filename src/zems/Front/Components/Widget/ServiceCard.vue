<script setup>
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import BaseTitle from '@/components/Elements/BaseTitle.vue';
import { RouterLink } from 'vue-router';
defineProps({
  service: {
    type: Object
  }
})
</script>

<template>
  <div class="service-card">
    <div class="icon">
      <img :src="service.icon" alt="icon">
    </div>
    <BaseTitle tag="h5">{{ service.title }}</BaseTitle>
    <BaseParagraph>{{service.description}}</BaseParagraph>
    <RouterLink to="">Learn More <i class="fas fa-arrow-right"></i></RouterLink>
  </div>
</template>

<style scoped>
.service-card {
  border-radius: .75rem;
  padding: 2rem 1.5rem;
  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
  cursor: pointer;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-.5rem);
}

.service-card .icon {
  margin-bottom: 1rem;
}
.service-card a,
.service-card i {
  transition: all .3s ease-in-out;
}
.service-card a {
  text-decoration: none;
  color: var(--secondary-color);
  padding: .5rem 0;
  display:flex;
  align-items: center;
  gap: .5rem;
}
.service-card a:hover i {
  padding-left: .5rem;
}
</style>
