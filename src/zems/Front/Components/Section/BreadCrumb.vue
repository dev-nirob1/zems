<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
console.log(route);
</script>

<template>
  <section class="breadcrumb">
    <ul class="container flex align-center gap-1">
      <ListItem><a href="/">Home</a></ListItem>
      <ListItem>{{route.name}}</ListItem>
    </ul>
  </section>
</template>
<style scoped>
.breadcrumb {
  padding: 8rem 0 3rem 0;
  /* background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://images.unsplash.com/photo-1733503747506-773e56e4078f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      no-repeat center / 100%; */
  background: rgb(from var(--primary-color)r g b / 5%);
}
.breadcrumb ul {
  list-style: none;
  font-size: 1rem;
  padding: 0;
}
.breadcrumb ul li a {
  position: relative;
  color: var(--primary-light-color);
  text-decoration: none;
  padding-bottom: .5rem;
}
.breadcrumb ul li a::after{
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
@media (min-width: 768px){
  .breadcrumb ul {
  font-size: 1.25rem;
}
}
</style>
