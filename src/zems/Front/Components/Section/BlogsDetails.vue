<script setup>

</script>

<template>
  <div class="blog-details">
    <div class="container">
      <BaseImage src="https://www.shutterstock.com/image-photo/blogging-blog-word-coder-coding-600nw-520314613.jpg"
        alt="" />
      <div class="blog-content">

        <div class="flex align-center gap-1 mb-1">
          <span><i class="fa-solid fa-calendar-days"></i> 11 July, 2025</span>
          <span><i class="fas fa-user"></i> Mr. Jack</span>
        </div>
        <BaseTitle>Building Scalable Design Systems That Empower Developer Teams</BaseTitle>

        <div class="description mt-1">
          <SubTitle>Understanding Digital Minimalism</SubTitle>
          <BaseParagraph>In today's hyper-connected world, digital minimalism offers a refreshing approach to technology
            use. Rather than rejecting modern tools, it encourages intentional engagement with digital platforms. This
            philosophy helps users reclaim focus, reduce stress, and improve overall wellbeing by eliminating
            unnecessary digital clutter.</BaseParagraph>
        </div>

        <div class="description mt-1">
          <SubTitle>The Benefits of Mindful Technology Use</SubTitle>
          <BaseParagraph>Research shows that mindful technology use can lead to improved mental health, better sleep
            quality, and enhanced productivity. By setting boundaries with our devices, we create space for meaningful
            offline connections and activities. Many report feeling more present in their daily lives after adopting
            these practices.</BaseParagraph>
        </div>

        <div class="description mt-1">
          <BaseParagraph>Begin with a digital audit - track your screen time for one week. Then, implement small changes
            like turning off non-essential notifications or designating tech-free zones in your home. Many find success
            with the "20-20-20 rule": every 20 minutes, look at something 20 feet away for 20 seconds to reduce eye
            strain.</BaseParagraph>
        </div>

        <div class="description mt-1">
          <SubTitle>Sustaining Long-Term Balance</SubTitle>
          <BaseParagraph>Maintaining digital wellness requires ongoing effort. Schedule regular "digital detox" periods,
            perhaps one day each month. Cultivate offline hobbies that bring you joy, and be mindful of your motivations
            when reaching for your devices. Remember, technology should serve you, not the other way around.
          </BaseParagraph>
        </div>

      </div>

      <div class="related">
        <SubTitle>Related More Blogs</SubTitle>
        <div class="medium-2 large-3 gap-2 mt-2">
          <div v-for="blog in 3" :key="blog" class="blog-card">
            <div class="image">
              <BaseImage
                src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80" />
            </div>
            <div class="card-body">
              <div class="flex justify-between">
                <span><i class="fa-solid fa-calendar-days"></i> July 10, 2025</span>
                <span><i class="fas fa-tags"></i> Architecture</span>
              </div>
              <SubTitle>Scaling Microservices Architecture for Enterprise-Level Applications</SubTitle>
              <RouterLink to="/">Read More <i class="fa-solid fa-arrow-right"></i></RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-details {
  padding: 3.75rem
}

.blog-details img {
  height: 70vh;
  width: 100%;
  object-fit: cover;
}

.blog-content {
  padding: 2.75rem 0;
}

.description p {
  font-size: 1.05rem;
  margin: .75rem 0;
}


.blog-card {
  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
}

.blog-card .image {
  position: relative;
  overflow: hidden;
  height: 220px;
  width: auto;
}

.blog-card .image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all .5s ease-in-out;
}

.blog-card .image:hover img {
  transform: scale(1.1);
}

.blog-card .card-body {
  padding: 1.5rem 1rem;
}

.blog-card i {
  color: var(--primary-color);
  transition: all .3s ease-in-out;
}

.blog-card .sub-title {
  padding: .75rem 0;
}

.blog-card a {
  display: flex;
  align-items: center;
  gap: .25rem;
  color: var(--primary-color);
  text-decoration: none;
  transition: all .3s ease-in-out;
}

.blog-card a:hover i {
  padding-left: .5rem;
  color: var(--primary-light-color);
}

.blog-card a:hover {
  color: var(--primary-light-color);
}
</style>