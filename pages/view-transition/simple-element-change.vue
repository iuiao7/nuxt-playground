<template>
  <div>
    <header class="contain-paint grid h-[54px] items-center bg-[#673ab7] px-[1.2rem] color-white">
      <span>Demo site</span>
    </header>
    <main class="p-[1.2rem]">
      <h1 class="m-0 max-w-[43ch]" font="size-[1.6rem] 600">
        Demo page
      </h1>
      <div
        v-if="!showNew"
        class="contain-layout w-fit rounded-[15px] bg-green p-[20px_35px] view-transition-name-[box]"
        text="[30px] white"
      >
        <div class="contain-layout view-transition-name-[box-text]">
          Old
        </div>
      </div>
      <div
        v-else
        class="contain-layout fixed right-[20px] top-[20px] w-fit rounded-[15px] bg-[#38e8da] p-[20px_50px] view-transition-name-box"
        text="[30px] black"
      >
        <div class="contain-layout view-transition-name-[box-text]">
          The new view
        </div>
      </div>
      <p>
        <UiButton @click="toggle">
          Toggle
        </UiButton>
      </p>
    </main>
  </div>
</template>

<script lang="ts" setup>
const showNew = ref(false)

function toggle() {
  document.startViewTransition?.(async () => {
    showNew.value = !showNew.value
    await nextTick()
  })
}
</script>

<style>
/* ::view-transition-group(*),
::view-transition-old(*),
::view-transition-new(*) {
  animation-duration: 500ms;
} */

::view-transition-group(box) {
  overflow: hidden;
}

::view-transition-old(box),
::view-transition-new(box) {
  height: 100%;
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
