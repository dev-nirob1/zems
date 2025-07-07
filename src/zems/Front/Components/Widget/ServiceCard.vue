<script setup>
import BaseImage from '@/components/Elements/BaseImage.vue';
defineProps({
  service: {
    type: Object
  }
})
</script>

<template>
  <div class="service-card">
    <BaseImage class="graphic-img" :image="service.icon" alt="image" />
    <div class="icon">
      <BaseImage :image="service.icon" alt="image" />
    </div>
    <div class="mt-1">
      <SubTitle>{{ service.title }}</SubTitle>
      <BaseParagraph>{{ service.description }}</BaseParagraph>
    </div>
  </div>
</template>

<style scoped>
.service-card {
  position: relative;
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
  width: auto;
  opacity: .05;
}
.service-card .icon {
  width: auto;
  height: 80px;
}
.service-card .icon img {
  height: 100%;
  width: auto;
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
  display: flex;
  align-items: center;
  gap: .5rem;
}
.service-card a:hover i {
  padding-left: .5rem;
}
</style>
