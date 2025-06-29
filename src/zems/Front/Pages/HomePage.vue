<script setup>
import AboutSection from '../Components/Section/AboutSection.vue';
import FeaturedApp from '../Components/Section/FeaturedApp.vue';
import HeroSection from '../Components/Section/HeroSection.vue';
import OurApplication from '../Components/Section/OurApplication.vue';
import PricingSection from '../Components/Section/PricingSection.vue';
import ServicesSection from '../Components/Section/ServicesSection.vue';
import StatisticsSection from '../Components/Section/StatisticsSection.vue';
import TestimonialSection from '../Components/Section/TestimonialSection.vue';

import { zems_animate } from '@/plugins/zems_animation';
import { onMounted } from 'vue';
onMounted(()=> {
  zems_animate()
})
</script>

<template>
  <HeroSection />
  <AboutSection />
  <FeaturedApp />
  <ServicesSection />
  <OurApplication/>
  <StatisticsSection />
  <PricingSection />
  <TestimonialSection/>
</template>
