<script setup>
import { RouterLink } from 'vue-router';
defineProps({
  blog: {
    type: Object
  }
})
</script>

<template>
  <div class="blog-card">
    <div class="image">
      <BaseImage :image="blog.image" />
    </div>
    <div class="card-body">
      <div class="flex justify-between">
        <span><i class="fa-solid fa-calendar-days"></i> {{blog.date}}</span>
        <span><i class="fas fa-tags"></i> {{blog.category}}</span>
      </div>
      <SubTitle>{{blog.title}}</SubTitle>
      <RouterLink :to="`/blogs/${blog.slug}`">Read More <i class="fa-solid fa-arrow-right"></i></RouterLink>
    </div>
  </div>
</template>
<style scoped>
.blog-card {
  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
}
.blog-card .image {
  position: relative;
  overflow: hidden;
  height: 220px;
  width: auto;
}
.blog-card .image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all .5s ease-in-out;
}
.blog-card .image:hover img {
  transform: scale(1.1);
}
.blog-card .card-body {
  padding: 1.5rem 1rem;
}
.blog-card i {
  color: var(--primary-color);
  transition: all .3s ease-in-out;
}
.blog-card .sub-title {
  padding: .75rem 0;
}
.blog-card a {
  display: flex;
  align-items: center;
  gap: .25rem;
  color: var(--primary-color);
  text-decoration: none;
  transition: all .3s ease-in-out;
}
.blog-card a:hover i {
  padding-left: .5rem;
  color: var(--primary-light-color);
}
.blog-card a:hover {
  color: var(--primary-light-color);
}
</style>
