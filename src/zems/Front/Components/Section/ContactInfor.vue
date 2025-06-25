<script setup lang="ts">
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import BaseTitle from '@/components/Elements/BaseTitle.vue';
import SubTitle from '@/components/Elements/SubTitle.vue';

</script>

<template>
  <div class="contact-info medium-2 gap-1">
    <div class="map">
      <iframe class="width-full height-full" style="border:0;" allowFullScreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?q=ireland&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
    </div>

    <div class="info">
      <BaseTitle>Get in Touch</BaseTitle>
      <BaseParagraph> Contact us for inquiries about our software solutions or partnership opportunities.</BaseParagraph>
      <ul>
        <li>
          <i class="fa-solid fa-location fa-2x"></i>
          <div>
            <SubTitle>Location</SubTitle>
            <p>Zems Ltd, Dublin D02 XY56, Ireland</p>
          </div>
        </li>
        <li>
          <i class="fa-solid fa-envelope fa-2x"></i>
          <div>
            <SubTitle>Email</SubTitle>
            <p>support@zems.com</p>
          </div>
        </li>
        <li>
          <i class="fa-solid fa-phone fa-2x"></i>
          <div>
            <SubTitle>Call Us</SubTitle>
            <p>+353 1 234 5678, Mon-Fri: 9AM-6PM GMT</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.contact-info {
  padding-bottom: 3.75rem;
}

.contact-info ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-info ul li {
  display: flex;
  align-items: start;
  gap: .5rem;
}

.contact-info ul li i {
  padding: 1rem;
  background-color: var(--dark-color);
  color: var(--white-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-info ul li p {
  margin: 0;
  padding-top: .5rem;
}
</style>
