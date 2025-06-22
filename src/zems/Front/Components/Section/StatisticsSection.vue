<script setup>
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import BaseTitle from '@/components/Elements/BaseTitle.vue';
import ListItem from '@/components/Elements/ListItem.vue';

</script>

<template>
    <section class="bg-light statistics">
      <div class="container">
        <!-- grid-container: small/large = 2/4 -->
        <ul class="small-2 larger-4 gap-2 medium-gap-1 stats-content">
          <!-- individual stat component  -->
          <ListItem>
            <i class="fa-solid fa-tag fa-3x"></i>
            <div>
              <BaseTitle>560+</BaseTitle>
              <BaseParagraph>Active Coupons</BaseParagraph>
            </div>
          </ListItem>
          <!-- individual stat component  -->
          <ListItem>
            <i class="fa-solid fa-users fa-3x"></i>
            <div>
              <BaseTitle>197K+</BaseTitle>
              <BaseParagraph>Happy Customers</BaseParagraph>
            </div>
          </ListItem>
          <!-- individual stat component  -->
          <ListItem>
            <i class="fa-solid fa-store fa-3x"></i>
            <div>
              <BaseTitle>268+</BaseTitle>
              <BaseParagraph>Partner Stores</BaseParagraph>
            </div>
          </ListItem>
          <!-- individual stat component  -->
          <ListItem>
            <i class="fa-solid fa-percent fa-3x"></i>
            <div>
              <BaseTitle>340+</BaseTitle>
              <BaseParagraph>Exclusive Deals</BaseParagraph>
            </div>
          </ListItem>
        </ul>
      </div>
    </section>
</template>

<style scoped>
.statistics {
  padding: 3.75rem 0;
  text-align: center;
}
.statistics .stats-content {
  list-style: none;
  padding: 0;
  align-items: center;
}
.statistics .stats-content li {
  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
  padding: 2rem;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.statistics .stats-content p {
  margin: 0;
}
</style>
