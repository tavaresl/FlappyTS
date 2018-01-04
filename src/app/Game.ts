import { Canvas } from './Canvas';
import { World } from './World';
import { WIDTH, HEIGHT } from '../commons/globals';

export class Game {
  private canvas: Canvas;
  private world: World;
  private animationFrame: number;
  private frame = 0;

  constructor() {
    this.canvas = new Canvas();
    this.world = new World(WIDTH, HEIGHT);
  }

  start(): void {
    console.info('Game startig...');
    this.render();
  }

  render(): number {
    this.world.draw(this.canvas.context);
    return window.requestAnimationFrame(this.render.bind(this));
  }
}
