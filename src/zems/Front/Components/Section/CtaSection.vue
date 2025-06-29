<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import BaseTitle from '@/components/Elements/BaseTitle.vue';
import { RouterLink } from 'vue-router';

</script>

<template>
  <section class="container">
    <div class="call-to-action">
      <div class="text-center text-white">
        <BaseTitle>Need Custom Software Solutions?</BaseTitle>
        <BaseParagraph>
          Our experts are ready to discuss your unique business requirements
        </BaseParagraph>
        <RouterLink to="/contact-us" class="btn bg-white text-primary mt-1">CONTACT US</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.call-to-action {
  position: relative;
  margin-bottom: -7rem;
  margin-top: 3.75rem;
  background-color: var(--secondary-color);
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.call-to-action p {
  margin: .5rem 0;
}
.call-to-action .btn {
  padding: 1rem 2rem;
  border: none;
  font-size: 1.15rem;
}
.call-to-action .btn:hover{
  background-color: var(--primary-color);
  color: var(--white-color);
}
</style>
