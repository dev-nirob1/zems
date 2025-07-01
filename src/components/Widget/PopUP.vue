<script setup>
defineProps({
  isModalOpen: {
    type: Boolean
  },
  handleCloseModal: {
    type: Function
  },
})
</script>

<template>
  <div v-if="isModalOpen" class="modal">
    <div class="modal-content">
       <div class="modal-details">
         <slot></slot>
       </div>
      <!-- Close Button -->
      <BaseButton @click="handleCloseModal" class="close-btn">
        <i class="fa-solid fa-xmark"></i>
      </BaseButton>
    </div>
  </div>
</template>

<style>
.modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.8);
}
.modal-content {
  position: relative;
  width: 90%;
  max-width: 800px;
  height: 80vh;
  max-height: 90vh;
  padding: 4rem;
  background-color:rgb(10, 10, 10);
  border-radius: 0.5rem;
  animation: modalFadeIn 0.3s ease-out;
  margin: 0 auto;
}
.modal-content::-webkit-scrollbar {
  display: none;
}
.modal-details {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.modal-details .btn {
  height: fit-content;
  color: var(--white-color);
  border: none;
  padding: 1rem .75rem;
  position: relative;
}
.modal-details .btn-next::before,
.modal-details .btn-prev::before
 {
content: '';
position: absolute;
top: 0;
height: 100%;
width: 100%;
border-top: 1px solid var(--white-color);
border-bottom: 1px solid var(--white-color);
}
.modal-details .btn-prev::before{
  top: 0;
  left: -2rem;
  border-left: 1px solid var(--white-color);
}
.modal-details .btn-next::before{
  top: 0;
  right: -2rem;
  border-right: 1px solid var(--white-color);
}
.modal-content img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.modal-content .close-btn {
  position: absolute;
  right: 0px;
  top: 0px;
  border-radius: 0 0.5rem 0 0.5rem;
  color: var(--white-color);
  background-color: var(--secondary-color);
  margin: 0;
}
@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (min-width: 768px){
  /* popup component  */
  .modal-content {
    width: 90%;
    height: 85vh;
  }
}
</style>
