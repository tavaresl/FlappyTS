export interface BoundingBox {
  posX: number;
  posY: number;
  width: number;
  height: number;
}

export interface Solid {
  getBoundingBox(): BoundingBox;
}
