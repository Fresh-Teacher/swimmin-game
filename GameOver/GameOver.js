/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GameOver extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("giphy", "./GameOver/costumes/giphy.png", { x: 480, y: 317 }),
      new Costume("giphy2", "./GameOver/costumes/giphy2.png", {
        x: 480,
        y: 317
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "gameOver" },
        this.whenIReceiveGameover
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveGameover() {
    this.visible = true;
    for (let i = 0; i < 10; i++) {
      this.costumeNumber++;
      yield* this.wait(0.1);
      yield;
    }
    /* TODO: Implement stop all */ null;
  }
}
