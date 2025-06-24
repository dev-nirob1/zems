<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import BaseTitle from '@/components/Elements/BaseTitle.vue';

</script>

<template>
  <div class="container relative">
    <div class="call-to-action">
      <div class="cta flex align-center justify-between">
        <div>
          <BaseTitle>Need Custom Software Solutions?</BaseTitle>
          <BaseParagraph>
            Our experts are ready to discuss your unique business requirements
          </BaseParagraph>
        </div>
        <BaseButton class="bg-primary p-1 text-white">Contact Us</BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.call-to-action {
  background-color: var(--secondary-color);
  padding: 5rem;
}

.cta {
  flex-direction: column;
  background-color: var(--secondary-color);
  color: var(--white-color);
  width: 100%;
  padding: 2rem;
  position: absolute;
  top: 2rem;
  left: 0;
  z-index: 1;
}

@media (min-width: 992px) {
  .cta {
    flex-direction: row;
  }

  .call-to-action {
    padding: 3rem;
  }
}
</style>
