<script setup lang="ts">
import BaseButton from '@/components/Elements/BaseButton.vue';
import BaseTextArea from '@/components/Elements/BaseTextArea.vue';
import InputField from '@/components/Elements/InputField.vue';
import SelectDropdown from '@/components/Elements/SelectDropdown.vue';
import SectionTitle from '@/components/Widget/SectionTitle.vue';

</script>

<template>
  <section class="form bg-light">
    <div class="container">
     <SectionTitle class="text-center mb-2" title="We're here to help" sub-title="Say Hello" />
      <form>
        <div class="medium-2 align-center gap-1">
          <div>
            <label for="name"></label>
            <InputField id="name" type="text" placeholder="Enter Your Name" />
          </div>
          <div>
            <label for="email"></label>
            <InputField id="email" type="email" placeholder="Enter Your Email" />
          </div>
          <div>
            <label for="phone"></label>
            <InputField type="tel" id="phone" placeholder="Enter Your Phone Number" />
          </div>
          <div>
            <label for="select-services"></label>
            <SelectDropdown id="select-services">
              <option value="Select Service Type" selected disabled>Select Service Type</option>
              <option value="Property Management">Property Management</option>
              <option value="Mortgage Service">Mortgage Service</option>
              <option value="Consulting Service">Consulting Service</option>
            </SelectDropdown>
          </div>
        </div>
        <div class="my-1">
          <label for="message"></label>
          <BaseTextArea rows="6" id="message" placeholder="Enter Message..."></BaseTextArea>
        </div>
        <BaseButton class="bg-primary">GET A FREE SERVICE</BaseButton>
      </form>
    </div>
  </section>
</template>

<style scoped>
.form {
  padding: 3.75rem 0;
}

input,
select,
textarea {
  padding: 1.25rem;
  border: none;
  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
  border-radius: .25rem;
}

input:focus,
textarea:focus {
  outline: none;
}

input::placeholder,
textarea::placeholder,
select::placeholder {
  font-size: .9rem;
}

.form .btn {
  padding: 1.25rem 2rem;
  color: var(--white-color);
}

@media (min-width: 992px) {}
</style>
