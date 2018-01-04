'use strict';

import { Canvas } from './Canvas';
import { World } from './World';
import { WIDTH, HEIGHT } from '../commons/globals';

export class Game {
  private canvas: Canvas;
  private world: World;

  constructor() {
    this.canvas = new Canvas();
    this.world = new World(WIDTH, HEIGHT);
  }

  start(): void {
    console.info('Game startig...');
    
    this.world.draw(this.canvas.context);
  }
}
