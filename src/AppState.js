import { reactive } from 'vue'
import { Player } from './models/Player.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  players: [
    new Player('Jeremy'),
    new Player('Mick'),
    new Player('Jake'),
    new Player('Ryan'),
  ]
})

