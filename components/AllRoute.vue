<script setup lang="ts">
const router = useRouter();
const routes = router.options.routes;
</script>

<template>
  <nav class="font-mono">
    <div>[</div>
    <ul m="y-0 l-4">
      <li v-for="route of routes" :key="route.name">
        <div>{</div>
        <div class="ml-4">
          <span>name: "</span>
          <span>{{ route.name }}</span>
          <span>",</span>
        </div>
        <div class="ml-4">
          <span>path: "</span>
          <NuxtLink
            :to="route.path"
            class="text-blue-600 hover:text-red-600"
            decoration="underline blue-600 hover:red-600"
          >
            {{ route.path }}
          </NuxtLink>
          <span>",</span>
        </div>
        <div>},</div>
      </li>
    </ul>
    <div>]</div>
  </nav>
</template>

<style scoped></style>
