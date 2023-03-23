/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Fish extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("fish-a", "./Fish/costumes/fish-a.svg", { x: 63, y: 45 }),
      new Costume("fish-b", "./Fish/costumes/fish-b.svg", { x: 63, y: 45 }),
      new Costume("fish-c", "./Fish/costumes/fish-c.svg", { x: 63, y: 45 }),
      new Costume("fish-d", "./Fish/costumes/fish-d.svg", { x: 63, y: 45 })
    ];

    this.sounds = [
      new Sound("bubbles", "./Fish/sounds/bubbles.wav"),
      new Sound("ocean wave", "./Fish/sounds/ocean wave.wav")
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
