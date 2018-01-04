export abstract class Component {
  protected color: string;
  protected posX: number;
  protected posY: number;
  protected width: number;
  protected height: number;

  constructor(color: string, posX: number, posY: number, width: number, height: number) {
    this.color = color;
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
  }

  abstract draw(context: CanvasRenderingContext2D): void;
}
