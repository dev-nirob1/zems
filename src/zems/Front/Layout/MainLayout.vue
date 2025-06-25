<script setup>
import FooterSection from '@/components/Section/FooterSection.vue';
import HeaderSection from '@/components/Section/HeaderSection.vue';
import { RouterView } from 'vue-router';
import CtaSection from '../Components/Section/CtaSection.vue';
</script>

<template>
  <HeaderSection />
  <main>
<RouterView />
  </main>
  <CtaSection/>
  <FooterSection />
</template>
<style>
main {
  min-height:100vh;
}
</style>
