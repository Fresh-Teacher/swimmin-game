/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Jellyfish extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("jellyfish-a", "./Jellyfish/costumes/jellyfish-a.svg", {
        x: 99,
        y: 86
      }),
      new Costume("jellyfish-b", "./Jellyfish/costumes/jellyfish-b.svg", {
        x: 99,
        y: 86
      }),
      new Costume("jellyfish-c", "./Jellyfish/costumes/jellyfish-c.svg", {
        x: 99,
        y: 86
      }),
      new Costume("jellyfish-d", "./Jellyfish/costumes/jellyfish-d.svg", {
        x: 99,
        y: 86
      })
    ];

    this.sounds = [
      new Sound("bubbles", "./Jellyfish/sounds/bubbles.wav"),
      new Sound("ocean wave", "./Jellyfish/sounds/ocean wave.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Bite" }, this.whenIReceiveBite)
    ];
  }

  *whenGreenFlagClicked() {
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    while (true) {
      this.move(this.random(10, 15));
      yield* this.wait(0.1);
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }

  *whenIReceiveBite() {
    this.goto(this.random(-240, 240), this.random(-180, 180));
  }
}
