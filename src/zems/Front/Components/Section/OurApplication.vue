<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import SectionTitle from '@/components/Widget/SectionTitle.vue';

</script>

<template>
  <div class="our-app">
    <div class="container">
      <SectionTitle title="Industry-Standard Applications" sub-title="Our Application" />


      <div class="medium-2 large-3 gap-2">
        <div class="app-card">
          <div class="image">
            <img
              src="https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg?semt=ais_hybrid&w=740"
              alt="project image">
          </div>
          <div class="mt-2">
            <SubTitle>Restaurant App</SubTitle>
            <BaseParagraph> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae enim maiores...</BaseParagraph>
          </div>
          <div class="flex gap-1">
            <BaseButton class="bg-primary text-white">Live Demo</BaseButton>
          <BaseButton class="bg-secondary text-white">Case Study</BaseButton>
          </div>
        </div>
        <div class="app-card">
          <div class="image">
            <img
              src="https://media.istockphoto.com/id/1411195926/photo/project-manager-working-on-laptop-and-updating-tasks-and-milestones-progress-planning-with.jpg?s=612x612&w=0&k=20&c=5A0CEsRbIrgnci0Q7LSxbrUZ1pliXy8C04ffpnjnVIw="
              alt="project image">
          </div>
          <div class="mt-2">
            <SubTitle>Restaurant App</SubTitle>
            <BaseParagraph> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae enim maiores...</BaseParagraph>
          </div>
          <div class="flex gap-1">
            <BaseButton class="bg-primary text-white">Live Demo</BaseButton>
          <BaseButton class="bg-secondary text-white">Case Study</BaseButton>
          </div>
        </div>
        <div class="app-card">
          <div class="image">
            <img
              src="https://www.shutterstock.com/image-photo/business-overview-outlook-goal-plan-260nw-1830195932.jpg"
              alt="project image">
          </div>
          <div class="mt-2">
            <SubTitle>Restaurant App</SubTitle>
            <BaseParagraph> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae enim maiores...</BaseParagraph>
          </div>
          <div class="flex gap-1">
            <BaseButton class="bg-primary text-white">Live Demo</BaseButton>
          <BaseButton class="bg-secondary text-white">Case Study</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.our-app {
  padding: 3.75rem 0;
}
.app-card {
  padding: 1rem;
 background-color: var(--white-color);
}
.btn{
  width: 100%;
}
.image {
  height: 180px;
  width: 100%;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
