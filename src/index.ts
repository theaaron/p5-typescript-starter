import * as p5 from 'p5';
import { Polygon } from './libraries/Polygon';
import { BaseParticle } from './libraries/BaseParticle';

export const sketch = (p: p5) => {
    let numCols: number;
    let numRows: number;
    let polys: Polygon[] = [];

    p.preload = () => {
        // preload images, audio, etc
    }

    p.setup = () => {
        // setup, assign variables
        p.createCanvas(800, 800);
        numCols = 10;
        numRows = 10;
        makePolys(20);
    }

    p.draw = () => {
        p.background(204, 0, 53);
        ponies();
        drawPolys();
    }

    // arrow functions
    let ponies = () => {
        for (let i = 0; i < numCols; i++) {
            for (let j = 0; j < numRows; j++) {
                let centerOfCellX = p.width/numCols * i + ((p.width/numCols/2));
                let centerOfCellY = p.height/numRows * j + (p.height/numRows/2);
                p.text("🐴", centerOfCellX-5, centerOfCellY+3)
            }
        }
    }

    //traditional functions
    function makePolys(numberOfPolys: number): void {
        for (let i = 0; i < numberOfPolys; i++) {
            let rad = p.random(40);
            let sides = Math.floor(p.random(3, 9));
            let fillCol = p.color(p.random(255), p.random(255), p.random(255));
            let strokeCol = p.color(p.random(255), p.random(255), p.random(255));
            let poly = new Polygon(p, rad, p.createVector(p.random(p.width), p.random(p.height)), sides, fillCol, strokeCol);
            polys.push(poly);
        }
    }

    function drawPolys(): void {
        for (let i = 0; i < polys.length; i++) {
            polys[i].draw();
        }
        
    }

    // interaction. copy this format for mouseDragged, mouseReleased, etc.
    p.mouseClicked = () => {
        // console.log("clicked");
    }
}

// places this sketch in html element with ID of canvas in index.html 
export const myp5 = new p5(sketch, document.getElementById('canvas'));
