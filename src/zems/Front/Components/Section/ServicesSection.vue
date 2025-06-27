<script setup>
import { ref } from 'vue';
import ServiceCard from '../Widget/ServiceCard.vue';
import SectionTitle from '@/components/Widget/SectionTitle.vue';
const services = ref([
    {
      "icon": "/services/web-dev.png",
      "title": "Web Development",
      "description": "Custom websites and web applications built with modern technologies."
    },
    {
      "icon": "/services/mobile-app.png",
      "title": "Mobile Apps",
      "description": "iOS and Android applications developed with native or hybrid frameworks."
    },
    {
      "icon": "/services/could.png",
      "title": "Cloud Solutions",
      "description": "Scalable cloud infrastructure and deployment services."
    },
    {
      "icon": "/services/ai.png",
      "title": "AI Integration",
      "description": "Implement machine learning and automation into your workflows."
    },
    {
      "icon": "/services/ui.png",
      "title": "UI/UX Design",
      "description": "Beautiful interfaces with intuitive user experiences."
    },
    {
      "icon": "/services/support.png",
      "title": "Tech Support",
      "description": "Ongoing maintenance and support for your digital products."
    }
  ])
</script>


<template>

  <section class="services bg-light">
    <div class="container">
      <SectionTitle class="text-center mb-2" title="Our Main Focus" subTitle="Our Services"/>
      <div class="medium-2 large-3 gap-2">
        <ServiceCard v-for="(service, i) in services" :key="i" :service="service"/>
      </div>
    </div>

  </section>
</template>
<style scoped>
.services {
  padding: 3.75rem 0;
}
</style>
