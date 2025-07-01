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
      <SectionTitle class="text-center mb-2" title="Meet Our Skilled Team" sub-title="Core Members" />

      <div class="medium-2 large-3 gap-2">
        <div class="member-card bg-light" v-for="member in members" :key="member.id">
          <div class="image">
            <BaseImage :image="member.image" />

            <div class="social-links">
              <RouterLink to="/"><i class="fab fa-linkedin-in"></i></RouterLink>
              <RouterLink to="/"><i class="fab fa-twitter"></i></RouterLink>
              <RouterLink to="/"><i class="fab fa-facebook-f"></i></RouterLink>
              <RouterLink to="/"><i class="fab fa-instagram"></i></RouterLink>
            </div>

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
  position: relative;
  border-radius: .75rem;
}

.member-card p {
  margin: 0;
  padding-top: .5rem;
}

.member-card .image {
  position: relative;
  height: 300px;
  width: 100%;
}

.social-links {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  background-color: rgb(from var(--secondary-color)r g b / 15%);
  opacity: 0;
  transition: all .3s ease-in-out
}
.member-card:hover .social-links {
  width: 100%;
  opacity: 1;
}
/* Social links with hover effects */
.social-links a {
  display: inline-block;
  text-decoration: none;
  font-size: 1.25rem;
  height: 3rem;
  width: 3rem;
  border-radius: .25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-color);
  color: var(--white-color);
}
.social-links a:hover i {
  transform: scale(1.2);
  transition: all 0.3s ease;
}

.member-card .image img {
  border-radius: .75rem .75rem 0 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
