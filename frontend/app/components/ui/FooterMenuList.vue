<script setup lang="ts">
  const { data: menuItems } = await useFetch('/api/menu/footer');
</script>

<template>
  <ul class="footer-menu-list flex flex-row gap-8" v-if="menuItems">
    <li v-for="item in menuItems.items" :key="item.id" class="footer-menu-item">
      <a :href="item.link" class="footer-menu-link">{{ item.name }}</a>
    </li>
  </ul>
  <p v-else>Loading menu...</p>
</template>