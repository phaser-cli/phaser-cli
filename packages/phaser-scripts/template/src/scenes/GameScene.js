import { Scene } from 'phaser'

export default class GameScene extends Scene {
  constructor () {
    super({ key: 'GameScene' })
  }

  create () {
    const logo = this.add.image(400, 150, 'logo')

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1
    })
  }
}
