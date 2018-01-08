import PubSub from 'pubsub-js';
import { Canvas } from './Canvas';
import { World } from './World';
import { WIDTH, HEIGHT } from '../commons/globals';
import { Player } from './Player';

export class Game {
  private canvas: Canvas;
  private world: World;
  private player: Player;
  private state: number;

  constructor() {
    this.canvas = new Canvas(WIDTH, HEIGHT);
    this.world = new World(WIDTH, HEIGHT);
    this.player = new Player(100, HEIGHT / 2 - 20, 40, 40);
    this.state = 0;
    this.init();
  }

  start(): void {
    console.info('Game startig...');
    this.render();
  }

  prerender(): void {
    if (this.state === 0) {
      this.player.update();
    }
  }

  render(): number {
    this.prerender();
    this.world.draw(this.canvas.context);
    this.player.draw(this.canvas.context);
    return window.requestAnimationFrame(this.render.bind(this));
  }

  init(): void {
    PubSub.subscribe('hit-ground', hit => {
      console.log('Bird hit ground');
      this.state = 1;
    });


  }
}
