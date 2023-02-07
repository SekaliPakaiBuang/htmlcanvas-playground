const kertas = document.querySelector("canvas");
const context = kertas.getContext("2d");

// function drawLine() {
//     let x0, y0;
//     let x1, y1;
//     let h,s,l;

//     x0 = Math.random() * 256;
//     x1 = Math.random() * 256;
//     y0 = Math.random() * 144;
//     y1 = Math.random() * 144;

//     h = Math.random() * 360;
//     s = Math.random() * 100;
//     l = Math.random() * 100;

//     context.lineWidth = 2;
//     context.strokeStyle = 
//     `hsl(${h},${s}%,${l}%)`;

//     context.beginPath();
//     context.moveTo(x0, y0);
//     context.lineTo(x1, y1);
//     context.stroke();

//     window.requestAnimationFrame(drawLine);
// }

// drawLine();

// context.font = "20px Arial";
// context.fillStyle = "#080";
// context.textBaseline = "alphabetic";
// context.textAlign = "right";

// context.fillText("Rizki Nugraha",32,32);

class Box {
    #x;
    #y;
    #w;
    #h;
    #timestamp = 0;

    dx = 0;
    dy = 0;

    constructor(x, y, w, h) {
        this.#x = x;
        this.#y = y;
        this.#w = w;
        this.#h = h;

        this.#update();
    }

    #update(timestamp) {
        const deltaTime = ((timestamp || 0) - (this.#timestamp || 0)) / 1000;
        this.#timestamp = (timestamp || 0);

        if (this.#x+this.#w>=256 || this.#x<=0) this.dx = -this.dx;
        if (this.#y+this.#h>=144 || this.#y<=0) this.dy = -this.dy;

        this.#x += (this.dx * deltaTime);
        this.#y += (this.dy * deltaTime);

        window.requestAnimationFrame(this.#update.bind(this));
    }

    draw() {
        context.save();

        context.fillStyle = "#F0F";
        context.fillRect(this.#x, this.#y, this.#w, this.#h);

        context.restore();
    }
}

let kotaknyaRiznug = new Box(30, 30, 32, 32);
kotaknyaRiznug.dx = 64;
kotaknyaRiznug.dy = 31;

loop();
function loop() {
    context.clearRect(0, 0, 256, 144);
    kotaknyaRiznug.draw();
    window.requestAnimationFrame(loop);
}