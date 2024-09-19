<script lang="ts" setup>
const cards = ref([
  { id: '1', color: 'tan' },
  { id: '2', color: 'khaki' },
  { id: '3', color: 'thistle' },
  { id: '4', color: 'wheat' },
])

const cardRefs = ref<{ [key: string]: HTMLElement }>({})

onMounted(() => {
  document.documentElement.style.setProperty('view-transition-name', 'none')
})

onBeforeUnmount(() => {
  document.documentElement.style.setProperty('view-transition-name', 'root')
})

async function addCard() {
  const rand = window.performance.now().toString().replace('.', '_') + Math.floor(Math.random() * 1000)
  const newCard = {
    id: rand,
    color: getRandomColor(),
  }

  if (!document.startViewTransition) {
    cards.value.push(newCard)
    return
  }

  let newCardElement: HTMLElement | undefined

  const transition = document.startViewTransition(async () => {
    cards.value.push(newCard)
    await nextTick(() => {
      newCardElement = cardRefs.value[newCard.id]
      if (newCardElement) {
        newCardElement.style.setProperty('view-transition-name', `targeted-card`)
      }
    })
    await nextTick()
  })

  await transition.finished
  if (newCardElement) {
    newCardElement.style.setProperty('view-transition-name', `card-${newCard.id}`)
  }
}

function deleteCard(id: string) {
  const index = cards.value.findIndex(card => card.id === id)

  if (!document.startViewTransition) {
    cards.value.splice(index, 1)
    return
  }

  const toBeDeletedCardElement = cardRefs.value[id]
  if (toBeDeletedCardElement) {
    toBeDeletedCardElement.style.setProperty('view-transition-name', `targeted-card`)
  }
  document.startViewTransition(async () => {
    cards.value.splice(index, 1)
    await nextTick()
  })
}

function getRandomColor(): string {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
</script>

<template>
  <div class="grid h-[90dvh] place-items-center py-8 font-sans">
    <button
      class="i-lucide:plus?bg h-12 w-12 cursor-pointer p-2"
      border="4 solid white rounded-[100%]"
      bg="[aliceblue] center [length:70%] hover:[cornflowerblue]"
      @click="addCard"
    >
      <span class="sr-only">Add</span>
    </button>

    <ul class="w-full flex flex-wrap justify-center gap-8 p-4">
      <li
        v-for="card in cards"
        :key="card.id"
        :ref="
          (el) => {
            if (el) cardRefs[card.id] = el as HTMLElement
          }
        "
        class="card relative block aspect-ratio-[2/3] max-w-[220px] min-w-[100px] w-full rounded-2xl bg-gray"
        :style="{
          'background-color': card.color,
          'view-transition-name': `card-${card.id}`,
        }"
      >
        <button
          class="i-lucide:trash-2?bg absolute bottom-[-0.75rem] right-[-0.75rem] h-12 w-12 cursor-pointer p-2"
          border="4 solid white rounded-[100%]"
          bg="[aliceblue] center [length:70%] hover:[orangered]"
          @click="deleteCard(card.id)"
        >
          <span class="sr-only">Delete</span>
        </button>
      </li>
    </ul>

    <footer class="text-center line-height-[1.42] font-italic">
      <p>
        Icons from
        <a href="https://www.iconfinder.com/iconsets/ionicons-outline-vol-1">Ionicons Outline Vol.1</a>, licensed under
        the <a href="https://opensource.org/license/MIT">MIT license</a>.
      </p>
    </footer>
  </div>
</template>

<style>
@layer view-transition {
  /* Don't capture the root, allowing pointer interaction while cards are animating */
  @layer no-root {
    /* :root {
      view-transition-name: none;
    } */
    ::view-transition {
      pointer-events: none;
    }
  }

  /* Cards, in general, should use a bounce effect when moving to their new position */
  @layer reorder-cards {
    @supports (view-transition-class: card) {
      :root {
        --bounce-easing: linear(
          0,
          0.004,
          0.016,
          0.035,
          0.063,
          0.098,
          0.141 13.6%,
          0.25,
          0.391,
          0.563,
          0.765,
          1,
          0.891 40.9%,
          0.848,
          0.813,
          0.785,
          0.766,
          0.754,
          0.75,
          0.754,
          0.766,
          0.785,
          0.813,
          0.848,
          0.891 68.2%,
          1 72.7%,
          0.973,
          0.953,
          0.941,
          0.938,
          0.941,
          0.953,
          0.973,
          1,
          0.988,
          0.984,
          0.988,
          1
        );
      }

      .card {
        view-transition-class: card;
      }

      /* Without view-transition-class you had to write a selector that targets all cards … and that selector needed updating whenever you added/removed a card */
      ::view-transition-group(.card) {
        animation-timing-function: var(--bounce-easing);
        animation-duration: 0.5s;
      }
    }
  }

  /* Newly added cards should animate-in */
  @layer add-card {
    @keyframes animate-in {
      0% {
        opacity: 0;
        translate: 0 -200px;
      }
      100% {
        opacity: 1;
        translate: 0 0;
      }
    }

    ::view-transition-new(targeted-card):only-child {
      animation: animate-in ease-in 0.25s;
    }
  }

  /* Cards that get removed should animate-out */
  @layer remove-card {
    @keyframes animate-out {
      0% {
        opacity: 1;
        translate: 0 0;
      }
      100% {
        opacity: 0;
        translate: 0 -200px;
      }
    }

    ::view-transition-old(targeted-card):only-child {
      animation: animate-out ease-out 0.5s;
    }
  }
}
</style>
