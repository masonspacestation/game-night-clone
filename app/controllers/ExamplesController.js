import { AppState } from "../AppState.js"
import { playersService } from "../services/ExampleService.js"

function testFunction() {
  ; console.log('testFunction eh');
}

export class PlayersController {
  constructor() {
    console.log('The PlayersController has loaded')
    this.drawPlayerButtons()
  }

  addPoints(playerName) {
    let playerToScore = AppState.players.find(player => player.name == playerName)

    playersService.addPoints(playerToScore.name)
    this.drawPlayerButtons()
  }

  // addPlayer(playerName) {
  //   let newPlayer = "name"

  //   playersService.addPlayer(newPlayer)
  //   this.drawPlayerButtons()
  // }

  drawPlayerButtons() {
    let buttonHTML = ''
    AppState.players.forEach(player => buttonHTML += `

    <button class="btn btn-primary w-50 m-2 p-2" onclick="app.PlayersController.addPoints('${player.name}')">${player.name} 🎲 [${player.score}]
    </button>
    `)

    let buttonsElm = document.getElementById('players-buttons')
    buttonsElm.innerHTML = buttonHTML
  }



}
``