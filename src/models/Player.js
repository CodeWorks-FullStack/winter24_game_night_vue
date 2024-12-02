export class Player {
  constructor(name) {
    this.name = name
    this.score = 0
    this.emoji = this.randomEmoji
  }

  get randomEmoji() {
    const emojis = ['🧙', '👮', '💂‍♀️', '🥷', '👩‍🌾', '👩‍🍳', '👨‍🏭', '👩‍🎤', '👨‍🎨']
    const randomIndex = Math.floor(Math.random() * emojis.length)
    return emojis[randomIndex]
  }

  get color() {
    if (this.score == 0) {
      return 'text-danger'
    }
    if (this.score >= 10) {
      return 'text-success'
    }
    return 'text-warning'
  }
}