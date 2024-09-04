<template>
  <div class="font-mono">
    <div>[</div>
    <ul class="ml-4">
      <li v-for="route of routes" :key="route.name">
        <div>{</div>
        <div class="ml-4">name: "{{ route.name }}"</div>
        <div class="ml-4">
          path: "<NuxtLink
            :to="route.path"
            class="decoration-blue-600 underline text-blue-600 hover:text-red-600 hover:decoration-red-600"
            >{{ route.path }}</NuxtLink
          >",
        </div>
        <div>},</div>
      </li>
    </ul>
    <div>]</div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const routes = router.options.routes;
</script>

<style scoped></style>
