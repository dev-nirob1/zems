<script setup>
defineProps({
  title: String,
  subTitle: String
})
</script>

<template>
  <div class="section-header">
    <SubTitle data-zems="animate__slideInUp" class="animate__animated">{{ subTitle }}</SubTitle>
    <BaseTitle data-zems="animate__slideInUp" class="animate__animated">{{ title }}</BaseTitle>
  </div>
</template>

<style>
.section-header .sub-title {
  position: relative;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding: 0 .25rem;
}
.section-header .sub-title::before {
  content: "";
  position: absolute;
  bottom: -16px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--primary-light-color);
  z-index: 0;
}
.section-header .sub-title::after {
  content: "</>";
  position: absolute;
  bottom: -27px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--primary-light-color);
  background-color: var(--body-bg);
  font-family: monospace;
  padding: 0 3px;
  z-index: 1;
  box-shadow: 1px 0 0 var(--body-bg), -1px 0 0 var(--body-bg);
}
.bg-light .section-header .sub-title::after {
  background-color: #EEF1EE;
  box-shadow: 1px 0 0 #EEF1EE, -1px 0 0 #EEF1EE;
}
</style>
