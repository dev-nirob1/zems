<script setup>
import ServiceCard from '../Widget/ServiceCard.vue';
import SectionTitle from '@/components/Widget/SectionTitle.vue';
</script>


<template>

  <section class="services">
    <div class="container">
      <SectionTitle title="Our Main Focus" subTitle="Our Services"/>
      <div class="medium-2 large-3 gap-2">
        <ServiceCard v-for="service in 6" :key="service" />
      </div>
    </div>

  </section>
</template>
<style scoped>
.services {
  padding: 3.75rem 0;
}
</style>
