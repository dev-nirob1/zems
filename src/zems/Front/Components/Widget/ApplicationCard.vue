<script setup>
import BaseImage from '@/components/Elements/BaseImage.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import { RouterLink } from 'vue-router';

defineProps({
  app: {
    type: Object
  }
})
</script>

<template>
  <div class="app-card">
    <div class="image">
      <BaseImage :image="app.image" alt="project image" />
    </div>
    <div class="p-1">
      <SubTitle>{{ app.title }}</SubTitle>
      <BaseParagraph>{{ app.description.substring(0, 60) }}...
      </BaseParagraph>
      <div>
        <RouterLink class="btn bg-primary text-white" :to="`/projects/${app.title}`">VIEW DETAILS</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-card {
  border-radius: .75rem;
  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
}
.app-card p {
  margin-top: .5rem;
}
.app-card .image {
  position: relative;
  overflow: hidden;
  height: 220px;
  width: auto;
  border-radius: .75rem .75rem 0 0;
}
.app-card .image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all .5s ease-in-out;
}
.app-card .image:hover img {
  transform: scale(1.1);
}
.app-card .btn {
  padding: .75rem 1.5rem;
}
</style>
