<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <section class="container relative">
    <div class="call-to-action">
      <div class="cta-content">
        <BaseTitle>Need Software Solutions?</BaseTitle>
        <BaseParagraph>
          Let our experts craft the perfect digital solution for your specific business needs
        </BaseParagraph>
        <RouterLink to="/contact-us" class="btn bg-white text-primary mt-1">CONTACT US</RouterLink>
      </div>
    </div>
    <div class="box"></div>
    <div class="box-2"></div>
    <!-- <div class="box-3"></div> -->
    <div class="badge flex align-center justify-center">
      <BaseTitle>Trusted</BaseTitle>
    </div>
  </section>
</template>

<style scoped>
.call-to-action {
  margin: 3.75rem 0 -7rem 0;
  background-color: var(--dark-color);
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--white-color);
  z-index: -1;
}

.cta-content {
  z-index: 2;
}

.badge {
  position: absolute;
  top: 0;
  right: 5%;
  width: 10rem;
  height: 10rem;
  background-color: var(--secondary-color);
  border-radius: 0 0 50% 50%;
}

.badge::before {
  content: '';
  position: absolute;
  top: -1rem;
  right: -1rem;
  height: 2rem;
  width: 12rem;
  background-color: var(--secondary-color);
  box-shadow: var(--box-shadow);
  border-radius: .75rem .75rem 0 0;
}

.badge .title {
  position: relative;
  display: inline-block;
  z-index: 1;
  color: var(--white-color);
}

.badge .title::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12rem;
  height: 2rem;
  background-color: var(--secondary-color);
  z-index: -1;
  border-radius: 4px;
}
.box {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 10rem;
  width: 10rem;
  rotate: 30deg;
  background-color: var(--secondary-color);
  z-index: 1;
  opacity: .1;
}

.box-2 {
  position: absolute;
  top: 65%;
  left: 10%;
  transform: translate(-50%, -50%);
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  rotate: 65deg;
  background-color: var(--secondary-color);
  z-index: 1;
  opacity: .15;
}

.call-to-action p {
  margin: 0.5rem 0;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  font-size: 1.15rem;
  font-weight: 500;
}

.btn:hover {
  background-color: var(--primary-color);
  color: var(--white-color);
}

@media (min-width: 992px) {
  .cta-content {
    max-width: 70%;
  }
}
</style>
