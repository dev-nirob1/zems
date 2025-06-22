<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
     <footer class="footer pt-5">
      <div class="container medium-2 large-4 gap-2 py-2">
        <!-- Footer logo and social media links -->
        <div>
          <RouterLink to="/" class="logo" style="width: 250px;">
            <img
              class="width-full"
              src="https://zems.uk/uploads/brands/logo.png"
              alt="logo"
            />
          </RouterLink>

          <p>Your gateway to exclusive discounts and savings</p>
          <div class="social-links">
            <a href="/#"><i class="fab fa-facebook-f"></i></a>
            <a href="/#"><i class="fab fa-twitter"></i></a>
            <a href="/#"><i class="fab fa-instagram"></i></a>
            <a href="/#"><i class="fab fa-pinterest-p"></i></a>
          </div>
        </div>
        <!-- Quick navigation links -->
        <div>
          <h5 class="title">Quick Links</h5>
          <ul class="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">All Coupons</a>
            </li>
            <li>
              <a href="/">Stores</a>
            </li>
            <li>
              <a href="/">Categories</a>
            </li>
            <li>
              <a href="/">Savings Tips</a>
            </li>
          </ul>
        </div>
        <!-- Coupon policy related links -->
        <div>
          <h5 class="title">Coupon Policies</h5>
          <ul class="footer-links">
            <li>
              <a href="/">How it Works</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Terms of Services</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </div>
        <!-- Newsletter subscription form -->
        <div>
          <h5 class="title">Get Exclusive Deals</h5>
          <p>Subscribe to receive special offers before anyone else</p>
          <form class="subscribe-form">
            <input type="email" placeholder="Your email address" required />
            <button class="btn" type="submit">
              <i class="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
      <!-- Footer bottom copyright -->
      <div class="footer-bottom">
        © 2025 CouponSavings. All rights reserved.
      </div>
    </footer>
</template>

<style scoped>
.footer {
  background-color: var(--secondary-color);
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
  height: 50px;
  width: 50px;
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
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
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
  background-color: var(--primary-color);
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
  color: var(--primary-color);
  opacity: 0;
  display: none;
  transition: all 0.3s ease;
}
.footer ul a:hover {
  color: var(--primary-color);
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
  border-radius: 0.5rem 0 0 0.5rem;
  outline: none;
  font-size: 0.95rem;
  background-color: var(--white-color);
}
.subscribe-form .btn {
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  color: var(--white-color);
  border: none;
  border-radius: 0 0.5rem 0.5rem 0;
}
/* Footer copyright bar*/
.footer-bottom {
  padding: 1.5rem;
  text-align: center;
  background-color: rgb(from var(--primary-color) r g b/ 10%);
}
</style>
