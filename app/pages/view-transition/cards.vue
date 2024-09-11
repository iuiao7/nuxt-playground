<template>
  <div class="grid h-[90dvh] place-items-center py-8 font-sans">
    <button
      class="add-btn w-12 h-12 p-2 border-4 border-solid rounded-[100%] border-white cursor-pointer"
      @click="addCard"
    >
      <span class="sr-only">Add</span>
    </button>

    <ul class="flex flex-wrap justify-center gap-8 w-full p-4">
      <li
        v-for="card in cards"
        :key="card.id"
        :ref="
          (el) => {
            if (el) cardRefs[card.id] = el as HTMLElement;
          }
        "
        class="card w-full aspect-ratio-[2/3] block relative min-w-[100px] max-w-[220px] rounded-2xl bg-gray"
        :style="{
          'background-color': card.color,
          'view-transition-name': `card-${card.id}`,
        }"
      >
        <button
          class="delete-btn absolute right-[-0.75rem] bottom-[-0.75rem] w-12 h-12 p-2 border-4 border-solid border-white rounded-[100%] cursor-pointer"
          @click="deleteCard(card.id)"
        >
          <span class="sr-only">Delete</span>
        </button>
      </li>
    </ul>

    <footer class="text-center font-italic line-height-[1.42]">
      <p>
        Icons from
        <a href="https://www.iconfinder.com/iconsets/ionicons-outline-vol-1"
          >Ionicons Outline Vol.1</a
        >, licensed under the <a href="https://opensource.org/license/MIT">MIT license</a>.
      </p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
const cards = ref([
  { id: "1", color: "tan" },
  { id: "2", color: "khaki" },
  { id: "3", color: "thistle" },
  { id: "4", color: "wheat" },
]);

const cardRefs = ref<{ [key: string]: HTMLElement }>({});

async function addCard() {
  const rand =
    window.performance.now().toString().replace(".", "_") + Math.floor(Math.random() * 1000);
  const newCard = {
    id: rand,
    color: getRandomColor(),
  };

  if (!document.startViewTransition) {
    cards.value.push(newCard);
    return;
  }

  let newCardElement: HTMLElement | undefined;

  const transition = document.startViewTransition(async () => {
    cards.value.push(newCard);
    await nextTick(() => {
      newCardElement = cardRefs.value[newCard.id];
      if (newCardElement) {
        newCardElement.style.setProperty("view-transition-name", `targeted-card`);
      }
    });
    await nextTick();
  });

  await transition.finished;
  if (newCardElement) {
    newCardElement.style.setProperty("view-transition-name", `card-${newCard.id}`);
  }
}

function deleteCard(id: string) {
  const index = cards.value.findIndex((card) => card.id === id);

  if (!document.startViewTransition) {
    cards.value.splice(index, 1);
    return;
  }

  const toBeDeletedCardElement = cardRefs.value[id];
  if (toBeDeletedCardElement) {
    toBeDeletedCardElement.style.setProperty("view-transition-name", `targeted-card`);
  }
  document.startViewTransition(async () => {
    cards.value.splice(index, 1);
    await nextTick();
  });
}

function getRandomColor(): string {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
</script>

<style>
@layer view-transition {
  /* Don't capture the root, allowing pointer interaction while cards are animating */
  @layer no-root {
    :root {
      view-transition-name: none;
    }
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

  .delete-btn {
    --icon: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZS8+PHBhdGggZD0iTTExMiwxMTJsMjAsMzIwYy45NSwxOC40OSwxNC40LDMyLTMyLDMySDM0OGMxNy42NywwLDMwLjg3LTEzLjUxLDMyLTMybDIwLTMyMCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMycHgiLz48bGluZSBzdHlsZT0ic3Ryb2tlOiMwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjMycHgiIHgxPSI4MCIgeDI9IjQzMiIgeTE9IjExMiIgeTI9IjExMiIvPjxwYXRoIGQ9Ik0xOTIsMTEyVjcyaDBhMjMuOTMsMjMuOTMsMCwwLDEsMjQtMjRoODBhMjMuOTMsMjMuOTMsMCwwLDEsMjQsMjRoMHY0MCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMycHgiLz48bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MzJweCIgeDE9IjI1NiIgeDI9IjI1NiIgeTE9IjE3NiIgeTI9IjQwMCIvPjxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozMnB4IiB4MT0iMTg0IiB4Mj0iMTkyIiB5MT0iMTc2IiB5Mj0iNDAwIi8+PGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMycHgiIHgxPSIzMjgiIHgyPSIzMjAiIHkxPSIxNzYiIHkyPSI0MDAiLz48L3N2Zz4=);
    background: aliceblue var(--icon) no-repeat 50% 50% / 70%;

    &:hover {
      background-color: orangered;
    }
  }

  .add-btn {
    --icon: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZS8+PGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMycHgiIHgxPSIyNTYiIHgyPSIyNTYiIHkxPSIxMTIiIHkyPSI0MDAiLz48bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MzJweCIgeDE9IjQwMCIgeDI9IjExMiIgeTE9IjI1NiIgeTI9IjI1NiIvPjwvc3ZnPg==);
    background: aliceblue var(--icon) no-repeat 50% 50% / 70%;

    &:hover {
      background-color: cornflowerblue;
    }
  }
}
</style>
