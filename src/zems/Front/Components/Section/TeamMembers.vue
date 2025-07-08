<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import MemberCard from '@zems/Front/Components/Widget/MemberCard.vue';
import { ref } from 'vue';

const members = ref([
  {
    "id": 1,
    "name": "Mr. James",
    "role": "Python Developer",
    "image": "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    "social": {
      "linkedin": "https://www.linkedin.com",
      "facebook": "https://www.facebook.com",
      "twitter": "https://twitter.com",
      "instagram": "https://www.instagram.com"
    }
  },
  {
    "id": 2,
    "name": "Ms. Ayesha",
    "role": "Frontend Engineer",
    "image": "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    "social": {
      "linkedin": "https://www.linkedin.com",
      "facebook": "https://www.facebook.com",
      "twitter": "https://twitter.com",
      "instagram": "https://www.instagram.com"
    }
  },
  {
    "id": 3,
    "name": "Mr. David",
    "role": "UI/UX Designer",
    "image": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    "social": {
      "linkedin": "https://www.linkedin.com",
      "facebook": "https://www.facebook.com",
      "twitter": "https://twitter.com",
      "instagram": "https://www.instagram.com"
    }
  },
  {
    "id": 4,
    "name": "Ms. Sofia",
    "role": "Product Manager",
    "image": "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "social": {
      "linkedin": "https://www.linkedin.com",
      "facebook": "https://www.facebook.com",
      "twitter": "https://twitter.com",
      "instagram": "https://www.instagram.com"
    }
  },
  {
    "id": 5,
    "name": "Mr. Rafiq",
    "role": "DevOps Engineer",
    "image": "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg",
    "social": {
      "linkedin": "https://www.linkedin.com",
      "facebook": "https://www.facebook.com",
      "twitter": "https://twitter.com",
      "instagram": "https://www.instagram.com"
    }
  },
  {
    "id": 6,
    "name": "Ms. Clara",
    "role": "Backend Developer",
    "image": "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "social": {
      "linkedin": "https://www.linkedin.com",
      "facebook": "https://www.facebook.com",
      "twitter": "https://twitter.com",
      "instagram": "https://www.instagram.com"
    }
  }
])
</script>

<template>
  <section class="team-members">
    <div class="container">
      <SectionTitle class="text-center mb-2" title="Meet Our Skilled Team" sub-title="Core Members" />

      <div class="medium-2 large-3 gap-2">
        <MemberCard v-for="member in members" :key="member.id" :memberData="member"/>
      </div>
    </div>
  </section>
</template>
<style scoped>
.team-members {
  padding: 3.75rem 0;
}

</style>
