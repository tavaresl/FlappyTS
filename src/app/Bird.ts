import PubSub from 'pubsub-js';
import { Component } from "./Component";
import { calcSpeed, calcPosition } from "../utils/physics";
import { BoundingBox } from './Solid';
import { centerAnchorPointIn, resetAnchorPoint, lineToAngle } from '../utils/polygons';
import { HEIGHT } from '../commons/globals';

export class Bird extends Component {
  private speed: number;
  private rotation: number;
  
  constructor(posX: number, posY: number, width: number, height: number) {
    super('#FFFFFF', posX, posY, width, height);
    this.speed = 0;
    this.rotation = 0;
    this.init();
  }
 
  update(): void {
    const nextSpeed = calcSpeed(this.speed);
    const nextPosY = calcPosition(this.posY, nextSpeed);

    if (nextPosY > 0) {
      this.speed = nextSpeed;
      this.posY = nextPosY;
    } else {
      this.speed = 0;
    }

    PubSub.publish('bird-move', this.getBoundingBox());
  }
  
  draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.color;
    context.fillRect(this.posX, this.posY, this.width, this.height);
  }
  
  jump(): void {
    this.speed = -6;
    console.log('Bird jumped');
    PubSub.publish('bird-move', this.getBoundingBox());
  }

  init(): void {
    PubSub.subscribe('hit-ground', (msg, ground: BoundingBox) => {
      this.posY = ground.posY - this.height;
    });
  }
}
