var canvas = document.getElementById("main_canvas");
var ctx = canvas.getContext("2d");

class Additionals extends Additionals_parent {
    constructor(speed, lane, pos_y, src) {
        super(speed, lane, pos_y, src);
        this.position.y -= canvas.clientHeight;
    }

    draw_object() {
        this.set_positions();
        ctx.clearRect(this.position.x - 2, this.position.y - 5, 54, 55);
        // ctx.drawImage(this.image, this.position.x, this.position.y, this.position.width, this.position.height);
        ctx.fillRect(this.position.x, this.position.y, 50, 50)
    }

    move_back() {
        this.animateFrame = () => {
            if (this.animate && this.position.y - this.position.height < canvas.height) {
                this.position.y += this.speed;
                this.notify(this.cars);
                this.draw_object();
                setTimeout(this.animateFrame, 5);
            } else {
                let i = 0;
                while (i < this.cars.length) {
                    if (this.cars[i] === this) {
                        this.cars.splice(i, 1);
                        break;
                    }
                    i++;
                }
            }
        }

        this.animateFrame();
    }

    set_positions() {
        let offset = ((1000 / 6) - this.position.width) / 2;
        this.position.x = (1000 / 6) * this.lane + offset;
    }
}