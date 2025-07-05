<script setup>
const logos = [
  '/public/company/adidas.png',
  '/public/company/nike.png',
  '/public/company/amazon.png',
  '/public/company/apple.png',
  '/public/company/samsung.png',
  '/public/company/zara.png'
];
</script>

<template>
  <section class="partner-section">
    <div class="marque">
      <img v-for="(logo, index) in logos" :key="index" :src="logo" alt="Partner company logo" class="logo-img" />
    </div>
    <div class="marque">
      <img v-for="(logo, index) in logos" :key="index" :src="logo" alt="Partner company logo" class="logo-img" />
    </div>
  </section>
</template>

<style scoped>
.partner-section {
  padding: 3.75rem 0;
  background: var(--white-color);
  overflow: hidden;
  position: relative;
  display: flex;
  gap: 2rem;
}

.marque {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  min-width: 100%;
  flex-shrink: 0;
  animation: 5s marque infinite linear;
}

.partner-section::before,
.partner-section::after {
  content: "";
  height: 100%;
  width: 3rem;
  position: absolute;
  top: 0;
}

.partner-section::before {
  left: 0;
}

.partner-section::after {
  right: 0;
}

.partner-section img {
  height: 80px;
}

@keyframes marque {

  to {
    transform: translateX(calc(-100% - 2rem));
  }
}
</style>
