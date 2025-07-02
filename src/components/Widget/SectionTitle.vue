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
  font-weight: 700;
  color: #fff;
  background: linear-gradient(to right, var(--primary-light-color), var(--secondary-color));
  padding: 0.25rem 1.5rem;
  overflow: hidden;
  text-transform: uppercase;
}

.sub-title::before,
.sub-title::after {
  content: '';
  position: absolute;
  height: 100%;
  width: 20px;
  top: 0;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.2));
  transform: skewX(-20deg);
  z-index: 0;
}

.sub-title::before {
  left: 0;
}

.sub-title::after {
  right: 0;
}


</style>
