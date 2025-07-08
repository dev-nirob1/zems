<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import BreadCrumb from '@zems/Front/Components/Section/BreadCrumb.vue';
import { ref } from 'vue';
import ApplicationCard from '@zems/Front/Components/Widget/ApplicationCard.vue';
import PaginationButton from '@zems/Front/Components/Widget/PaginationButton.vue';
const apps = ref([
  {
    "id": 1,
    "title": "Restaurant App",
    "description": "A user-friendly app for browsing menus, placing orders, and managing reservations.",
    "image": "https://media.istockphoto.com/id/1331919924/photo/technology-makes-life-so-much-easier-for-young-asian-woman-using-mobile-app-device-on.jpg?s=612x612&w=0&k=20&c=8MFgliNHfNLWxUjpZWcNtSs4dndEYQEU491ll5WF0_s="
  },
  {
    "id": 2,
    "title": "Fitness Tracker",
    "description": "Track workouts, monitor progress, and reach fitness goals with personalized plans.",
    "image": "https://plus.unsplash.com/premium_photo-1681433383783-661b519b154a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": 3,
    "title": "E-Commerce Platform",
    "description": "A complete solution for online shopping with product listings, reviews, and secure payments.",
    "image": "https://images.unsplash.com/photo-1688561807381-05137151978f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 4,
    "title": "Travel Booking App",
    "description": "Easily book flights, hotels, and plan your trips with a seamless travel experience.",
    "image": "https://img.freepik.com/free-photo/top-view-travel-elements-collection_23-2148691133.jpg?semt=ais_hybrid&w=740"
  },
  {
    "id": 5,
    "title": "Online Learning App",
    "description": "Access hundreds of courses, track learning progress, and earn certificates from experts.",
    "image": "https://images.unsplash.com/photo-1597933471507-1ca5765185d8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": 6,
    "title": "Finance Manager",
    "description": "Manage your expenses, create budgets, and get insights to make smarter financial decisions.",
    "image": "https://img.freepik.com/free-photo/businessmen-hands-white-table-with-documents-drafts_176420-361.jpg?uid=R140702484&ga=GA1.1.1873161437.1736591058&semt=ais_hybrid&w=740"
  }
])
</script>

<template>
  <BreadCrumb />

  <div class="projects">
    <div class="container">
      <SectionTitle class="text-center mb-2" title="Industry-Standard Applications" sub-title="Our Application" />
    <div class="medium-2 large-3 gap-2">
      <ApplicationCard v-for="app in apps" :key="app.id" :app="app" />
    </div>
    <PaginationButton/>
    </div>
  </div>
</template>

<style>
.projects {
  padding: 3.75rem 0 1rem 0;
}
</style>
