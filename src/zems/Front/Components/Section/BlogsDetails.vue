<script setup>
import { ref } from 'vue';
import BlogCard from '../Widget/BlogCard.vue';

const blog = ref({
  image: 'https://www.shutterstock.com/image-photo/blogging-blog-word-coder-coding-600nw-520314613.jpg',
  date: '11 July, 2025',
  author: 'Mr. Jack',
  title: 'secure-api-development-practices',
description: `
  <p>In today’s fast-paced digital environment, ensuring the security of your API is no longer optional — it’s essential. From mobile apps to web platforms, APIs serve as the backbone of modern applications, and vulnerabilities in their design can lead to serious breaches.</p>

  <h5>1. Use HTTPS Always</h5>
  <p>Secure APIs must <strong>always</strong> use HTTPS to encrypt communication between clients and servers. This protects sensitive data from being intercepted by malicious actors.</p>

  <h5>2. Implement Authentication and Authorization</h5>
  <p>Use strong, industry-standard authentication mechanisms like OAuth 2.0 or JWT. Never expose sensitive endpoints without verifying the user's identity and ensuring they have permission.</p>

  <h5>3. Input Validation and Sanitization</h5>
  <p>Never trust user input. Use input validation to prevent common attacks such as SQL injection, XSS, or command injection. Sanitize all incoming data before using it in your application logic.</p>

  <h5>4. Rate Limiting and Throttling</h5>
  <p>To prevent abuse, secure APIs must implement <em>rate limiting</em>. This ensures users can’t overwhelm your servers or perform brute-force attacks.</p>

  <h5>5. Log and Monitor API Activity</h5>
  <p>Security doesn’t end at deployment. You should actively monitor API requests, flag unusual patterns, and maintain logs for audit purposes.</p>

  <blockquote>“The biggest risk is thinking you have no risks.” – Anonymous</blockquote>

  <h5>6. Avoid Overexposing Data</h5>
  <p>Never return more data than necessary. Use field-level access control and avoid exposing internal object structures that could help attackers understand your backend.</p>

  <h5>7. Use API Gateways</h5>
  <p>An API Gateway acts as a protective layer that handles security, rate limiting, monitoring, and routing. It can serve as a single entry point for your API and helps you enforce consistent security policies.</p>

  <h5>Conclusion</h5>
  <p>API security is not a one-time task — it’s an ongoing process. By following secure API development practices, teams can build resilient applications that stand up to modern threats. As always, staying updated with the latest security trends and attack vectors is critical in the ever-changing tech landscape.</p>

  <p>Want to go deeper? Consider exploring the OWASP API Security Top 10 for more in-depth insights.</p>
`
})

const blogsData = ref([ {
    id: 1,
    title: 'Scaling Microservices Architecture for Enterprise-Level Applications',
    date: 'July 10, 2025',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80',
    slug: 'scaling-microservices-enterprise',
  },
  {
    id: 2,
    title: 'Top 10 Best Practices for Secure and Maintainable API Development',
    date: 'July 3, 2025',
    category: 'API Development',
    image: 'https://images.unsplash.com/photo-1688561807381-05137151978f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'secure-api-development-practices',
  },
  {
    id: 3,
    title: 'Building Scalable Design Systems That Empower Developer Teams',
    date: 'June 25, 2025',
    category: 'UI/UX',
    image: 'https://plus.unsplash.com/premium_photo-1681433383783-661b519b154a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D',
    slug: 'scalable-design-systems',
  },])
</script>

<template>
  <div class="blog-details">
    <div class="container">
      <BaseImage :image="blog.image" alt="image" />
      <div class="blog-content">

        <div class="flex align-center gap-1 mb-1">
          <span><i class="fa-solid fa-calendar-days"></i> {{ blog.date }}</span>
          <span><i class="fas fa-user"></i> {{ blog.author }}</span>
        </div>
        <BaseTitle>{{ blog.title }}</BaseTitle>

        <div class="description mt-1" v-html="blog.description"> </div>

      </div>
      <div class="related">
        <SubTitle>Related More Blogs</SubTitle>
        <div class="medium-2 large-3 gap-2 mt-2">
          <BlogCard v-for="blog in blogsData" :key="blog.id" :blog="blog"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-details {
  padding: 3.75rem 0;
}

.blog-details img {
  height: 80vh;
  width: 100%;
  object-fit: cover;
}

.blog-content {
  padding: 2.75rem 0;
}

.blog-content i {
  color: var(--primary-color);
}

.description p {
  font-size: 1.05rem;
  margin: .75rem 0;
}

</style>
