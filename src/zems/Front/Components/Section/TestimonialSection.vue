<template>
  <section class="process-section">
    <div class="container">
      <h2 class="section-title">Our Development Process</h2>
      <p class="section-subtitle">Transparent workflow that delivers quality results</p>

      <div class="timeline">
        <!-- Process Step 1 -->
        <div class="process-step">
          <div class="step-header">
            <div class="step-number">01</div>
            <div class="step-icon">
              <i class="fa-solid fa-lightbulb"></i>
            </div>
            <h3 class="step-title">Discovery</h3>
          </div>
          <div class="step-content">
            <p>Requirement analysis, project scoping, and technical feasibility study</p>
            <ul class="step-features">
              <li><i class="fa-solid fa-check"></i> Stakeholder interviews</li>
              <li><i class="fa-solid fa-check"></i> Technical documentation</li>
              <li><i class="fa-solid fa-check"></i> Project roadmap</li>
            </ul>
          </div>
        </div>

        <!-- Process Step 2 -->
        <div class="process-step">
          <div class="step-header">
            <div class="step-number">02</div>
            <div class="step-icon">
              <i class="fa-solid fa-pen-ruler"></i>
            </div>
            <h3 class="step-title">Design</h3>
          </div>
          <div class="step-content">
            <p>UI/UX design, system architecture, and technical specifications</p>
            <ul class="step-features">
              <li><i class="fa-solid fa-check"></i> Wireframes & prototypes</li>
              <li><i class="fa-solid fa-check"></i> Database design</li>
              <li><i class="fa-solid fa-check"></i> API architecture</li>
            </ul>
          </div>
        </div>

        <!-- Process Step 3 -->
        <div class="process-step">
          <div class="step-header">
            <div class="step-number">03</div>
            <div class="step-icon">
              <i class="fa-solid fa-code"></i>
            </div>
            <h3 class="step-title">Development</h3>
          </div>
          <div class="step-content">
            <p>Agile development with continuous integration and testing</p>
            <ul class="step-features">
              <li><i class="fa-solid fa-check"></i> Sprint planning</li>
              <li><i class="fa-solid fa-check"></i> Code reviews</li>
              <li><i class="fa-solid fa-check"></i> Daily standups</li>
            </ul>
          </div>
        </div>

        <!-- Process Step 4 -->
        <div class="process-step">
          <div class="step-header">
            <div class="step-number">04</div>
            <div class="step-icon">
              <i class="fa-solid fa-vial"></i>
            </div>
            <h3 class="step-title">Testing</h3>
          </div>
          <div class="step-content">
            <p>Comprehensive QA and performance optimization</p>
            <ul class="step-features">
              <li><i class="fa-solid fa-check"></i> Unit & integration tests</li>
              <li><i class="fa-solid fa-check"></i> Security audits</li>
              <li><i class="fa-solid fa-check"></i> User acceptance testing</li>
            </ul>
          </div>
        </div>

        <!-- Process Step 5 -->
        <div class="process-step">
          <div class="step-header">
            <div class="step-number">05</div>
            <div class="step-icon">
              <i class="fa-solid fa-rocket"></i>
            </div>
            <h3 class="step-title">Deployment</h3>
          </div>
          <div class="step-content">
            <p>Seamless launch and post-deployment support</p>
            <ul class="step-features">
              <li><i class="fa-solid fa-check"></i> CI/CD pipeline</li>
              <li><i class="fa-solid fa-check"></i> Monitoring setup</li>
              <li><i class="fa-solid fa-check"></i> Maintenance plan</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Base Styles */
.process-section {
  padding: 5rem 1rem;
  background: #f9fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  color: #2d3748;
  margin-bottom: 1rem;
}

.section-subtitle {
  text-align: center;
  color: #718096;
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

/* Timeline Design */
.timeline {
  position: relative;
  padding-left: 50px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 35px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #e2e8f0;
  border-radius: 2px;
}

.process-step {
  position: relative;
  margin-bottom: 3rem;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.step-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  position: relative;
}

.step-number {
  position: absolute;
  left: -70px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #cbd5e0;
}

.step-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #ebf8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  color: #4299e1;
  font-size: 1.5rem;
}

.step-title {
  font-size: 1.5rem;
  color: #2d3748;
}

.step-content p {
  color: #4a5568;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.step-features {
  list-style: none;
  padding-left: 0;
}

.step-features li {
  margin-bottom: 0.5rem;
  color: #718096;
  display: flex;
  align-items: center;
}

.step-features i {
  color: #48bb78;
  margin-right: 0.5rem;
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .timeline {
    padding-left: 30px;
  }

  .timeline::before {
    left: 15px;
  }

  .step-number {
    left: -50px;
  }

  .step-icon {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .step-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .step-icon {
    margin-bottom: 1rem;
    margin-right: 0;
  }
}
</style>
