<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const layout = "default";
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
</style>
