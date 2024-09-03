<template>
  <div>
    <header class="main-header">
      <span class="main-header-text">Demo site</span>
    </header>
    <main class="content">
      <h1 class="content-title">Demo page</h1>
      <div class="old-view" v-if="!showNew">
        <div class="view-text">Old</div>
      </div>
      <div class="new-view" v-else>
        <div class="view-text">The new view</div>
      </div>
      <p><button class="toggle" @click="toggle">Toggle</button></p>
    </main>
  </div>
</template>

<script lang="ts" setup>
const showNew = ref(false);

function toggle() {
  document.startViewTransition(async () => {
    showNew.value = !showNew.value;
    await nextTick();
  });
}
</script>

<style>
.old-view,
.new-view {
  padding: 20px 35px;
  background: green;
  color: #fff;
  font-size: 30px;
  width: fit-content;
  border-radius: 15px;

  view-transition-name: box;
  contain: layout;
}

.new-view {
  padding: 20px 50px;
  position: fixed;
  top: 20px;
  right: 20px;
  background: #38e8da;
  color: #000;
}

::view-transition-group(*),
::view-transition-old(*),
::view-transition-new(*) {
  animation-duration: 500ms;
}

::view-transition-group(box) {
  overflow: hidden;
}

::view-transition-old(box),
::view-transition-new(box) {
  height: 100%;
}

.old-view div,
.new-view div {
  view-transition-name: box-text;
  contain: layout;
}

::view-transition-group(box-text) {
  overflow: hidden;
}

::view-transition-old(box-text),
::view-transition-new(box-text) {
  height: 100%;
  width: auto;
}
</style>
