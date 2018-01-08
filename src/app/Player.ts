import { Bird } from "./Bird";

export class Player {
  private bird: Bird;

  constructor(posX: number, posY: number, width: number, height: number) {
    this.bird = new Bird(posX, posY, width, height);
  }

  update(): void {
    this.bird.update();
  }

  draw(context: CanvasRenderingContext2D): void {
    this.bird.draw(context);
  }
}
