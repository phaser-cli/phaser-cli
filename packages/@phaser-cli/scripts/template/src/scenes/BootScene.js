import { Scene } from 'phaser'
import logo from '@/assets/logo.png'

export default class GameScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('logo', logo)
  }

  create () {
    this.scene.start('GameScene')
  }
}
