import { AppState } from "@/AppState.js"
import { Player } from "@/models/Player.js"

// NOTE nothing new here
class PlayersService {
  addPlayer(playerName) {
    const newPlayer = new Player(playerName)
    AppState.players.push(newPlayer)
  }
  decreaseScore(player) {
    if (player.score == 0) {
      return
    }
    player.score--
  }
  increaseScore(player) {
    player.score++
  }


}

export const playersService = new PlayersService()