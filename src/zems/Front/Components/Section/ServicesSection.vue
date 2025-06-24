<script setup>
import { ref } from 'vue';
import ServiceCard from '../Widget/ServiceCard.vue';
import SectionTitle from '@/components/Widget/SectionTitle.vue';
const services = ref([
    {
      "icon": "/public/services/web-dev.png",
      "title": "Web Development",
      "description": "Custom websites and web applications built with modern technologies."
    },
    {
      "icon": "/public/services/mobile-app.png",
      "title": "Mobile Apps",
      "description": "iOS and Android applications developed with native or hybrid frameworks."
    },
    {
      "icon": "/public/services/could.png",
      "title": "Cloud Solutions",
      "description": "Scalable cloud infrastructure and deployment services."
    },
    {
      "icon": "/public/services/ai.png",
      "title": "AI Integration",
      "description": "Implement machine learning and automation into your workflows."
    },
    {
      "icon": "/public/services/ui.png",
      "title": "UI/UX Design",
      "description": "Beautiful interfaces with intuitive user experiences."
    },
    {
      "icon": "/public/services/support.png",
      "title": "Tech Support",
      "description": "Ongoing maintenance and support for your digital products."
    }
  ])
</script>


<template>

  <section class="services bg-light">
    <div class="container">
      <SectionTitle title="Our Main Focus" subTitle="Our Services"/>
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
