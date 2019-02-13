import * as Phaser from 'phaser'
import BootScene from './scenes/BootScene'
import PlayScene from './scenes/PlayScene'

declare global {
  interface Window {
    game: Phaser.Game
  }
}

const config: GameConfig = {
  type: Phaser.AUTO,
  parent: 'app',
  width: 800,
  height: 600,
  scene: [BootScene, PlayScene],
}

const game = new Phaser.Game(config)
window.game = game
