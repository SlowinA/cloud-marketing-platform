<script setup lang="ts">
  const { data: menuItems } = await useFetch('/api/menu/drawer');
</script>

<template>
  <ul class="drawer-menu-list" v-if="menuItems">
    <li v-for="item in menuItems.items" :key="item.id" class="drawer-menu-item">
      <svg v-if="item.icon" class="drawer-menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <image :href="item.icon" width="24" height="24"/>
      </svg>
      <a :href="item.link" class="drawer-menu-link">{{ item.name }}</a>
    </li>
  </ul>
  <p v-else>Loading menu...</p>
</template>