'use strict';

export class Canvas {
  private el: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor(width: number, height: number) {
    this.el = document.createElement('canvas');
    this.ctx = this.el.getContext('2d');
    this.el.width = width;
    this.el.height = height;
    
    document.getElementById('game_area').appendChild(this.el);
  }

  get context() {
    return this.ctx;
  }
}
