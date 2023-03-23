/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("Underwater 1", "./Stage/costumes/Underwater 1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.divery = 140;
    this.vars.score = 0;
    this.vars.life = 3;

    this.watchers.score = new Watcher({
      label: "Score",
      style: "normal",
      visible: true,
      value: () => this.vars.score,
      x: 245,
      y: 175
    });
    this.watchers.life = new Watcher({
      label: "Life",
      style: "normal",
      visible: true,
      value: () => this.vars.life,
      x: 245,
      y: 148
    });
  }

  *whenGreenFlagClicked() {
    this.vars.divery = 140;
    this.vars.score = 0;
    this.vars.life = 3;
  }
}
