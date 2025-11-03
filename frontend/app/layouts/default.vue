<template>
  <div class="flex flex-row flex-wrap max-w-screen min-h-screen flex-col content-start sticky bg-white text-black">
    <UiHeader />
    <UiDrawer />
    <div class="relative left-[256px] w-[calc(100%-256px)] min-h-[calc(100vh-64px-40px)] flex-shrink p-2">
      <div class="">
        <slot />
      </div>
    </div>
    <UiFooter />
  </div>
</template>
