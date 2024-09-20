<template>
  <main>
    <ContentRenderer :key="page._id" :value="page" />
  </main>
</template>

<script setup lang="ts">
const { page } = useContent()
</script>
