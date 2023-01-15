<template>
  <div>
    <HeaderLayout />
    <div class="mx-0 sm:mx-8">
      <slot />
    </div>
  </div>
</template>

<script setup>
import HeaderLayout from "./HeaderLayout.vue";
</script>
