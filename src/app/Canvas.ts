'use strict';

export class Canvas {
  private el: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor() {
    this.el = document.createElement('canvas');
    this.ctx = this.el.getContext('2d');
    this.el.width = 320;
    this.el.height = 480;
    
    document.getElementById('game_area').appendChild(this.el);
  }

  get context() {
    return this.ctx;
  }
}
