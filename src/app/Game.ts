import { Canvas } from './Canvas';
import { World } from './World';
import { WIDTH, HEIGHT } from '../commons/globals';
import { Bird } from './Bird';

export class Game {
  private canvas: Canvas;
  private world: World;
  private player: Bird;

  constructor() {
    this.canvas = new Canvas();
    this.world = new World(WIDTH, HEIGHT);
    this.player = new Bird(100, HEIGHT / 2 - 20, 40, 40);
  }

  start(): void {
    console.info('Game startig...');
    this.render();
  }

  render(): number {
    this.world.draw(this.canvas.context);
    this.player.draw(this.canvas.context);
    return window.requestAnimationFrame(this.render.bind(this));
  }
}
