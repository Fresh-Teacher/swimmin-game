/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Shark2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("shark2-a", "./Shark2/costumes/shark2-a.svg", {
        x: 75,
        y: 75
      }),
      new Costume("shark2-b", "./Shark2/costumes/shark2-b.svg", {
        x: 75,
        y: 75
      }),
      new Costume("shark2-c", "./Shark2/costumes/shark2-c.svg", {
        x: 77,
        y: 37
      }),
      new Costume("Shark Angry Red", "./Shark2/costumes/Shark Angry Red.svg", {
        x: 76.22896360541961,
        y: 36.816455225181755
      })
    ];

    this.sounds = [
      new Sound("Water drop", "./Shark2/sounds/Water drop.wav"),
      new Sound("Bite", "./Shark2/sounds/Bite.wav"),
      new Sound("Water drop", "./Shark2/sounds/Water drop.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-100, -26);
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    while (true) {
      if (this.compare(this.stage.vars.divery, 30) < 0) {
        this.move(this.random(4, 8));
        this.costume = "Shark Angry Red";
      } else {
        this.move(this.random(1, 5));
        this.costume = "shark2-c";
      }
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }
}
