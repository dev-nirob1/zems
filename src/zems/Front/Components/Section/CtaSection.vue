<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <section class="mt-4">
    <div class="cta-badge container">
    <div class="cta-content">
      <BaseTitle>Need Software Solutions?</BaseTitle>
      <BaseParagraph>
        Let our experts craft the perfect digital solution for your specific business needs.
      </BaseParagraph>
      <RouterLink to="/contact-us" class="btn">CONTACT US</RouterLink>
    </div>
    <div class="box-1"></div>
    <div class="box-2"></div>
    <div class="box-3"></div>
  </div>
  </section>
</template>

<style scoped>
.cta-badge {
  margin-bottom: -8rem;
  padding: 4rem 1.5rem 6rem 1.5rem;
  text-align: center;
  color: var(--white-color);
  background-color: var(--secondary-color);
  border-radius: 0 0 100% 100%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  z-index: 0;
}
.cta-content{
  position: relative;
  z-index: 1;
}
.box-1,
.box-2,
.box-3 {
  position: absolute;
  height: 100px;
  width: 100px;
  background-color: var(--dark-color);
  border-radius: 50%;
  opacity: .25;
  z-index: 0;
}

.box-1 {
  top: -1rem;
  left: -2rem;
}

.box-2 {
  top: -2rem;
  right: -1rem;
}

.box-3 {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* .cta-badge::before {
  content: "";
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 120%;
  height: 5rem;
  background-color: var(--secondary-color);
  border-radius: 1rem 1rem 0 0;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.15);
  z-index: 1;
} */

.btn {
  margin-top: .75rem;
  background-color: var(--white-color);
  color: var(--primary-color);
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
}

.btn:hover {
  background-color: var(--primary-color);
  color: var(--white-color);
}

/* Tablet & Up */
@media (min-width: 768px) {
  .cta-badge {
    padding: 4rem 3rem;
    border-radius: 0 0 100% 100% / 0 0 100% 100% ;
  }
}
</style>
