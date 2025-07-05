<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import { ref } from 'vue';

const faqItems = ref([
  {
    id: 1,
    question: "What software development services do you offer?",
    answer: "We provide end-to-end software development including custom application development, web and mobile apps, cloud solutions, enterprise software, and AI/ML integration. Our full-cycle development covers everything from ideation to deployment and maintenance."
  },
  {
    id: 2,
    question: "What technologies and frameworks do you specialize in?",
    answer: "Our team has expertise in modern technologies including JavaScript/TypeScript (Vue, React, Angular), Python (Django, Flask), .NET, Java, and cloud platforms (AWS, Azure, GCP). We also work with databases like PostgreSQL, MongoDB, and Firebase."
  },
  {
    id: 3,
    question: "How do you ensure software quality and security?",
    answer: "We implement rigorous QA processes including unit testing, integration testing, and security audits. All our code undergoes peer review, and we follow OWASP security principles. We also provide penetration testing for critical applications."
  },
  {
    id: 4,
    question: "What is your typical development process?",
    answer: "We follow Agile methodology with 2-week sprints, daily standups, and continuous delivery. Our process includes requirements analysis, prototyping, iterative development, testing, and deployment with CI/CD pipelines."
  },
  {
    id: 5,
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive maintenance packages including bug fixes, performance optimization, security updates, and feature enhancements. Our SLA guarantees response times ranging from 1 hour to 1 business day depending on severity."
  }
]);

const currentOpenItem = ref();

const toggleAccordion = (id) => {
  if (currentOpenItem.value == id) {
    currentOpenItem.value = null;
  } else {
    currentOpenItem.value = id;
  }
};

</script>

<template>
  <div class="faq bg-light">
    <div class="container">
      <SectionTitle class="text-center mb-3" title="Everything You Should Know" sub-title="User Guide" />
      <div class="large-2 gap-3">
        <div class="acc-img">
          <BaseImage image="https://zems.uk//uploads/media/1744748295.png" alt="image" />
        </div>

        <div>
          <div v-for="item in faqItems" :key="item.id" class="accordion">
            <div @click="toggleAccordion(item.id)" class="accordion-title">
              {{ item.question }}
              <i class="fa-solid fa-plus"></i>
            </div>
            <div class="accordion-body" :class="{ 'active': currentOpenItem == item.id }">
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq {
  padding: 3.75rem 0;
}
.faq .acc-image {
  height: 100%;
  width: auto;
}

.faq img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.accordion {
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
  overflow: hidden;
}

.accordion-title {
  padding: 1rem;
  font-weight: 600;
  color: var(--white-color);
  background-color: var(--secondary-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.accordion-body {
  padding: 0;
  max-height: 0;
  overflow: hidden;
  background-color: var(--white-color);
  transition: all 0.3s ease;
}

.accordion-body.active {
  padding: 1rem;
  max-height: 500px;
}
</style>
