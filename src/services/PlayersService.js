// NOTE nothing new here
class PlayersService {
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