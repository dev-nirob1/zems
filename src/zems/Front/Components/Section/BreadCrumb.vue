<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
console.log(route);
</script>

<template>
  <section class="breadcrumb">
    <ul class="container">
      <ListItem><a href="/">Home</a></ListItem>
      <ListItem>{{ route.name }}</ListItem>
      <ListItem v-if="route.params.slug">{{ route.params.slug }}</ListItem>
    </ul>
  </section>
</template>

<style scoped>
.breadcrumb {
  padding: 8rem 0 3rem 0;
  background: rgb(from var(--primary-color)r g b / 5%);
}

.breadcrumb ul {
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0;
}

.breadcrumb ul li a {
  position: relative;
  color: var(--primary-light-color);
  text-decoration: none;
  padding-bottom: .5rem;
}

.breadcrumb ul li a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background-color: var(--primary-light-color);
  transition: all .3s ease-in-out;
}

.breadcrumb ul li a:hover::after {
  width: 100%;
}

.breadcrumb ul li:not(:last-child)::after {
  content: ">";
  font-family: monospace;
  padding-left: 1rem;
}

@media (min-width: 768px) {
  .breadcrumb ul {
    font-size: 1.25rem;
  }
}
</style>
