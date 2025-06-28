<script setup>
import BaseTitle from '@/components/Elements/BaseTitle.vue';
import BreadCrumb from '../Components/Section/BreadCrumb.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';

</script>

<template>
  <BreadCrumb/>
  <div class="container">
    <div class="project-details medium-2 gap-2">
      <div>
        <img src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D" alt="">
      </div>
      <div class="flex flex-col gap-2">
        <img style="height: calc(50% - 1rem);" src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D" alt="">
        <img style="height: calc(50% - 1rem);" src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZ3JhbW1lcnxlbnwwfHwwfHx8MA%3D%3D" alt="">
      </div>
    </div>
    <div class="details">
      <BaseTitle>Fitness Tracker</BaseTitle>
      <BaseParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo amet in quam eius nam totam pariatur odit ab sint suscipit architecto deserunt magnam, eos saepe assumenda? Corporis excepturi facilis quos amet voluptatem, accusamus repellendus ipsum atque aliquid tenetur molestiae obcaecati numquam itaque quasi quia velit iure aperiam fugiat officiis. Quia ab illo natus possimus doloremque sunt corrupti aperiam aliquid amet, non praesentium vel soluta perferendis hic alias id est, explicabo quidem maiores tempore eum pariatur. Aliquam, obcaecati itaque. Voluptas totam et rem consequuntur provident eius quia saepe temporibus vitae harum aperiam, modi facilis accusantium, reprehenderit consectetur expedita autem optio nulla quaerat laboriosam esse reiciendis mollitia est eum.
      </BaseParagraph>
    </div>
  </div>
</template>

<style scoped>
.project-details {
  padding: 3.75rem 0;
}
.project-details>div{
  width: 100%;
  height: 80vh;
}
.project-details img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
