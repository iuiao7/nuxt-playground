<template>
  <div>
    <header class="contain-paint grid h-[54px] items-center bg-[#673ab7] px-[1.2rem] color-white">
      <NuxtLink
        to="/view-transition/page1"
        class="items-center color-inherit decoration-none"
        grid="~ cols-[31px_1fr] gap-[0.3rem]"
      >
        <svg class="block w-full fill-white" viewBox="0 0 24 24">
          <path d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20v-2z" />
        </svg>
        <span>Demo site</span>
      </NuxtLink>
    </header>
    <main class="p-[1.2rem]">
      <h1 class="m-0 max-w-[43ch]" font="size-[1.6rem] 600">
        Page 2
      </h1>
      <p>This is the content for page 2.</p>
      <ol>
        <li>It</li>
        <li>also</li>
        <li>has</li>
        <li>a</li>
        <li>list!</li>
      </ol>
      <p>
        Ok, that's enough fun, you can go back to
        <NuxtLink
          to="/view-transition/page1"
          class="text-blue-600 hover:text-red-600"
          decoration="underline blue-600 hover:red-600"
        >
          page 1
        </NuxtLink>.
      </p>
    </main>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
