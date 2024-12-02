import { reactive } from 'vue'
import { Player } from './models/Player.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  players: [
    new Player({
      name: 'Jeremy',
      imgUrl: 'https://images.unsplash.com/photo-1505245748910-cb2bb4abb3ba?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2xkJTIwbWFufGVufDB8fDB8fHww'
    }),
    new Player({
      name: 'Mick',
      imgUrl: 'https://plus.unsplash.com/premium_photo-1661840399584-fa80b6a856ac?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JvY3N8ZW58MHx8MHx8fDA%3D'
    })
  ]
})

