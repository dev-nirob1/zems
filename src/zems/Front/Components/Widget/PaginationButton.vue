<template>
  <ul class="pagination">
    <ListItem>
      <a href="/coupon_list">« Prev </a>
    </ListItem>
    <ListItem>
      <a href="#" class="active">1</a>
    </ListItem>
    <ListItem>
      <a href="#">2</a>
    </ListItem>
    <ListItem>
      <a href="#">3</a>
    </ListItem>
    <ListItem>
      <a href="#"> Next »</a>
    </ListItem>
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
  gap: 0.75rem;
}

.pagination li {
  font-weight: 500;
  color: var(--primary-light-color);
  background-color: var(--white-color);
}

.pagination li a {
  display: inline-block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  white-space: nowrap;
}

.pagination li a.active {
  background-color: var(--primary-light-color);
  color: var(--white-color);
}
</style>
