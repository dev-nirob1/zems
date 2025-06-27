<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue';
import BaseImage from '@/components/Elements/BaseImage.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import ListItem from '@/components/Elements/ListItem.vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import SectionTitle from '@/components/Widget/SectionTitle.vue';

</script>

<template>
  <section class="featured">
    <div class="container">
      <SectionTitle title="Exclusive Software We Developed" sub-title="Featured Applications" class="text-center" />

      <div class="tab-panel">
        <ul>
          <ListItem>
            <BaseButton class="active">Restaurant Solution</BaseButton>
          </ListItem>
          <ListItem>
            <BaseButton>Grocery POS</BaseButton>
          </ListItem>
          <ListItem>
            <BaseButton>Real State App</BaseButton>
          </ListItem>
          <!-- <ListItem><BaseButton>Upcoming</BaseButton></ListItem> -->
        </ul>
      </div>

      <div class="medium-2 gap-2 align-center">
        <div class="app-image">
          <BaseImage image="https://zems.uk/uploads/media/1747030497.gif" alt="project image" />
        </div>
        <div>
          <SubTitle>A complete restaurant solution</SubTitle>
          <BaseParagraph>
            Streamline your restaurant operations with our all-in-one solution featuring:
            <ul class="feature-list">
              <li>Table management & reservations</li>
              <li>Integrated POS with kitchen display</li>
              <li>Inventory tracking & supplier management</li>
              <li>Staff scheduling & performance analytics</li>
              <li>Customer loyalty programs</li>
            </ul>
          </BaseParagraph>
          <div class="flex gap-1">
            <BaseButton class="bg-primary text-white">Live Demo</BaseButton>
            <BaseButton>Case Study</BaseButton>
          </div>
        </div>
      </div>
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
  margin: 3rem 0;
}

.tab-panel ul li .btn {
  font-size: 1rem;
  padding: 1rem;
  margin: 0;
  border: 1px solid var(--primary-color);
}

.active {
  background-color: var(--primary-color);
  color: var(--white-color);
}

.featured .app-image {
  height: 100%;
  width: 100%;
}

.featured .app-image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.feature-list {
  list-style: none;
  padding-left: 1rem;
}

.feature-list li {
  position: relative;
  padding-left: 1rem;
  margin-bottom: .25rem;
}

.feature-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--primary-color);
}

@media (min-width: 768px) {
  .tab-panel ul li .btn {
    font-size: 1.15rem;
    padding: 1.15rem 1.75rem;
  }

  @media (min-width: 768px) {
    .featured .btn {
      padding: 1.25rem 2rem;
      font-size: 1.15rem;
    }
  }
}
</style>
