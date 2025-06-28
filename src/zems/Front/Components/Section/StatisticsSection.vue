<script setup>
import { ref, onMounted } from 'vue'
import BaseParagraph from '@/components/Elements/BaseParagraph.vue'
import BaseTitle from '@/components/Elements/BaseTitle.vue'
import ListItem from '@/components/Elements/ListItem.vue'

const projectCount = ref(0)
const clientCount = ref(0)
const techStackCount = ref(0)
const awardCount = ref(0)

const targetValues = {
  project: 120,
  client: 80,
  techStack: 25,
  award: 15,
}

onMounted(() => {
  const interval = setInterval(() => {
    let done = true
    if (projectCount.value < targetValues.project) {
      projectCount.value++
      done = false
    }
    if (clientCount.value < targetValues.client) {
      clientCount.value++
      done = false
    }
    if (techStackCount.value < targetValues.techStack) {
      techStackCount.value++
      done = false
    }
    if (awardCount.value < targetValues.award) {
      awardCount.value++
      done = false
    }
    if (done) clearInterval(interval)
  }, 20)
})
</script>

<template>
  <section class="bg-light statistics">
    <div class="container">
      <!-- grid-container: small/large = 2/4 -->
      <ul class="medium-2 larger-4 gap-2 stats-content">
        <ListItem>
          <i class="fa-solid fa-laptop-code fa-3x"></i>
          <div>
            <BaseTitle>{{ projectCount }}+</BaseTitle>
            <BaseParagraph>Completed Projects</BaseParagraph>
          </div>
        </ListItem>

        <!-- individual stat component -->
        <ListItem>
          <i class="fa-solid fa-user-tie fa-3x"></i>
          <div>
            <BaseTitle>{{ clientCount }}+</BaseTitle>
            <BaseParagraph>Clients Worldwide</BaseParagraph>
          </div>
        </ListItem>

        <!-- individual stat component -->
        <ListItem>
          <i class="fa-solid fa-layer-group fa-3x"></i>
          <div>
            <BaseTitle>{{ techStackCount }}+</BaseTitle>
            <BaseParagraph>Tech Stacks Used</BaseParagraph>
          </div>
        </ListItem>

        <!-- individual stat component -->
        <ListItem>
          <i class="fa-solid fa-award fa-3x"></i>
          <div>
            <BaseTitle>{{ awardCount }}+</BaseTitle>
            <BaseParagraph>Industry Awards</BaseParagraph>
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
  border-radius: 0.75rem;
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
