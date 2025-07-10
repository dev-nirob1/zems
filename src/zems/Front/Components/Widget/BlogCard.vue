<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <div class="blog-card">
    <div class="image">
      <BaseImage src="https://tunatheme.com/tf/html/quarter-preview/quarter/img/blog/2.jpg" alt="project image" />
    </div>
    <div class="card-body">
      <div class="flex justify-between">
        <span><i class="fa-solid fa-calendar-days text-primary"></i> July 10, 2025</span>
        <span><i class="fa-solid fa-user text-primary"></i> By Mr. Jack</span>
      </div>
      <SubTitle>Lorem ipsum dolor sit amet.</SubTitle>
      <RouterLink to="/">Read More <i class="fa-solid fa-arrow-right"></i></RouterLink>
    </div>
  </div>
</template>
<style scoped>
.blog-card {
  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
}
.blog-card .card-body{
padding: 1.5rem 1rem;
}

.blog-card i {
  color: var(--primary-color);
  transition: all .3s ease-in-out;
}
.blog-card .sub-title {
  padding: .5rem 0;
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
</style>
