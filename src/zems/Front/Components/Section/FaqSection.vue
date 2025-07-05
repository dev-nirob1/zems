<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import { ref } from 'vue';
import AccordionFaq from '../Widget/AccordionFaq.vue';

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
      <div class="large-2 align-center gap-3">
        <div class="faq-img">
          <BaseImage image="https://zems.uk//uploads/media/1744748295.png" alt="image" />
        </div>

        <div>
          <AccordionFaq v-for="item in faqItems" :key="item.id" :currentOpenItem="currentOpenItem" :accordionData="item"
            :toggleAccordion="toggleAccordion" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq {
  padding: 3.75rem 0;
}

.faq .faq-image {
  height: 100%;
  width: 100%;
}

.faq img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
