<script setup>
import FooterSection from '@/components/Section/FooterSection.vue';
import HeaderSection from '@/components/Section/HeaderSection.vue';
import { RouterView } from 'vue-router';
import CtaSection from '@zems/Front/Components/Section/CtaSection.vue';

import { onMounted } from 'vue';
import { zems_animate } from '@/plugins/zems_animation';

onMounted(()=> {
  zems_animate()
})

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
