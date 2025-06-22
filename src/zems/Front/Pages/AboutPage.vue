
<template>
  <section class="services-section">
    <div class="container">
      <div class="section-header">
        <h2>Our Development Services</h2>
        <p>Professional solutions tailored to your business requirements</p>
      </div>

      <div class="services-grid">
        <div class="service-card">
          <div class="icon">
            <i class="fas fa-code"></i>
          </div>
          <h3>Web Development</h3>
          <p>Custom websites and web applications built with modern technologies.</p>
          <a href="#" class="learn-more">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="service-card">
          <div class="icon">
            <i class="fas fa-mobile-alt"></i>
          </div>
          <h3>Mobile Apps</h3>
          <p>iOS and Android applications developed with native or hybrid frameworks.</p>
          <a href="#" class="learn-more">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="service-card">
          <div class="icon">
            <i class="fas fa-cloud"></i>
          </div>
          <h3>Cloud Solutions</h3>
          <p>Scalable cloud infrastructure and deployment services.</p>
          <a href="#" class="learn-more">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="service-card">
          <div class="icon">
            <i class="fas fa-robot"></i>
          </div>
          <h3>AI Integration</h3>
          <p>Implement machine learning and automation into your workflows.</p>
          <a href="#" class="learn-more">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="service-card">
          <div class="icon">
            <i class="fas fa-paint-brush"></i>
          </div>
          <h3>UI/UX Design</h3>
          <p>Beautiful interfaces with intuitive user experiences.</p>
          <a href="#" class="learn-more">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="service-card">
          <div class="icon">
            <i class="fas fa-headset"></i>
          </div>
          <h3>Tech Support</h3>
          <p>Ongoing maintenance and support for your digital products.</p>
          <a href="#" class="learn-more">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // No JavaScript needed for static version
}
</script>

<style scoped>
/* Base Styles */
.services-section {
  padding: 80px 20px;
  background-color: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 15px;
}

.section-header p {
  font-size: 1.1rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

/* Service Cards */
.service-card {
  background: white;
  border-radius: 10px;
  padding: 40px 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.service-card .icon {
  width: 70px;
  height: 70px;
  background: #e0f2fe;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  color: #0369a1;
  font-size: 1.8rem;
}

.service-card h3 {
  font-size: 1.4rem;
  color: #1e293b;
  margin-bottom: 15px;
}

.service-card p {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 20px;
}

.service-card .learn-more {
  color: #0369a1;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.service-card .learn-more i {
  margin-left: 8px;
  transition: transform 0.2s ease;
}

.service-card .learn-more:hover i {
  transform: translateX(5px);
}

/* Responsive */
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  .section-header h2 {
    font-size: 2rem;
  }
}
</style>
