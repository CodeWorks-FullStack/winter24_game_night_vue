<script setup>
import { computed } from 'vue';
import { AppState } from './AppState.js';
import { playersService } from './services/PlayersService.js';
import PlayerForm from './components/PlayerForm.vue';

const players = AppState.players

const totalScores = computed(() => {
  let score = 0
  for (let i = 0; i < players.length; i++) {
    const player = players[i]
    score += player.score
  }
  return score
})


function increaseScore(player) {
  playersService.increaseScore(player)
}

function decreaseScore(player) {
  playersService.decreaseScore(player)
}
</script>

<template>
  <header>
    <h1 class="text-warning text-center my-3">
      <i>Game Night</i>
    </h1>
  </header>
  <main class="text-warning">
    <div class="container-fluid">
      <section class="row">
        <div v-for="player in players" :key="player.name" class="col-md-4 mb-3">
          <div class="d-flex justify-content-between align-items-center border border-1 border-warning p-3">
            <div>
              <span class="fs-1">
                {{ player.emoji }}
              </span>
              <!-- NOTE adds the returned value from our color getter as a class  -->
              <span class="ms-3" :class="player.color">
                {{ player.name }}
              </span>
            </div>
            <div>
              <!-- NOTE conditionally adds disabled if provided statement returns true -->
              <button @click="decreaseScore(player)" class="btn btn-outline-warning" :disabled="player.score == 0">
                <i class="mdi mdi-minus"></i>
              </button>
              <span class="mx-3">{{ player.score }}</span>
              <!-- NOTE @click is the vue version of the onclick handler -->
              <!-- NOTE in vue you can pass down reference types as arguments from the HTML directly -->
              <button @click="increaseScore(player)" class="btn btn-outline-warning">
                <i class="mdi mdi-plus"></i>
              </button>
            </div>
          </div>
        </div>

      </section>
      <!-- NOTE only show this HTML if some kind of condition -->
      <section v-if="totalScores > 0" class="row">
        <div class="col-12">
          <h2 class="text-center">Total Scores: {{ totalScores }}</h2>
        </div>
      </section>
      <!-- NOTE v-else must be a direct sibling of another v-if statement -->
      <section v-else class="row">
        <div class="col-12">
          <h2 class="text-center">No one has scored yet!</h2>
        </div>
      </section>
      <section class="row justify-content-center">
        <div class="col-md-4">
          <!-- NOTE all html/css/js from this component is injected here! -->
          <PlayerForm />
        </div>
      </section>
    </div>
  </main>

</template>

<style lang="scss">
// NOTE do not remove this or bootstrap will break!
@import '@/assets/scss/main.scss';

img {
  height: 12vh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}
</style>
