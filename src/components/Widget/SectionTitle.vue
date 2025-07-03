<script setup>
import BaseTitle from '../Elements/BaseTitle.vue';
import SubTitle from '../Elements/SubTitle.vue';

defineProps({
  title: String,
  subTitle: String
})
</script>

<template>
  <div class="section-header">
    <SubTitle data-zems="animate__slideInUp" class="animate__animated animate__faster">{{ subTitle }}</SubTitle>
    <BaseTitle data-zems="animate__slideInUp" class="animate__animated animate__fast">{{ title }}</BaseTitle>
  </div>
</template>

<style scoped>
.sub-title {
  position: relative;
  display: inline-block;
  font-weight: 500;
  padding: 0.75rem 1rem;
  overflow: hidden;
  text-transform: uppercase;
}
.sub-title::before,
.sub-title::after {
  content: '';
  position: absolute;
  height: 3px;
  width: 40%;
  bottom: 0;
  background: var(--primary-light-color);
  z-index: 0;
}
.sub-title::before {
  left: 0;
}
.sub-title::after {
  right: 0;
}
</style>
