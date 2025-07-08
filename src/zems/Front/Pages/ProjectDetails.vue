<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import BreadCrumb from '@zems/Front/Components/Section/BreadCrumb.vue';

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
      <div class="image">
        <BaseImage :image="project.image" :alt="`${project.title}`" />
      </div>
      <div class="project-header">
        <div>
          <SectionTitle :title="project.title" :sub-title="project.type"></SectionTitle>
          <ul class="flex gap-1">
            <ListItem>{{ project.duration }}</ListItem>
            <ListItem>{{ project.teamSize }}</ListItem>
          </ul>
        </div>
        <div class="flex">
          <BaseTitle class="price"> Price:
            <span >599$</span>
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
          <div class="mt-1 gap-1">
            <div class="tech" v-for="(tech, i) in project.technologies" :key="i">
              {{ tech }}
            </div>
          </div>
          <div class="flex gap-1 mt-2">
            <BaseButton><a :href="project.live_link">Live Demo</a></BaseButton>
            <BaseButton class="bg-primary text-white">Order Now</BaseButton>
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
}
.project-details .price span {
  color: var(--secondary-color);
}
.project-details a {
  text-decoration: none;
}
.project-details .image {
  width: 100%;
  max-height: 70vh;
  overflow: hidden;
}
.project-details img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.project-details ul {
  padding: 0;
  margin: 0;
}

.project-details .project-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0;
  gap: 2rem;
}

.project-details .features-list {
  list-style: none;
  margin-top: .75rem;
}
.project-details .features-list li {
  position: relative;
  padding-left: 1rem;
  margin-bottom: .25rem;
}

.project-details .features-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--primary-color);
}

.project-details  .tech {
  padding: .25rem .75rem;
  display: inline-block;
  margin: .5rem;
  background-color: var(--light-color);
}

@media (min-width: 768px) {
  .project-details .btn {
    padding: 1rem 2rem;
  }
}
</style>
