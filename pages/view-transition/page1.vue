<script lang="ts" setup></script>

<template>
  <div>
    <header class="contain-paint grid h-[54px] items-center bg-[#673ab7] px-[1.2rem] color-white">
      Demo site
    </header>
    <main class="p-[1.2rem]">
      <h1 class="m-0 max-w-[43ch]" font="size-[1.6rem] 600">
        Page 1
      </h1>
      <p>This is the content for page 1.</p>
      <p>
        Why not check out
        <NuxtLink
          to="/view-transition/page2"
          class="text-blue-600 hover:text-red-600"
          decoration="underline blue-600 hover:red-600"
        >
          page 2
        </NuxtLink>?
      </p>
    </main>
  </div>
</template>

<style></style>
