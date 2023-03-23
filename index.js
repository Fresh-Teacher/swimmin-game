import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Diver1 from "./Diver1/Diver1.js";
import Fish from "./Fish/Fish.js";
import Fish2 from "./Fish2/Fish2.js";
import Jellyfish from "./Jellyfish/Jellyfish.js";
import Shark2 from "./Shark2/Shark2.js";
import Starfish from "./Starfish/Starfish.js";
import Coin from "./Coin/Coin.js";
import Coin2 from "./Coin2/Coin2.js";
import Coin3 from "./Coin3/Coin3.js";
import Coin4 from "./Coin4/Coin4.js";
import Coin5 from "./Coin5/Coin5.js";
import Coin6 from "./Coin6/Coin6.js";
import Coin7 from "./Coin7/Coin7.js";
import Coin8 from "./Coin8/Coin8.js";
import Crystal from "./Crystal/Crystal.js";
import Crystal2 from "./Crystal2/Crystal2.js";
import GameOver from "./GameOver/GameOver.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Win from "./Win/Win.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Diver1: new Diver1({
    x: 169.00399780273438,
    y: 140,
    direction: -90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Fish: new Fish({
    x: -189.83543084381245,
    y: -116.77826494605432,
    direction: -72.67638180265402,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 3
  }),
  Fish2: new Fish2({
    x: 155.03037198384507,
    y: 100.40769575818743,
    direction: -72.67638180265402,
    costumeNumber: 2,
    size: 50,
    visible: true,
    layerOrder: 2
  }),
  Jellyfish: new Jellyfish({
    x: -185.9596948136466,
    y: 4.956766738819416,
    direction: 74.04339381170051,
    costumeNumber: 1,
    size: 40,
    visible: true,
    layerOrder: 4
  }),
  Shark2: new Shark2({
    x: 16.24505615234375,
    y: -26,
    direction: 90,
    costumeNumber: 3,
    size: 80,
    visible: true,
    layerOrder: 14
  }),
  Starfish: new Starfish({
    x: -71.10057067871094,
    y: -101,
    direction: -90,
    costumeNumber: 1,
    size: 45,
    visible: true,
    layerOrder: 5
  }),
  Coin: new Coin({
    x: 11,
    y: -160,
    direction: 90,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 6
  }),
  Coin2: new Coin2({
    x: 148.64314999204538,
    y: -154.0280904956262,
    direction: 90,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 8
  }),
  Coin3: new Coin3({
    x: -49.064127350182844,
    y: -155.8331357799985,
    direction: 90,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 10
  }),
  Coin4: new Coin4({
    x: -125.5698991718697,
    y: -155.408397899705,
    direction: 90,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 9
  }),
  Coin5: new Coin5({
    x: -190.34237746045844,
    y: -154.58819164692883,
    direction: 90,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 11
  }),
  Coin6: new Coin6({
    x: 206.55304497177758,
    y: -160.40266362270157,
    direction: 90,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 12
  }),
  Coin7: new Coin7({
    x: -208.63516230576894,
    y: -50.55473143564989,
    direction: 90,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 13
  }),
  Coin8: new Coin8({
    x: 85.29577191899432,
    y: -162.45542339943665,
    direction: 90,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 7
  }),
  Crystal: new Crystal({
    x: -136,
    y: -118,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 16
  }),
  Crystal2: new Crystal2({
    x: -200.05262300543868,
    y: -112.32265920553031,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 15
  }),
  GameOver: new GameOver({
    x: 7,
    y: -6,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 17
  }),
  Sprite1: new Sprite1({
    x: 176,
    y: 146,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 19
  }),
  Win: new Win({
    x: 16,
    y: -3,
    direction: 90,
    costumeNumber: 2,
    size: 80,
    visible: false,
    layerOrder: 18
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
