<template>
  <div>
    <h1>Index page</h1>
    <ul>
      <li v-for="route of routes" :key="route.name">
        <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();

const routes = router.options.routes;
</script>

<style></style>
