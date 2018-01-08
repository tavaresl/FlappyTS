import { Component } from "./Component";
import { Ground } from "./Ground";
import { BoundingBox } from "./Solid";

export class World extends Component {
  private ground: Ground;

  constructor(width: number, height: number) {
    super('#000000', 0, 0, width, height);
    this.ground = new Ground(0, this.height - 40, this.width, 40);
    this.init();
  }

  draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.color;
    context.fillRect(0, 0, this.width, this.height);
    this.ground.draw(context);
  }

  init(): void {
    PubSub.subscribe('bird-move', (msg, bird: BoundingBox) => {
      if (bird.posY + bird.height > this.ground.getBoundingBox().posY) {
        PubSub.publish('hit-ground', this.ground.getBoundingBox());
      }
    });
  }
}
