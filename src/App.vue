<script setup>
import { AppState } from './AppState.js';

let num = 80

let str = "Jeremy"

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
        <div class="col-12">
          <div class="text-center fs-3">
            Name is {{ str }}
          </div>
        </div>
      </section>
      <section class="row">
        <div class="col-12">
          <div class="text-center">
            <button class="btn btn-warning fs-3">Add Player</button>
          </div>
        </div>
      </section>
    </div>
  </main>

</template>

<style lang="scss">
// NOTE do not remove this or bootstrap will break!
@import '@/assets/scss/main.scss';
</style>
