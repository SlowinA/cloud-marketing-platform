<script setup>
import MenuList from './HeaderMenuList.vue';
</script>

<template>
    <div class="z-9999 flex items-center justify-between h-[64px] w-full p-2 sticky top-0 bg-primary text-white">
        <div class="h-[48px] w-[48px] items-center justify-items-center">
            <a href="/" class="h-full w-full flex items-center justify-center">
                <NuxtImg  src="/img/utils/logo.png" alt="Logo" class="h-[48px] w-[48px]" />
            </a>
        </div>
        <div class="w-auto flex items-center justify-end">
            <MenuList />
        </div>
    </div>
</template>
