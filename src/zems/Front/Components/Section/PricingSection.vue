<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import { ref } from 'vue';
import PricingCard from '../Widget/PricingCard.vue';

const pricing = ref([
  {
    "id": 1,
    "icon": "fa-gear",
    "title": "Basic",
    "price": "€2,500",
    "pricePeriod": "project",
    "description": "Essential software solutions for startups",
    "features": [
      "Standard software templates",
      "Core functionality development",
      "2 months basic support",
      "Single-environment deployment",
      "Essential security measures"
    ],
    "badge": null
  },
  {
    "id": 2,
    "icon": "fa-star",
    "title": "Professional",
    "price": "€6,800",
    "pricePeriod": "project",
    "description": "Advanced solutions for growing businesses",
    "features": [
      "Custom module architecture",
      "Full development lifecycle",
      "6 months priority support",
      "Multi-environment deployment",
      "Enhanced security protocols"
    ],
    "badge": "Most Popular"
  },
  {
    "id": 3,
    "icon": "fa-crown",
    "title": "Enterprise",
    "price": "€15,000",
    "pricePeriod": "project",
    "description": "Tailored solutions for complex requirements",
    "features": [
      "Bespoke system architecture",
      "End-to-end custom development",
      "1 year premium support",
      "Hybrid cloud deployment",
      "Enterprise-grade security"
    ],
    "badge": null
  }
])
</script>

<template>
  <section class="pricing bg-lighten">
    <div class="container">
      <!-- Section header -->
      <SectionTitle class="text-center mb-2" title="Scalable Development Packages" sub-title="Pricing Options">
      </SectionTitle>
      <!-- card container grid: small/medium/large = 1/2/3 -->
      <div class="medium-2 large-3 align-center justify-center gap-1 medium-gap-2">
        <div v-for="price in pricing" :key="price.id">
          <PricingCard :price="price" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ========== 8. PRICING PLANS ========== */
.pricing {
  padding: 3.75rem 0;
}
</style>
