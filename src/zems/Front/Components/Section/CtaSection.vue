<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <section class="mt-4">
    <div class="cta container">
      <div class="cta-content">
        <BaseTitle>Need Software Solutions?</BaseTitle>
        <BaseParagraph>
          Let our experts craft the perfect digital solution for your specific business needs.
        </BaseParagraph>
        <RouterLink to="/contact-us" class="btn">CONTACT US</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  margin-bottom: -10rem;
  padding: 3rem 2.5rem 3rem 2.5rem;
  text-align: center;
  color: var(--white-color);
  background-color: var(--primary-color);
  border-radius: 50% 50% 0 0;
  position: relative;
  overflow: hidden;
  z-index: 0;
}
.cta-content {
  position: relative;
  z-index: 5;
}

.cta .btn {
  margin-top: .75rem;
  background-color: var(--white-color);
  color: var(--primary-color);
  padding: 1rem 2rem;
  font-weight: 600;
  border: none;
}
.cta .btn:hover {
  color: var(--white-color);
}
@media (min-width: 768px) {
  .cta {
    padding: 7rem 3rem 2rem 3rem;
    border-radius: 50% 50% 0 0;
  }
}
</style>
