import { Dot } from './dot.model';
import { Line } from './line.model';
export class Triangle {
  Line1: Line;
  Line2: Line;
  Line3: Line;
  constructor(line1: Line, line2: Line, line3: Line) {
    this.Line1 = line1;
    this.Line2 = line2;
    this.Line3 = line3;
    this.createTriangle();
  }
  createTriangle() {
    console.log(`Trianlge created`);
  }
}
