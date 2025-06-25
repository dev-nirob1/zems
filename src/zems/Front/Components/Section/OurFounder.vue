<template>
  <!-- our founder section  -->
  <section class="container founder py-2 medium-py-3 large-py-5">
    <div class="medium-2 gap-2">
      <div class="founder-image bg-primary flex align-center justify-center">
        <img src="https://images.pexels.com/photos/901424/pexels-photo-901424.jpeg?_gl=1*1od4usr*_ga*OTAzOTgwMTguMTczNzAwNTI1OA..*_ga_8JE65Q40S6*czE3NTA4NzM4MjIkbzE4JGcxJHQxNzUwODc0MDQ4JGo0NSRsMCRoMA.." alt="">
      </div>
      <div class="px-1">
        <h3 class="title">
          INTORDUCING <br>OUR FOUNDER
        </h3>
        <div class="content-block mb-1">
          <h6 class="text-primary">Paragraph Title</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi asperiores quaerat
            excepturi.</p>
        </div>
        <div class="flex gap-1">
          <div class="founder-card">
            <i class="fa-solid fa-user"></i>
            <h6 class="text-white">Content</h6>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, ipsa!</p>
          </div>
          <div class="founder-card">
            <i class="fa-solid fa-user"></i>
            <h6 class="text-white">Content</h6>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, ipsa!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* founder section  */
.founder-image {
  padding: 1rem;
}

.founder-image img {
  height: 280px;
  width: 280px;
  border-radius: 1rem;
  object-fit: cover;
}

.founder-card {
  text-align: center;
  padding: 1.5rem .5rem;
  border-radius: 1.5rem;
  color: var(--secondary-color);
  background-color: var(--primary-color);
}

.founder-card i {
  border: 1px solid var(--secondary-color);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

@media (min-width: 992px) {
  .founder-image {
    padding: 4rem;
  }

  .founder-image img {
    height: 350px;
    width: 350px;
  }
}
</style>
