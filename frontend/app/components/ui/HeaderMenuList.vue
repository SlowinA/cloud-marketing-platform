<script setup lang="ts">
  const { data: menuItems } = await useFetch('/api/menu/header');
</script>

<template>
  <ul class="header-menu-list" v-if="menuItems">
    <li v-for="item in menuItems.items" :key="item.id" class="header-menu-item inline mx-2">
      <a :href="item.link" class="header-menu-link">{{ item.name }}</a>
    </li>
  </ul>
  <p v-else>Loading menu...</p>
</template>