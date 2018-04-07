import { Scene } from 'phaser'
import logo from '../assets/logo.png'

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('logo', logo)
  }

  create () {
    this.scene.start('PlayScene')
  }
}
