import PubSub from 'pubsub-js';
import { Component } from "./Component";

export class Ground extends Component {
  constructor(posX, posY, width, height) {
    super('#cccccc', posX, posY, width, height);
  }

  draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.color;
    context.fillRect(this.posX, this.posY, this.width, this.height);
  }
}
