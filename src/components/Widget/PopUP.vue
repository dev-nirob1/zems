<script setup>
defineProps({
  isModalOpen: {
    type: Boolean
  },
  handleModalOpen: {
    type: Function
  },
  handleCloseModal: {
    type: Function
  },
  handlePrev: {
    type: Function
  },
  handleNext: {
    type: Function
  },
})
</script>

<template>
  <div v-if="isModalOpen" class="modal">
    <div class="modal-content">
      <!-- Navigation Buttons -->
      <button @click="handlePrev" class="btn btn-prev">
        <i class="fa-solid fa-chevron-left fa-2x"></i>
      </button>
      <button @click="handleNext" class="btn btn-next">
        <i class="fa-solid fa-chevron-right fa-2x"></i>
      </button>

      <!-- modal content -->
      <div class="modal-details">
        <slot></slot>
      </div>

      <!-- Close Button -->
      <button @click="handleCloseModal" class="btn close-btn">
        <i class="fa-solid fa-xmark fa-2x"></i>
      </button>
    </div>
  </div>
</template>

<style>
.modal {
  position: relative;
}

.modal .modal-content {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal .btn {
  position: absolute;
  background: transparent;
  border: none;
  color: var(--white-color);
  padding: 1rem;
}
.modal .close-btn {
  top: 1rem;
  right: 1rem;
}
.modal .btn-prev,
.modal .btn-next {
  top: 50%;
  transform: translateY(-50%);

}
.modal .btn-prev {
  left: 1rem;
}
.modal .btn-next {
  right: 2rem;
}
.modal .modal-details {
  height: 90vh;
  width: 80vw;
}
.modal .modal-details img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media (min-width: 768px){
 .modal .modal-details {
  height: 85vh;
  width: 50vw;
}
}

</style>
