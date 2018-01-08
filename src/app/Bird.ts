import PubSub from 'pubsub-js';
import { Component } from "./Component";
import { calcSpeed, calcPosition } from "../utils/physics";

export class Bird extends Component {
  private speed: number;
  
  constructor(posX: number, posY: number, width: number, height: number) {
    super('#FFFFFF', posX, posY, width, height);
    this.speed = 0;
  }
  
  update(): void {
    this.speed = calcSpeed(this.speed);
    this.posY = calcPosition(this.posY, this.speed);
    PubSub.publish('bird-move', { posY: this.posY + this.height });
  }
  
  draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.color;
    context.fillRect(this.posX, this.posY, this.width, this.height);
  }
  
  jump(): void {
    this.speed = -6;
    console.log('Bird jumped');
    PubSub.publish('bird-move', { posY: this.posY });
  }
}
