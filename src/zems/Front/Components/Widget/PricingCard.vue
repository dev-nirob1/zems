<script setup>
defineProps({
  price: {
    type: Object
  }
})
</script>

<template>
  <!-- Pricing Card -->
  <div class="pricing-card">
    <!-- badge  -->
    <div v-if="price.badge" class="exclusive-badge">
      <BaseParagraph class="badge">
        <i :class="`fa-solid ${price.badge}`"></i>
        Most Popular
      </BaseParagraph>
    </div>
    <span class="price-icon">
      <i :class="`fa-solid ${price.icon}`"></i>
    </span>
    <SubTitle>{{ price.title }}</SubTitle>
    <HeroTitle>{{ price.price }} <span>/{{ price.pricePeriod }}</span></HeroTitle>
    <BaseParagraph>
      {{ price.description }}
    </BaseParagraph>
    <ul v-for="(feature, i) in price.features" :key="i" class="feature-list">
      <li>{{ feature }}</li>
    </ul>
    <BaseButton class="bg-primary text-white">Get Started</BaseButton>
  </div>
</template>
<style scoped>
/* pricing card */
.pricing-card {
  position: relative;
  border-radius: 0.75rem;
  padding: 3rem 1rem;
  transition: all 0.5s;
  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
  cursor: pointer;
}

.pricing-card .price-icon {
  font-size: 5rem;
  color: var(--primary-color);
}

.pricing-card:hover {
  transform: translateY(-0.5rem);
}

.pricing-card .sub-title {
  margin: 0.5rem 0;
}

.pricing-card .hero-title {
  display: flex;
  align-items: center;
}

.pricing-card .hero-title span {
  font-size: 1.75rem;
  font-weight: bold;
}

.pricing-card .btn {
  border: 1px solid transparent;
  margin-top: 1.5rem;
  font-size: 1.25rem;
  background: var(--primary-color);
  color: var(--white-color);
}

.pricing-card .btn:hover {
  background-color: var(--white-color);
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.pricing-card .exclusive-badge {
  width: 280px;
  position: relative;
  margin-right: -1.75rem !important;
  margin-top: -1.5rem;
  overflow: hidden;
}

.badge {
  background-color: var(--secondary-color);
  color: var(--white-color);
  padding: 1rem 1rem 1rem 3rem;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
}

.pricing-card .badge::before {
  content: "";
  position: absolute;
  top: 1.1rem;
  left: -1.75rem;
  height: 3.5rem;
  width: 3.5rem;
  rotate: 45deg;
  background: var(--white-color);
}

.feature-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.feature-list li {
  position: relative;
  padding-left: 1rem;
  margin-bottom: .25rem;
}

.feature-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--primary-color);
}

@media (min-width: 992px) {
  .pricing-card {
    padding: 3rem 2rem;
  }

  .pricing-card .exclusive-badge {
    margin-right: -2rem;
  }
}
</style>
