import { AppState } from "../AppState.js";
import { Player } from "../models/Example.js";

class PlayersService {

  addPoints(playerName) {
    const playerToScore = AppState.players.find(player => player.name == playerName)
    playerToScore.score += 1
    console.log('Add Points to', playerToScore);
  }

  // addPlayer(playerName) {
  //   let newPlayer = new Player(playerName)
  //   AppState.players.push(newPlayer)
  //   AppState.players += newPlayer
  // }
}






export const playersService = new PlayersService()