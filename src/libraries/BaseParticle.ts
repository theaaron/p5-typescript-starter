export class BaseParticle {
    p: p5;
    pos: p5.Vector;
    radius: number;
    speed: p5.Vector;

    constructor(p: p5, pos: p5.Vector, radius: number, speed: p5.Vector) {
        this.p = p;
        this.pos = pos;
        this.radius = radius;
        this.speed = speed;
    }
}
