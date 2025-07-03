<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import BreadCrumb from '../Components/Section/BreadCrumb.vue';

const project = {
  type: "Web Application",
  title: "Premium E-Commerce Platform",
  image:
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  description: "A high-performance e-commerce solution with advanced features designed to boost conversions and provide seamless user experiences across all devices.",
  features: [
    "Responsive mobile-first design",
    "Integrated payment gateways",
    "Advanced product filtering",
    "Customer account management",
    "Real-time inventory tracking",
    "SEO optimized structure"
  ],
  technologies: ["Vue 3", "CSS3", "Pinia", "Node.js", "Express", "MongoDB", "Docker", "AWS"],
  live_link: "#",
  duration: "3 months",
  teamSize: "5 members"
};
</script>

<template>
  <BreadCrumb />
  <div class="project-details">
    <div class="container">
      <!-- Image Grid -->
      <div class="image">
        <BaseImage :image="project.image" :alt="`${project.title}`" />
      </div>
      <!-- Project Header -->
      <div class="project-header">
        <div>
          <SectionTitle :title="project.title" :sub-title="project.type"></SectionTitle>
          <ul class="flex gap-1">
            <ListItem>{{ project.duration }}</ListItem>
            <ListItem>{{ project.teamSize }}</ListItem>
          </ul>
        </div>

        <div class="flex">
          <BaseTitle> Price:
            <span class="price">599$</span>
          </BaseTitle>
        </div>
      </div>

      <!-- Project Content -->
      <div class="medium-2 gap-2">
        <!-- Description -->
        <div>
          <SubTitle>Project Overview</SubTitle>
          <BaseParagraph>{{ project.description }}</BaseParagraph>
          <SubTitle>Features</SubTitle>
          <ul class="features-list">
            <ListItem v-for="(feature, index) in project.features" :key="index">
              {{ feature }}
            </ListItem>
          </ul>
        </div>

        <!-- Technologies -->
        <div>
          <SubTitle>Technology Used</SubTitle>
          <div class="flex flex-wrap mt-1 gap-1">
            <div class="tech" v-for="(tech, i) in project.technologies" :key="i">
              {{ tech }}
            </div>
          </div>
          <div class="flex gap-1 mt-2">
            <BaseButton><a :href="project.live_link">Live Demo</a></BaseButton>
            <BaseButton class="bg-secondary text-white">Order Now</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-details {
  padding: 3.75rem 0;
}

.project-details .btn {
  padding: .75rem 1.5rem;
  white-space: nowrap;
}
.project-details .price {
  font-size: 1.75rem;
  color: var(--secondary-color);
}
.project-details a {
  text-decoration: none;
}

.image {
  width: 100%;
  max-height: 70vh;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

ul {
  padding: 0;
  list-style: none;
  margin: 0;
}

/* Project Header */
.project-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0;
  gap: 2rem;
}

/* Features List */
.features-list {
  list-style: none;
  padding-left: 0;
  margin-top: .75rem;
}

.features-list li {
  position: relative;
  padding-left: 1rem;
  margin-bottom: .25rem;
}

.features-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--primary-color);
}

.tech {
  padding: .25rem .75rem;
  background-color: var(--light-color);
}

@media (min-width: 768px) {
  .project-details .btn {
    padding: 1rem 2rem;
  }
}
</style>
