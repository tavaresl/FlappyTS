import PubSub from 'pubsub-js';
import { Component } from "./Component";

export class Ground extends Component {
  constructor(posX, posY, width, height) {
    super('#cccccc', posX, posY, width, height);
    this.init();
  }

  draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.color;
    context.fillRect(this.posX, this.posY, this.width, this.height);
  }

  init(): void {
    PubSub.subscribe('bird-move', (msg, { posY }) => {
      if (posY > this.posY) {
        PubSub.publish('hit-ground', true);
      }
    });
  }
}
