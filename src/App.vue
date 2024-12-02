<script setup>
import { AppState } from './AppState.js';



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
        <div class="col-md-4">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1731813416620-2e3fcf288125?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JvY3N8ZW58MHx8MHx8fDA%3D"
                alt="Picture of Mick">
              <span class="ms-3">Mick</span>
            </div>
            <div>
              <button class="btn btn-outline-warning">
                <i class="mdi mdi-minus"></i>
              </button>
              <span class="mx-3">0</span>
              <button class="btn btn-outline-warning">
                <i class="mdi mdi-plus"></i>
              </button>
            </div>
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

img {
  height: 12vh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}
</style>
