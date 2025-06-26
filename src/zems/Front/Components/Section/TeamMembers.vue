<script setup>
import BaseImage from '@/components/Elements/BaseImage.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import { ref } from 'vue';

const members = ref([
  {
    "id": 1,
    "name": "Mr. James",
    "role": "Python Developer",
    "image": "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
  },
  {
    "id": 2,
    "name": "Ms. Ayesha",
    "role": "Frontend Engineer",
    "image": "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
  },
  {
    "id": 3,
    "name": "Mr. David",
    "role": "UI/UX Designer",
    "image": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
  },
  {
    "id": 4,
    "name": "Ms. Sofia",
    "role": "Product Manager",
    "image": "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 5,
    "name": "Mr. Rafiq",
    "role": "DevOps Engineer",
    "image": "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg"
  },
  {
    "id": 6,
    "name": "Ms. Clara",
    "role": "Backend Developer",
    "image": "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
])
</script>

<template>
  <section class="team-members">
    <div class="container">
      <SectionTitle title="Meet Our Skilled Team" sub-title="Core Members" />

      <div class="medium-2 large-3 gap-2">
        <div class="member-card bg-light" v-for="member in members" :key="member.id">
          <div class="image">
            <BaseImage :image="member.image" />
          </div>
          <div class="p-1">
            <SubTitle>{{ member.name }}</SubTitle>
            <BaseParagraph>{{ member.role }}</BaseParagraph>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.team-members {
  padding: 3.75rem 0;
}
.member-card {
  border-radius: .75rem;
}

.member-card p {
  margin: 0;
  padding-top: .5rem;
}

.member-card .image {
  height: 300px;
  width: 100%;
}

.member-card .image img {
  border-radius: .75rem .75rem 0 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
