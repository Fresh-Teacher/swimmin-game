/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Starfish extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("starfish-a", "./Starfish/costumes/starfish-a.svg", {
        x: 75,
        y: 75
      }),
      new Costume("starfish-b ", "./Starfish/costumes/starfish-b .svg", {
        x: 52.211154356763274,
        y: 59.43308036360956
      })
    ];

    this.sounds = [new Sound("collect", "./Starfish/sounds/collect.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(212, -101);
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    while (true) {
      if (this.compare(this.stage.vars.divery, -82) < 0) {
        this.move(this.random(6, 12));
        this.costume = "starfish-b ";
      } else {
        this.move(this.random(1, 5));
        this.costume = "starfish-a";
      }
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }
}
