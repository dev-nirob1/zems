<template>
  <section class="partner-section">
    <div class="logos-container">
      <div class="logos-track">
        <div class="logos flex gap-8">
          <img v-for="(logo, index) in duplicatedLogos"
               :key="index"
               :src="logo"
               alt="Partner company logo"
               class="logo-img">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const logos = [
  '/public/company/adidas.png',
  '/public/company/nike.png',
  '/public/company/amazon.png',
  '/public/company/apple.png',
  '/public/company/samsung.png',
  '/public/company/zara.png'
];

// Duplicate logos for seamless looping
const duplicatedLogos = computed(() => [...logos, ...logos]);
</script>

<style scoped>
.partner-section {
  padding: 3.75rem 0;
  background: #f8fafc;
  overflow: hidden;
}

.logos-container {
  width: 100%;
  position: relative;
}

.logos-track {
  display: inline-block;
  white-space: nowrap;
  animation: scroll 20s linear infinite;
}

.logos {
  display: inline-flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0;
}

.logo-img {
  height: 80px;
  width: auto;
  object-fit: contain;
  opacity: 0.8;
  transition: all 0.3s ease;
}


@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Hide scrollbar but allow scrolling */
.logos-container::-webkit-scrollbar {
  display: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .logos {
    gap: 1.5rem;
  }
  .logo-img {
    height: 50px;
  }
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
}
</style>
