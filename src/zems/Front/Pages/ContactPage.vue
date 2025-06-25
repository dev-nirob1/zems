<script setup>
import BreadCrumb from '../Components/Section/BreadCrumb.vue';
import ContactForm from '../Components/Section/ContactForm.vue';
import ContactInfor from '../Components/Section/ContactInfor.vue';

</script>

<template>
  <BreadCrumb/>
  <div class="container contact-us">
    <ContactInfor/>
    <ContactForm/>
  </div>
</template>
<style scoped>
.contact-us {
  padding: 3.75rem 0;
}
</style>
