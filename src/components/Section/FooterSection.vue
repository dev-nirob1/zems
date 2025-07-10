<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
      <footer class="footer">
      <div class="container medium-2 large-4 gap-2 pb-2">
        <!-- Company logo and description -->
        <div class="medium-span-2">
          <RouterLink to="/" class="logo">
            <BaseImage image="https://zems.uk/uploads/brands/logo.png" class="width-full" alt="Company Logo"/>
          </RouterLink>
 <BaseParagraph>
    Zems delivers next-generation software solutions, helping startups and enterprises across Ireland and beyond accelerate digital transformation, boost productivity, and scale with confidence.
  </BaseParagraph>

  <!-- Optional additional line (remove if not needed) -->
  <BaseParagraph>
    Trusted by industry leaders for reliability, innovation, and a customer-first approach.
  </BaseParagraph>
          <div class="social-links">
            <RouterLink to="/"><i class="fab fa-linkedin-in"></i></RouterLink>
            <RouterLink to="/"><i class="fab fa-twitter"></i></RouterLink>
            <RouterLink to="/"><i class="fab fa-github"></i></RouterLink>
            <RouterLink to="/"><i class="fab fa-facebook-f"></i></RouterLink>
          </div>
        </div>
        <!-- Company information links -->
        <div>
          <SubTitle>Company</SubTitle>
          <ul class="footer-links">
            <ListItem>
              <RouterLink to="/">About Us</RouterLink>
            </ListItem>
            <ListItem>
              <RouterLink to="/">Careers</RouterLink>
            </ListItem>
            <ListItem>
              <RouterLink to="/">Case Studies</RouterLink>
            </ListItem>
            <ListItem>
              <RouterLink to="/">Privacy Policy</RouterLink>
            </ListItem>
            <ListItem>
              <RouterLink to="/">Contact Us</RouterLink>
            </ListItem>
          </ul>
        </div>
        <!-- Newsletter subscription form -->
        <div>
          <h5 class="title">Stay Updated</h5>
          <BaseParagraph>Subscribe to our newsletter for tech insights and company news</BaseParagraph>
          <form class="subscribe-form">
            <InputField type="email" placeholder="Your email address" required />
            <BaseButton type="submit">
              <i class="fas fa-paper-plane"></i>
            </BaseButton>
          </form>
        </div>
      </div>
      <!-- Footer bottom copyright with Irish location -->
      <div class="footer-bottom">
        <p>© 2025 Zems. All rights reserved. Registered in Ireland.</p>
      </div>
    </footer>
</template>

<style scoped>
.footer {
  padding-top: 10rem;
  background-color: var(--primary-color);
  color: var(--white-color);
}
.footer h5 {
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
}
.footer .logo {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  margin-bottom: 1rem;
}
.footer .logo img {
  height: 55px;
  width: auto;
}
.social-links {
  display: flex;
  gap: 1rem;
}
/* Social links with hover effects */
.social-links a {
  display: inline-block;
  text-decoration: none;
  font-size: 1.25rem;
  height: 36px;
  width: 36px;
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
.footer h5::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 70px;
  height: 3px;
  background-color: var(--white-color);
}
.footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.footer ul a {
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.footer ul a::before {
  content: "→";
  /* color: var(--primary-light-color); */
  opacity: 0;
  display: none;
  transition: all 0.3s ease;
}
.footer ul a:hover {
  padding-left: 5px;
}
.footer ul a:hover::before {
  opacity: 1;
  display: block;
}
/* Newsletter form */
.subscribe-form {
  display: flex;
}

.subscribe-form input {
  flex: 1;
  padding: 0.8rem 1.2rem;
  border: none;
  outline: none;
  font-size: 0.95rem;
  background-color: var(--white-color);
}
.subscribe-form .btn {
  padding: 1rem 2rem;
  background-color: var(--secondary-color);
  color: var(--white-color);
  border: none;
}
/* Footer copyright bar*/
.footer-bottom {
  padding: 1rem;
  text-align: center;
  background-color: rgb(from var(--dark-color)r g b / 50%);
}
@media (min-width: 992px){
  .footer {
  padding-top: 12rem;
}
}
</style>
