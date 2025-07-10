<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import BlogCard from '../Widget/BlogCard.vue';
import { ref } from 'vue';
const blogs = ref([
  {
    id: 1,
    title: 'Scaling Microservices Architecture for Enterprise-Level Applications',
    date: 'July 10, 2025',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80',
    slug: 'scaling-microservices-enterprise',
  },
  {
    id: 2,
    title: 'Top 10 Best Practices for Secure and Maintainable API Development',
    date: 'July 3, 2025',
    category: 'API Development',
    image: 'https://images.unsplash.com/photo-1688561807381-05137151978f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'secure-api-development-practices',
  },
  {
    id: 3,
    title: 'Building Scalable Design Systems That Empower Developer Teams',
    date: 'June 25, 2025',
    category: 'UI/UX',
    image: 'https://plus.unsplash.com/premium_photo-1681433383783-661b519b154a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D',
    slug: 'scalable-design-systems',
  },
  {
    id: 4,
    title: 'Integrating AI in SaaS Platforms to Drive Automation and Efficiency',
    date: 'June 15, 2025',
    category: 'AI & SaaS',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    slug: 'ai-in-saas-automation-efficiency',
  },
  {
    id: 5,
    title: 'Mastering DevOps Workflows for Seamless Continuous Delivery Pipelines',
    date: 'June 01, 2025',
    category: 'DevOps',
    image: 'https://images.unsplash.com/photo-1667372335936-3dc4ff716017?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2b3BzfGVufDB8fDB8fHww',
    slug: 'devops-continuous-delivery-pipelines',
  },
  {
    id: 6,
    title: 'Leveraging Cloud-Native Technologies for Agile Product Delivery',
    date: 'May 22, 2025',
    category: 'Cloud',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    slug: 'cloud-native-agile-delivery',
  },
  {
    id: 7,
    title: 'How to Improve Front-End Performance in Large Web Applications',
    date: 'May 10, 2025',
    category: 'Frontend',
    image: 'https://img.freepik.com/free-photo/businessmen-hands-white-table-with-documents-drafts_176420-361.jpg?uid=R140702484&ga=GA1.1.1873161437.1736591058&semt=ais_hybrid&w=740',
    slug: 'frontend-performance-large-apps',
  },
  {
    id: 8,
    title: 'Data-Driven Decision Making in Modern Software Engineering',
    date: 'April 30, 2025',
    category: 'Data & Analytics',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    slug: 'data-driven-software-decisions',
  },
])

</script>

<template>
  <div class="blogs">
    <div class="container">
      <SectionTitle class="text-center mb-2" sub-title="Innovation Insights" title="Expert Advice for Tech Leaders" />
      <div class="medium-2 large-3 gap-2">
        <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.blogs {
  padding: 3.75rem 0;
}
</style>
