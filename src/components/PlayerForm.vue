<script setup>
import { playersService } from '@/services/PlayersService.js';
import { ref } from 'vue';

const editablePlayerName = ref('')

function addPlayer() {
  playersService.addPlayer(editablePlayerName.value)
  editablePlayerName.value = ''
}

</script>


<template>
  <div>
    <!-- NOTE .prevent calls event.preventDefault() -->
    <form @submit.prevent="addPlayer()">
      <div class="mb-3">
        <label for="player-name" class="form-label">Player Name</label>
        <input v-model="editablePlayerName" type="text" class="form-control" id="player-name"
          placeholder="Player Name..." minlength="2" maxlength="20" required>
      </div>
      <div class="text-center">
        <button class="btn btn-warning fs-3" type="submit">Add Player</button>
      </div>
    </form>
  </div>
</template>


<style lang="scss" scoped></style>