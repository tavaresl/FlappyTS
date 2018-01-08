import { GRAVITY } from '../commons/globals';

export function calcSpeed(initialSpeed: number): number {
  return initialSpeed + GRAVITY;
}

export function calcPosition(initialPosition: number, speed: number): number {
  return initialPosition + speed + GRAVITY / 2;
}
