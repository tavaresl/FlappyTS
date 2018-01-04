import { Component } from "./Component";

export class Bird extends Component {
  constructor(posX, posY, width, height) {
    super('#FFFFFF', posX, posY, width, height);
  }

  draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.color;
    context.arc(this.posX, this.posY, this.width / 2, 0, Math.PI * 2);
    context.fill();
  }
}
