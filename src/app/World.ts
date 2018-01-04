'use strict';

export class World {
  private bgColor: string;
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.bgColor = '#000000';
    this.width = width;
    this.height = height;
  }

  draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.bgColor;
    context.fillRect(0, 0, this.width, this.height);
  }
}
