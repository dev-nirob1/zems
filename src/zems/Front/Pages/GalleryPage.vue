<script setup>
import { ref } from 'vue'
import BreadCrumb from '@zems/Front/Components/Section/BreadCrumb.vue';
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import PopUP from '@/components/Widget/PopUP.vue';
const images = ref([
  {
    url: "https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_1280.jpg",
    alt: "image"
  },
  {
    url: "https://images.unsplash.com/photo-1600466888907-013366be7093?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "image"
  },
  {
    url: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?_gl=1*9892og*_ga*OTAzOTgwMTguMTczNzAwNTI1OA..*_ga_8JE65Q40S6*czE3NTE3NzY5NjMkbzE5JGcxJHQxNzUxNzc2OTc0JGo0OSRsMCRoMA..",
    alt: "image"
  },
  {
    url: "https://cdn.pixabay.com/photo/2024/05/21/19/57/computer-8779040_1280.jpg",
    alt: "image"
  },
  {
    url: "https://cdn.pixabay.com/photo/2017/05/31/11/17/office-2360063_1280.jpg",
    alt: "image"
  },
  {
    url: "https://images.unsplash.com/photo-1749738456487-2af715ab65ea?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "image"
  }
])
const isModalOpen = ref(false)
const selectedIndex = ref(0)
const handleOpenModal = (imageIndex) => {
  isModalOpen.value = true
  // console.log('index', imageIndex);
  selectedIndex.value = imageIndex;
  // console.log('selected',selectedIndex, 'clicked', imageIndex);
}
const handleCloseModal = () => {
  isModalOpen.value = false
}
const handlePrev = () => {
  if (selectedIndex.value > 0) {
    selectedIndex.value -= 1;
  }
}
const handleNext = () => {
  selectedIndex.value += 1;
  if (selectedIndex.value === images.value.length) {
    selectedIndex.value = 0;
    // console.log('selected ', selectedIndex);
  }
}
</script>

<template>
  <BreadCrumb />

  <div class="gallery">
    <div class="container">
      <SectionTitle class="text-center mb-2" title="Our Photo Gallery" sub-title="Image Collection" />
      <div class="medium-2 large-3 gap-2">
        <div class="gallery-item" v-for="(img, index) in images" :key="index">
          <BaseImage :image="img.url" :alt="img.alt" />
          <div class="button-overlay">
            <BaseButton @click="handleOpenModal(index)" class="plus-button">
              <i class="fa-solid fa-plus fa-2x"></i>
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>

  <PopUP :isModalOpen="isModalOpen" :handleCloseModal="handleCloseModal" :handleNext="handleNext"
    :handlePrev="handlePrev">
    <BaseImage :image="images[selectedIndex].url" :alt="images[selectedIndex].alt" />
  </PopUP>
</template>

<style scoped>
.gallery {
  padding: 3.75rem 0;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.8s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

/* + Button */
.button-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
}

.plus-button {
  background-color: var(--white-color);
  border: none;
  opacity: 1;
  transition: all .3s ease-in-out;
}

@media (min-width: 768px) {
  .plus-button {
    opacity: 0;
  }

  .gallery-item:hover .plus-button {
    opacity: 1;
  }
}
</style>
