<script setup>
import { ref } from 'vue'
import BreadCrumb from '../Components/Section/BreadCrumb.vue';
import SectionTitle from '@/components/Widget/SectionTitle.vue';
const images = ref([
  {
    url: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    alt: "Developer typing code on laptop"
  },
  {
    url: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    alt: "Team working on project at office"
  },
  {
    url: "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg",
    alt: "Dual monitors with code editor"
  },
  {
    url: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    alt: "UI/UX designer at desk"
  },
  {
    url: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
    alt: "Software engineer discussing architecture"
  },
  {
    url: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    alt: "Developer with code on laptop screen"
  }
])

</script>
<template>
  <BreadCrumb />
  <div class="gallery">
    <div class="container">

      <SectionTitle class="text-center mb-2" title="Our Photo Gallery" sub-title="Gallery" />
      <div class="medium-2 large-3 gap-2">
        <div class="gallery-item" v-for="(img, index) in images" :key="index">
          <BaseImage :image="img.url" :alt="img.alt" />
          <div class="button-overlay">
            <button class="plus-button"><i class="fa-solid fa-plus fa-2x"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  transition: transform 0.4s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
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
  border-radius: 1.8rem;
  border: none;
  opacity: 0;
  transition: all .3s ease-in-out;
}

.gallery-item:hover .plus-button {
  opacity: 1;
}
</style>
