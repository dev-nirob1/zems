<script setup>
import { computed, ref } from 'vue';
import BaseButton from '@/components/Elements/BaseButton.vue';
import BaseImage from '@/components/Elements/BaseImage.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import ListItem from '@/components/Elements/ListItem.vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import { RouterLink } from 'vue-router';

const selectedTab = ref('Restaurant Solution')
const tabData = ref(['Restaurant Solution', 'Grocery POS', 'Real Estate App']);
const featured = ref([
  {
    "id": 1,
    "title": "Restaurant Solution",
    "image": "https://zems.uk/uploads/media/1747030497.gif",
    "alt": "Restaurant management system",
    "subtitle": "A complete restaurant solution",
    "description": "Scale your restaurant business efficiently with our end-to-end management system designed to optimize every aspect of your operations including:",
    "features": [
      "Table management & reservations",
      "Integrated POS with kitchen display",
      "Inventory tracking & supplier management",
      "Staff scheduling & performance analytics",
      "Customer loyalty programs"
    ]
  },
  {
    "id": 2,
    "title": "Grocery POS",
    "image": "https://zems.uk/uploads/media/1744799107.gif",
    "alt": "Grocery point of sale system",
    "subtitle": "Modern grocery store management",
    "description": "Modernize every aspect of your grocery store management - from checkout to inventory - with our all-in-one POS solution featuring:",
    "features": [
      "Barcode scanning & inventory management",
      "Fresh produce weighing integration",
      "Supplier ordering automation",
      "Expiry date tracking",
      "Mobile payment integration"
    ]
  },
  {
    "id": 3,
    "title": "Real Estate App",
    "image": "https://zems.uk/uploads/media/1744799207.gif",
    "alt": "Real estate application",
    "subtitle": "Comprehensive property management",
    "description": "Revolutionize your real estate business with our powerful digital platform, designed to streamline operations and boost sales through innovative features like:",
    "features": [
      "Property listing management",
      "Virtual tour integration",
      "Client CRM system",
      "Automated document generation",
      "Market analytics dashboard"
    ]
  }
])
const currentTab = (tab) => {
  selectedTab.value = tab;
  // console.log(selectedTab.value)
}

const currentFeature = computed(() => {
  return featured.value.find(data => data.title === selectedTab.value)
})
// console.log(currentFeature);

</script>

<template>
  <section class="featured">
    <div class="container">
      <SectionTitle title="Exclusive Software We Developed" sub-title="Featured Applications" class="text-center" />

      <div class="tab-panel">
        <ul>
          <ListItem v-for="(tab, i) in tabData" :key="i">
            <BaseButton :class="{ active: selectedTab === tab }" @click="currentTab(tab)">{{ tab }}</BaseButton>
          </ListItem>
        </ul>
      </div>

      <div class="medium-2 gap-2 align-center">
        <div class="app-image">
          <BaseImage :image="currentFeature.image" :alt="currentFeature.alt" />
        </div>
        <div>
          <SubTitle>{{currentFeature.subtitle}}</SubTitle>
          <BaseParagraph>
            {{currentFeature.description}}
          </BaseParagraph>
          <ul class="feature-list">
            <ListItem v-for="(data, i) in currentFeature.features" :key="i">{{ data }}</ListItem>
          </ul>

          <div class="flex gap-1">
            <RouterLink :to="`/projects/${currentFeature.title}`" class="btn bg-primary text-white">VIEW DETAILS</RouterLink>
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
  padding: .75rem 1rem;
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
.featured .btn {
      padding: .75rem 1.5rem;
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
      font-size: 1.15rem;
    }
  }
}
</style>
