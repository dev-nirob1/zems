<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import BlogCard from '../Widget/BlogCard.vue';

</script>

<template>
 <div class="blogs">
    <div class="container">
      <SectionTitle class="text-center mb-2" sub-title="Innovation Insights" title="Expert Advice for Tech Leaders" />
      <div class="medium-2 large-3 gap-2">
        <BlogCard v-for="blog in 8" :key="blog" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.blogs {
  padding: 3.75rem 0;
}
</style>
