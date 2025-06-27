<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue';
import SectionTitle from '@/components/Widget/SectionTitle.vue';

</script>

<template>
  <section class="testimonials bg-light">
    <div class="container">
      <div class=" mb-2 flex align-center justify-between">
        <SectionTitle title="What Our Clients Say" sub-title="Success Stories" />
        <div class="flex justify-center gap-1">
          <BaseButton class="bg-primary text-white">Prev</BaseButton>
          <BaseButton class="bg-primary text-white">Next</BaseButton>
        </div>
      </div>

      <div class="medium-2 gap-2 swiper-testimonials">
        <div class="testimonial-card">
          <div class="flex">
            <p>
              <i class="fa-solid fa-quote-left fa-2x"></i>
              Zems POS reduced our order errors by 40% and increased table turnover. The kitchen display system is a
              game-changer for our busy restaurant.
            </p>
          </div>
          <div class="flex align-center gap-1 mt-1">
            <img class="height-full width-full"
              src="https://tunatheme.com/tf/html/quarter-preview/quarter/img/testimonial/2.jpg" alt="profile" />
            <div>
              <h5 class="sub-title">Adam Josheph</h5>
              <span>Owner, Bella Cucina</span>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="flex">
            <p>
              <i class="fa-solid fa-quote-left fa-2x"></i>
              Inventory management became effortless with Zems. We reduced waste by 30% in the first month thanks to
              expiry alerts and automated ordering
            </p>
          </div>
          <div class="flex align-center gap-1 mt-1">
            <img class="height-full width-full"
              src="https://tunatheme.com/tf/html/quarter-preview/quarter/img/testimonial/3.jpg" alt="profile" />
            <div>
              <h5 class="sub-title">Adam Josheph</h5>
              <span>Manager, FreshMart</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
<style scoped>
.testimonials {
  padding: 3.75rem 0;
}

.testimonial-card {
  padding: 2rem 1.5rem;
  background: var(--white-color);
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow);
  scroll-snap-align: start;
  transition: all 0.5 ease-in-out;
}

.testimonial-card p {
  font-size: 1.15rem;
}

.testimonial-card span,
.testimonial-card p {
  font-size: 1.15rem;
}

.testimonial-card img {
  height: 4rem;
  width: 4rem;
  border-radius: .5rem;
}
</style>
