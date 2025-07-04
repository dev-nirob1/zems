<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';

</script>

<template>
  <section class="founder-two">
    <div class="container">
      <div class="large-3 align-center gap-2">
        <div>
          <SectionTitle class="mb-1" title="Our Visionary Leadership" sub-title="Zems Founder" />
          <div>
            <SubTitle>Innovative Minds Behind Us</SubTitle>
            <BaseParagraph>Our founders bring together decades of combined experience in technology and business
              innovation, driven by a shared passion for creating solutions that make a real difference in people's
              lives.</BaseParagraph>
          </div>
        </div>
        <div>
          <BaseImage class="width-full" image="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
            alt="Alex Johnson, Co-Founder and CEO" />
        </div>
        <ul>
          <ListItem class="flex gap-1">
            <div>
              <i class="icon fa-solid fa-chart-line fa-2x"></i>
            </div>
            <div>
              <SubTitle>Proven Success</SubTitle>
              <BaseParagraph>Founded 3 successful startups. Consistently identify market needs and deliver results.
              </BaseParagraph>
            </div>
          </ListItem>
          <ListItem class="flex gap-1">
            <div>
              <i class="icon fa-solid fa-lightbulb fa-2x"></i>
            </div>
            <div>
              <SubTitle>Deep Expertise</SubTitle>
              <BaseParagraph>25+ years in tech. Consumer-focused solutions that drive success.</BaseParagraph>
            </div>
          </ListItem>
          <ListItem class="flex gap-1">
            <div>
              <i class="icon fa-solid fa-puzzle-piece fa-2x"></i>
            </div>
            <div>
              <SubTitle>Innovative Thinking</SubTitle>
              <BaseParagraph>Multiple patents. Award-winning designs. Unique problem-solving approach.</BaseParagraph>
            </div>
          </ListItem>
        </ul>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* founder-two  */
.founder-two {
  padding: 3.75rem 0;
  position: relative;
}

.founder-two img {
  border-radius: .75rem;
}

.founder-two .icon {
  border-radius: .5rem;
  background-color: var(--primary-color);
  color: var(--white-color);
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.founder-two p {
  margin-top: .75rem;
}

.founder-two ul {
  list-style: none;
  padding-left: 0;
}

ul li:not(:last-child) {
  margin: 0;
}

.founder-two::after {
  content: '';
  width: 100vw;
  height: 50%;
  position: absolute;
  top: 50%;
  right: 0;
  background-color: var(--light-color);
  z-index: -1;
}

@media (min-width: 992px) {
  .founder-two::after {
    height: 100%;
    top: 0;
    right: 0;
    width: 50vw;
  }
}
</style>
