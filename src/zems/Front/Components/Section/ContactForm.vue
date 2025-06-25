<script setup lang="ts">
import BaseButton from '@/components/Elements/BaseButton.vue';
import BaseTextArea from '@/components/Elements/BaseTextArea.vue';
import BaseTitle from '@/components/Elements/BaseTitle.vue';
import InputField from '@/components/Elements/InputField.vue';
import SelectDropdown from '@/components/Elements/SelectDropdown.vue';

</script>

<template>
  <div class="form">
    <BaseTitle class="mb-1">Send Us a Message</BaseTitle>
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
      <div class="mt-1">
        <label for="message"></label>
        <BaseTextArea rows="6" id="message" placeholder="Enter Message..."></BaseTextArea>
      </div>
      <div class="check-toggle flex align-center">
        <div>
          <label for="checkbox"></label>
          <InputField type="checkbox" id="checkbox" />
        </div>
        <small> Save my name, email, and website in this browser for the next time I comment.
        </small>
      </div>
      <BaseButton class="btn bg-primary">GET A FREE SERVICE</BaseButton>
    </form>
  </div>
</template>

<style scoped>
.check-toggle {
  gap: .5rem;
  margin: .5rem 0;
}
.form {
  padding: 2rem;
  border: 2px solid;
}
input, select,
textarea {
  padding: 1rem;
}
input:focus,
textarea:focus {
  outline: none;
}
.form .btn {
  padding: 1.25rem 2rem;
  color: var(--white-color);
}
</style>
