/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Coin8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "510-5107354_gold-coin-icon-png-transparent-png",
        "./Coin8/costumes/510-5107354_gold-coin-icon-png-transparent-png.png",
        { x: 257, y: 240 }
      )
    ];

    this.sounds = [new Sound("Collect", "./Coin8/sounds/Collect.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching(this.sprites["Diver1"].andClones())) {
        yield* this.startSound("Collect");
        this.effects.brightness = 100;
        yield* this.wait(0.1);
        this.effects.brightness = 0;
        this.effects.ghost = 100;
        this.stage.vars.score += 10;
        return;
      }
      yield;
    }
  }
}
