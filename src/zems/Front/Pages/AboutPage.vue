<script setup>
import AboutSection from '@zems/Front/Components/Section/AboutSection.vue';
import BreadCrumb from '@zems/Front/Components/Section/BreadCrumb.vue';
import FounderTwo from '@zems/Front/Components/Section/FounderTwo.vue';
import OurFounder from '@zems/Front/Components/Section/OurFounder.vue';
import StatisticsSection from '@zems/Front/Components/Section/StatisticsSection.vue';
import TeamMembers from '@zems/Front/Components/Section/TeamMembers.vue';
import { watchEffect } from 'vue';

watchEffect(()=> {
  scroll(0, 0)
})
</script>

<template>
  <div>
    <BreadCrumb/>
    <AboutSection />
    <StatisticsSection />
    <OurFounder/>
    <FounderTwo/>
    <TeamMembers/>
  </div>
</template>

<style scoped></style>
