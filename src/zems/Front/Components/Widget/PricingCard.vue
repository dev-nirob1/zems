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
      <i class="fa-solid fa-crown"></i>
      Most Popular
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
  overflow: hidden;
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

.exclusive-badge {
  border: 1px solid;
  padding: 1rem 2rem;
  position: relative;
  margin-right: -2.05rem;
  text-align: right;
  font-size: 1.25rem;
  color: var(--white-color);
  background-color: var(--primary-light-color);
}
.exclusive-badge::before{
  content: '';
  position: absolute;
  top: 0;
  left:-2rem;
  rotate: 45deg;
  height: 4rem;
  width: 4rem;
  background-color: var(--white-color);
}

.pricing-card .hero-title span {
  font-size: 1.75rem;
  font-weight: bold;
}

.pricing-card .btn {
  margin-top: 1.5rem;
  font-size: 1.25rem;
  color: var(--white-color);
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
  color: var(--primary-light-color);
}

@media (min-width: 992px) {
  .pricing-card {
    padding: 3rem 2rem;
  }
}
</style>
