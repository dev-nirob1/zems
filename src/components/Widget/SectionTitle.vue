<script setup>
import BaseTitle from '../Elements/BaseTitle.vue';
import SubTitle from '../Elements/SubTitle.vue';

defineProps({
  title: String,
  subTitle: String
})
</script>

<template>
    <div>
      <SubTitle>{{ subTitle }}</SubTitle>
    <BaseTitle>{{ title }}</BaseTitle>
    </div>
</template>

<style scoped>
.sub-title {
  display: inline-block;
  margin-bottom: .75rem;
  background-color: rgb(from var(--primary-color)r g b / 10%);
  color: var(--secondary-color);
  padding: .25rem 1.5rem;
  border-radius: 1.25rem;
}
</style>
