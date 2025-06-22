<script setup>
defineProps({
  image: {
    type: [String, Object],
  }
})
</script>
<template>
    <img :src="image" alt="banner image">
</template>

<style scoped>

</style>
