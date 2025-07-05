<script setup>
defineProps({
  memberData: {
    type: Object
  }
})
</script>

<template>
  <div class="member-card bg-light">
    <div class="image">
      <BaseImage :image="memberData.image" />
      <div class="social-links">
        <RouterLink to="/"><i class="fab fa-linkedin-in"></i></RouterLink>
        <RouterLink to="/"><i class="fab fa-twitter"></i></RouterLink>
        <RouterLink to="/"><i class="fab fa-facebook-f"></i></RouterLink>
        <RouterLink to="/"><i class="fab fa-instagram"></i></RouterLink>
      </div>
    </div>
    <div class="p-1">
      <SubTitle>{{ memberData.name }}</SubTitle>
      <BaseParagraph>{{ memberData.role }}</BaseParagraph>
    </div>
  </div>
</template>
<style scoped>
.member-card {
  position: relative;
  border-radius: .75rem;
  overflow: hidden;
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

.member-card .social-links {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  background-color: rgb(from var(--dark-color)r g b / 15%);
  opacity: 1;
}

.member-card .social-links a {
  display: inline-block;
  text-decoration: none;
  font-size: 1.25rem;
  height: 3rem;
  width: 3rem;
  border-radius: .25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white-color);
  color: var(--secondary-color);
}

.member-card .social-links a:hover i {
  transform: scale(1.2);
  transition: all 0.3s ease;
}

.member-card .image img {
  border-radius: .75rem .75rem 0 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 992px) {
  .member-card .social-links {
    width: 0;
    opacity: 0;
    transition: all .3s ease-in-out
  }

  .member-card:hover .social-links {
    width: 100%;
    opacity: 1;
  }
}
</style>
