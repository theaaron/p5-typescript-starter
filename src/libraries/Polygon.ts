export class Polygon {
    p: p5;
    pos: p5.Vector
    radius: number;
    sides: number;
    fillColor: p5.Color;
    strokeColor: p5.Color;

    constructor(p: p5, radius: number, pos: p5.Vector, sides: number, fillColor: p5.Color, strokeColor: p5.Color) {
        this.p = p;
        this.pos = pos;
        this.radius = radius;
        this.sides = sides;
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
    }

    draw(): void {
        let theta = 0;
        this.p.beginShape();
        this.p.stroke(this.strokeColor);
        this.p.fill(this.fillColor);
        for (let i = 0; i < this.sides; i++) {
            this.p.vertex(this.pos.x + this.p.cos(theta)*this.radius, this.pos.y + this.p.sin(theta)*this.radius)
            theta += this.p.TWO_PI/this.sides // angleMode(RADIANS)
            // theta += 360/this.sides; //angleMode(DEGREES)
        }
        this.p.endShape("close");
    }
}
