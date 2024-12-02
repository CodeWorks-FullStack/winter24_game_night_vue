export class Player {
  constructor(data) {
    this.name = data.name
    this.score = 0
    this.emoji = this.randomEmoji
  }

  get randomEmoji() {
    const emojis = ['🧙', '👮', '💂‍♀️', '🥷', '👩‍🌾', '👩‍🍳', '👨‍🏭', '👩‍🎤', '👨‍🎨']
    const randomIndex = Math.floor(Math.random() * emojis.length)
    return emojis[randomIndex]
  }
}