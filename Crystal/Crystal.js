/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Crystal extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("crystal-a", "./Crystal/costumes/crystal-a.svg", {
        x: 15,
        y: 15
      }),
      new Costume("crystal-b", "./Crystal/costumes/crystal-b.svg", {
        x: 12,
        y: 24
      })
    ];

    this.sounds = [
      new Sound("Magic Spell", "./Crystal/sounds/Magic Spell.wav"),
      new Sound("collect", "./Crystal/sounds/collect.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.brightness = 10;
    while (true) {
      if (this.touching(this.sprites["Diver1"].andClones())) {
        yield* this.startSound("Magic Spell");
        this.effects.brightness = 100;
        yield* this.wait(0.1);
        this.effects.brightness = 0;
        this.effects.ghost = 100;
        this.stage.vars.score += 20;
        return;
      }
      yield;
    }
  }
}
