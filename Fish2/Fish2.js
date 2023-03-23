/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Fish2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("fish-a", "./Fish2/costumes/fish-a.svg", { x: 63, y: 45 }),
      new Costume("fish-b", "./Fish2/costumes/fish-b.svg", { x: 63, y: 45 }),
      new Costume("fish-c", "./Fish2/costumes/fish-c.svg", { x: 63, y: 45 }),
      new Costume("fish-d", "./Fish2/costumes/fish-d.svg", { x: 63, y: 45 })
    ];

    this.sounds = [
      new Sound("bubbles", "./Fish2/sounds/bubbles.wav"),
      new Sound("ocean wave", "./Fish2/sounds/ocean wave.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    while (true) {
      this.move(this.random(12, 20));
      yield* this.wait(0.1);
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }
}
