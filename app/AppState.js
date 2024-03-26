import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Player } from "./models/Example.js";

class ObservableAppState extends EventEmitter {

  // /**@type {import('./models/Example.js').Player[]} */
  players = [
    new Player("Andrew", 0),
    new Player("Monica", 0),
    new Player("Milo", 0),
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())

console.log('💻', AppState);