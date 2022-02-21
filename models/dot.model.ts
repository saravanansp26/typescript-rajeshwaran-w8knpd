export class Dot {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.createDot();
  }
  createDot() {
    console.log(`Dot created at x = ${this.x} y = ${this.y}`);
  }
}
