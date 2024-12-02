export class Player {
  constructor(data) {
    this.name = data.name
    this.score = 0
  }

  get emoji() {
    const emojis = ['🧙', '👮', '💂‍♀️', '🥷', '👩‍🌾', '👩‍🍳', '👨‍🏭', '👩‍🎤', '👨‍🎨']
    const randomIndex = Math.floor(Math.random() * emojis.length)
    return emojis[randomIndex]
  }
}