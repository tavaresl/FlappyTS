import { Bird } from "./Bird";

export class Player {
  private bird: Bird;

  constructor(posX: number, posY: number, width: number, height: number) {
    this.bird = new Bird(posX, posY, width, height);
    this.init();
  }

  update(): void {
    this.bird.update();
  }

  draw(context: CanvasRenderingContext2D): void {
    this.bird.draw(context);
  }
  
  init(): void {
    window.addEventListener('click', evt => {
      this.bird.jump();
    });
  }
}
