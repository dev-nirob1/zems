<template>
 <ul class="pagination">
        <li>
          <a href="/coupon_list">« Prev </a>
        </li>
        <li>
          <a href="#" class="active">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#"> Next »</a>
        </li>
      </ul>
</template>
<style scoped>
.pagination {
  font-size: 14px;
  margin-top: 3rem;
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.pagination li {
  border-radius: 0.5rem;
  font-weight: 500;
  color: var(--primary-color);
  background-color: var(--white-color);
}
.pagination li a {
  display: inline-block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 0.5rem;
}
.pagination li a.active {
  background-color: var(--primary-color);
  color: var(--white-color);
}
</style>
