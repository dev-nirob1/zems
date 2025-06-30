<script setup>
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import BaseTitle from '@/components/Elements/BaseTitle.vue';
import { RouterLink } from 'vue-router';

</script>

<template>
  <section class="container">
    <div class="call-to-action">
      <div class="cta-content">
        <BaseTitle>Need Custom Software Solutions?</BaseTitle>
        <BaseParagraph>
          Our experts are ready to discuss your unique business requirements
        </BaseParagraph>
        <RouterLink to="/contact-us" class="btn bg-white text-primary mt-1">CONTACT US</RouterLink>
      </div>

        <div class="tech">
        <img src="/tech/javascript.png" alt="JavaScript" class="tech-logo logo-1">
        <img src="/tech/python.png" alt="Python" class="tech-logo logo-2">
        <img src="/tech/react.png" alt="React" class="tech-logo logo-3">
        <img src="/tech/vue.png" alt="Vue" class="tech-logo logo-4">
        <img src="/tech/django.png" alt="Django" class="tech-logo logo-5">
        <img src="/tech/laravel.png" alt="Laravel" class="tech-logo logo-6">
      </div>
    </div>
  </section>
</template>

<style scoped>
.call-to-action {
  position: relative;
  margin: 3.75rem 0 -7rem 0;
  background-color:#021212;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--white-color);
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

.tech {
  position: relative;
  width: 200px;
  height: 200px;
  min-width: 200px;
  border-radius: 50%;
  background: var(--secondary-color);
  animation: rotate-orbit 40s linear infinite;
}

.tech-logo {
  position: absolute;
  width: 50px;
  height: 50px;
  transition: all 0.3s ease;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
}

.logo-1 { transform: rotate(0deg) translateX(100px) rotate(0deg); }
.logo-2 { transform: rotate(60deg) translateX(100px) rotate(-60deg); }
.logo-3 { transform: rotate(120deg) translateX(100px) rotate(-120deg); }
.logo-4 { transform: rotate(180deg) translateX(100px) rotate(-180deg); }
.logo-5 { transform: rotate(240deg) translateX(100px) rotate(-240deg); }
.logo-6 { transform: rotate(300deg) translateX(100px) rotate(-300deg); }

@keyframes rotate-orbit {
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .call-to-action {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }

  .tech-orbit {
    margin-top: 2rem;
    width: 250px;
    height: 250px;
  }

  .tech-logo {
    width: 40px;
    height: 40px;
    margin: -20px 0 0 -20px;
  }

  .logo-1 { transform: rotate(0deg) translateX(100px) rotate(0deg); }
  .logo-2 { transform: rotate(60deg) translateX(100px) rotate(-60deg); }
  .logo-3 { transform: rotate(120deg) translateX(100px) rotate(-120deg); }
  .logo-4 { transform: rotate(180deg) translateX(100px) rotate(-180deg); }
  .logo-5 { transform: rotate(240deg) translateX(100px) rotate(-240deg); }
  .logo-6 { transform: rotate(300deg) translateX(100px) rotate(-300deg); }
}
</style>
