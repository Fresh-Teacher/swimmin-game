/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Diver1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("diver1", "./Diver1/costumes/diver1.svg", { x: 75, y: 75 })
    ];

    this.sounds = [
      new Sound("pop", "./Diver1/sounds/pop.wav"),
      new Sound("Wobble", "./Diver1/sounds/Wobble.wav"),
      new Sound("Scream2", "./Diver1/sounds/Scream2.wav"),
      new Sound("Bubbles", "./Diver1/sounds/Bubbles.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "gameOver" },
        this.whenIReceiveGameover
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(21, 140);
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.direction = 90;
        this.move(10);
        /* TODO: Implement motion_ifonedgebounce */ null;
      }
      if (this.keyPressed("left arrow")) {
        this.direction = -90;
        this.move(10);
        /* TODO: Implement motion_ifonedgebounce */ null;
      }
      if (this.keyPressed("up arrow")) {
        this.direction = 0;
        this.move(20);
        /* TODO: Implement motion_ifonedgebounce */ null;
        this.stage.vars.divery = this.y;
      }
      if (this.keyPressed("down arrow")) {
        this.direction = 180;
        this.move(20);
        /* TODO: Implement motion_ifonedgebounce */ null;
        this.stage.vars.divery = this.y;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching(this.sprites["Jellyfish"].andClones())) {
        this.broadcast("Bite");
        this.stage.vars.life--;
        yield* this.startSound("Wobble");
      }
      if (
        this.touching(this.sprites["Shark2"].andClones()) ||
        this.touching(this.sprites["Starfish"].andClones())
      ) {
        yield* this.startSound("Scream2");
        this.effects.ghost = 100;
        this.broadcast("gameOver");
      }
      if (this.toNumber(this.stage.vars.life) === 0) {
        this.broadcast("gameOver");
      }
      yield;
    }
  }

  *whenIReceiveGameover() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenGreenFlagClicked3() {
    while (true) {
      yield* this.playSoundUntilDone("Bubbles");
      yield;
    }
  }
}
