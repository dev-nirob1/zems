<script setup>
import BaseImage from '@/components/Elements/BaseImage.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import SectionTitle from '@/components/Widget/SectionTitle.vue';

</script>

<template>
  <section class="team-member">
    <div class="container">
      <div class="medium-3 align-center gap-2">
        <div>
          <SectionTitle style="text-align: left;" title="Our Visionary Leadership" sub-title="Zems Founder" />
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
        <div>
          <div class="flex gap-1">
            <div>
              <i class=" icon fa-solid fa-chart-line fa-2x"></i>
            </div>
            <div>
              <SubTitle>Proven Success</SubTitle>
              <BaseParagraph>Founded 3 successful startups. Consistently identify market needs and deliver results.
              </BaseParagraph>
            </div>
          </div>
          <div class="flex gap-1">
            <div>
              <i class="icon fa-solid fa-lightbulb fa-2x"></i>
            </div>
            <div>
              <SubTitle>Deep Expertise</SubTitle>
              <BaseParagraph>25+ years in tech. Consumer-focused solutions that drive success.</BaseParagraph>
            </div>
          </div>
          <div class="flex gap-1">
            <div>
              <i class="icon fa-solid fa-puzzle-piece fa-2x"></i>
            </div>
            <div>
              <SubTitle>Innovative Thinking</SubTitle>
              <BaseParagraph>Multiple patents. Award-winning designs. Unique problem-solving approach.</BaseParagraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* team-member  */
.team-member {
  padding: 3.75rem 0;
  position: relative;
}

.team-member img {
  border-radius: .75rem;
}

.team-member .icon {
  border-radius: .5rem;
  background-color: var(--dark-color);
  color: var(--white-color);
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.team-member p {
  margin-top: .75rem;
}

.team-member::after {
  content: '';
  width: 50vw;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--light-color);
  z-index: -1;
}
</style>
