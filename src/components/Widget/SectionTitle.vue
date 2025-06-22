<script setup>
import BaseTitle from '../Elements/BaseTitle.vue';
import SubTitle from '../Elements/SubTitle.vue';

defineProps({
  title: String,
  subTitle: String
})
</script>

<template>
  <div class="text-center mb-2">
    <SubTitle>{{ subTitle }}</SubTitle>
    <BaseTitle>{{ title }}</BaseTitle>
  </div>
</template>

<style scoped>
.sub-title {
  display: inline-block;
  margin-bottom: .75rem;
  background-color: rgb(from var(--primary-light-color)r g b / 10%);
  color: var(--primary-light-color);
  padding: .25rem 1.5rem;
  border-radius: 1.25rem;
}
</style>
