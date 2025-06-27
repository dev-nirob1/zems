<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import HeroTitle from '@/components/Elements/HeroTitle.vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import SectionTitle from '@/components/Widget/SectionTitle.vue';

</script>

<template>
 <section class="pricing bg-lighten">
    <div class="container">
      <!-- Section header -->
      <SectionTitle title="Scalable Development Packages" sub-title="Pricing Options"></SectionTitle>
      <!-- card container grid: small/medium/large = 1/2/3 -->
      <div class="medium-2 large-3 align-center justify-center gap-1 medium-gap-2">
        <div>
          <!-- Pricing Card -->
          <div class="pricing-card">
            <span class="price-icon">
              <i class="fa-solid fa-laptop-code"></i>
            </span>
            <SubTitle>Starter</SubTitle>
            <HeroTitle>€1,500 <span>/project</span></HeroTitle>
            <BaseParagraph>
              Perfect for small businesses needing basic web presence or simple applications
            </BaseParagraph>
            <ul class="feature-list">
              <li>Responsive Website</li>
              <li>Basic SEO Setup</li>
              <li>1 Month Support</li>
              <li>CMS Integration</li>
            </ul>
            <BaseButton>Get Started</BaseButton>
          </div>
        </div>
        <div>
          <!-- Pricing Card with exclusive badge -->
          <div class="pricing-card featured">
            <div class="flex justify-end">
              <div class="exclusive-badge">
                <BaseParagraph class="badge">
                  <i class="fa-solid fa-crown"></i>
                 Most Popular
                </BaseParagraph>
              </div>
            </div>
            <span class="price-icon">
              <i class="fa-solid fa-mobile-screen-button"></i>
            </span>
            <SubTitle>Business</SubTitle>
            <HeroTitle>€3,500 <span>/project</span></HeroTitle>
            <BaseParagraph>Comprehensive solutions for growing businesses with custom features</BaseParagraph>
           <ul class="feature-list">
              <li>Responsive Website</li>
              <li>Basic SEO Setup</li>
              <li>1 Month Support</li>
              <li>CMS Integration</li>
            </ul>
            <BaseButton>Get Started</BaseButton>
          </div>
        </div>
        <div>
          <!-- Pricing Card -->
          <div class="pricing-card">
            <span class="price-icon">
              <i class="fa-solid fa-cloud-arrow-up"></i>
            </span>
            <SubTitle>Enterprise</SubTitle>
            <HeroTitle>€8,000+ <span>/project</span></HeroTitle>
            <BaseParagraph>Tailored solutions for large organizations with complex requirements</BaseParagraph>
           <ul class="feature-list">
              <li>Responsive Website</li>
              <li>Basic SEO Setup</li>
              <li>1 Month Support</li>
              <li>CMS Integration</li>
            </ul>
            <BaseButton>Get Started</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ========== 8. PRICING PLANS ========== */
.pricing {
  padding: 3.75rem 0;
}
/* pricing card */
.pricing-card {
  position: relative;
  border-radius: 0.75rem;
  padding: 3rem 1rem;
  transition: all 0.5s;
  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
  cursor: pointer;
}
.pricing-card .price-icon {
  font-size: 5rem;
  color: var(--primary-color);
}
.pricing-card:hover {
  transform: translateY(-0.5rem);
}
.pricing-card .sub-title {
  margin: 0.5rem 0;
}
.pricing-card .hero-title {
  display: flex;
  align-items: center;
}
.pricing-card .hero-title span {
  font-size: 1.75rem;
  font-weight: bold;
}
.pricing-card .btn {
  border: 1px solid transparent;
  font-size: 1.25rem;
  background: var(--primary-color);
  color: var(--white-color);
  width: 100%;
}
.pricing-card .btn:hover {
  background-color: var(--white-color);
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}
.pricing-card .exclusive-badge {
  width: 280px;
  position: relative;
  margin-right: -1rem;
  margin-top: -1.5rem;
  overflow: hidden;
}
.badge {
  background-color: var(--secondary-color);
  color: var(--white-color);
  padding: 1rem 1rem 1rem 3rem;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
}
.pricing-card .badge::before {
  content: "";
  position: absolute;
  top: 1.1rem;
  left: -1.75rem;
  height: 3.5rem;
  width: 3.5rem;
  rotate: 45deg;
  background: var(--white-color);
}

.feature-list{
 list-style: none;
 padding-left: 0;
}
.feature-list li {
  position: relative;
   padding-left: 1rem;
   margin-bottom: .25rem;
}
.feature-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--primary-color);
}

@media (min-width: 992px){
  .pricing-card {
    padding: 3rem 2rem;
  }
  .pricing-card .exclusive-badge {
    margin-right: -2rem;
  }
}
</style>
