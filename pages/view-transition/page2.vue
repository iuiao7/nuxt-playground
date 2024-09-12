<template>
  <div>
    <header class="main-header">
      <NuxtLink to="/view-transition/page1" class="back-and-title">
        <svg class="back-icon" viewBox="0 0 24 24">
          <path d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20v-2z" />
        </svg>
        <span>Demo site</span>
      </NuxtLink>
    </header>
    <main class="content">
      <h1 class="content-title">Page 2</h1>
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
        <NuxtLink to="/view-transition/page1"> page 1 </NuxtLink>.
      </p>
    </main>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
