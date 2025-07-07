<script setup>
import { ref } from 'vue'
const items = ref([
  {
    icon: 'fa-laptop-code',
    value: 500,
    title: 'Completed Projects',
  },
  {
    icon: 'fa-user-tie',
    value: 200,
    title: 'Clients Worldwide',
  },
  {
    icon: 'fa-layer-group',
    value: 25,
    title: 'Tech Stacks Used',
  },
  {
    icon: 'fa-award',
    value: 10,
    title: 'Industry Awards',
  }
])
</script>

<template>
  <section class="bg-light statistics">
    <div class="container">
      <!-- grid-container: small/large = 2/4 -->
      <ul class="medium-2 larger-4 gap-2 stats-content">
        <ListItem v-for="(value, i) in items" :key="i">
          <i :class="`fa-solid ${value.icon} fa-3x`"></i>
          <div>
            <BaseTitle>{{ value.value }}+</BaseTitle>
            <BaseParagraph>{{ value.title }}</BaseParagraph>
          </div>
        </ListItem>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.statistics {
  padding: 3.75rem 0;
  text-align: center;
}
.statistics .stats-content {
  list-style: none;
  padding: 0;
  align-items: center;
}
.statistics .stats-content li {
  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.stats-content i {
  color: var(--primary-color);
}
.statistics .stats-content p {
  margin: 0;
}
</style>
