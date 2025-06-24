<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue';
import ListItem from '@/components/Elements/ListItem.vue';
import SectionTitle from '@/components/Widget/SectionTitle.vue';

</script>

<template>
  <section class="featured">
    <div class="container">
      <SectionTitle title="Exclusive Software We Developed" sub-title="Featured Applications" />

      <div class="tab-panel">
        <ul>
          <ListItem><BaseButton class="active">Restaurant Solution</BaseButton></ListItem>
          <ListItem><BaseButton>Grocery POS</BaseButton></ListItem>
          <ListItem><BaseButton>Real State App</BaseButton></ListItem>
          <!-- <ListItem><BaseButton>Upcoming</BaseButton></ListItem> -->
        </ul>
      </div>
      <section>
        <div class="medium-2 large-3 gap-2">
          <div class="properties-card">
            <div class="relative image-responsive">
              <img class="image-responsive" src="../assets/about-3.jpg" alt="">
            </div>
            <div class="text-light p-1">
              <span class="primary-color">ON GOING</span>
              <h4 class="heading-4 my-1 text-dark"><a href="#">Modern Apartments</a></h4>
              <a class="flex mb-1" href="#">
                <span class="material-symbols-outlined location-icon">
                  location_on
                </span>
                <small>Brooklyn, New York, United States</small>
              </a>
              <div>
                <p><strong>3.8 </strong>Katha, Height: <strong>G 7</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </section>
</template>

<style scoped>
.featured {
  padding: 3.75rem 0;
}
.tab-panel ul {
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.tab-panel ul li .btn {
  font-size: 1rem;
  padding: 1rem;
  margin: 0;
  border: 1px solid;

}
.active {
  background-color: var(--dark-color);
  color: var(--white-color);
}

@media (min-width: 768px){
  .tab-panel ul li .btn {
    font-size: 1.25rem;
    padding: 1.25rem 2rem;
  }
}
</style>
