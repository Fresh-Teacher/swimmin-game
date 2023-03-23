/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Win extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("win", "./Win/costumes/win.png", { x: 480, y: 302 }),
      new Costume("win2", "./Win/costumes/win2.png", { x: 480, y: 302 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "youWin" },
        this.whenIReceiveYouwin
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveYouwin() {
    this.visible = true;
    for (let i = 0; i < 10; i++) {
      this.costumeNumber++;
      yield* this.wait(0.1);
      yield;
    }
    /* TODO: Implement stop all */ null;
  }
}
