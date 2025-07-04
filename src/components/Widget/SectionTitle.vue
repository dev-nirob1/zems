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

<style>
.section-header .sub-title {
  position: relative;
  display: inline-block;
  font-weight: 500;
  padding: 0.75rem 0;
  overflow: hidden;
  text-transform: uppercase;
}
.section-header .sub-title::before,
.section-header .sub-title::after {
  content: '';
  position: absolute;
  height: 2px;
  width: 40%;
  bottom: 0;
  background: var(--primary-light-color);
  z-index: 0;
  white-space: nowrap;
}
.section-header .sub-title::before {
  left: 0;
}
.section-header .sub-title::after {
  right: 0;
}
</style>
