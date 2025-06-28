<script setup>
import BaseImage from '@/components/Elements/BaseImage.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import SubTitle from '@/components/Elements/SubTitle.vue';

defineProps({
  review: {
    type: Object
  }
})
</script>

<template>
  <div class="testimonial-card">
    <div class="flex">
      <BaseParagraph>
        <i class="fa-solid fa-quote-left fa-2x"></i>
        {{review.review}}
      </BaseParagraph>
    </div>
    <div class="flex align-center gap-1">
      <BaseImage class="height-full width-full"
        :image="review.image" />
      <div>
        <SubTitle>{{review.name}}</SubTitle>
        <span>{{review.description}}</span>
      </div>
    </div>
  </div>
</template>

<style>
.testimonial-card {
  min-width: 280px;
  padding: 2rem 1.5rem;
  background: var(--white-color);
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow);
  scroll-snap-align: start;
  transition: all 0.5 ease-in-out;
}

.testimonial-card img {
  height: 4rem;
  width: 4rem;
  border-radius: .5rem;
}

@media (min-width: 540px) {
  .testimonial-card {
    min-width: 400px;
  }
}

@media (min-width: 992px) {
  .testimonial-card {
    min-width: calc(50% - 1rem);
  }

  .testimonial-card p,
  .testimonial-card span {
    font-size: 1.15rem;
  }
}
</style>
