var canvas = document.getElementById("main_canvas");
var ctx = canvas.getContext("2d");

class Cars extends Object_parent {
    constructor(speed, lane, pos_y, src, player) {
        super(speed, lane, pos_y, "car", player);
        this.image = new Image();
        this.image.src = src;
        this.new_x_pos = null;
        this.image.onload = () => {
            this.set_positions();
            this.position.width = this.image.width;
            this.position.height = this.image.height;
            this.draw_object();
        };

    }

    draw_object() {
        ctx.clearRect(this.position.x - 5, this.position.y - 5, this.position.width + 10, this.position.height + 5);
        ctx.drawImage(this.image, this.position.x, this.position.y, this.position.width, this.position.height);
    }

    move_back() {
        this.animateFrame = () => {
            if (this.position.y > canvas.clientHeight) {
                this.delete_object()
            } else if (this.animate === true) {
                this.position.y += this.speed;
                if (this.player.calculate_line() - 1 == this.lane && (this.player.position.y + 50 < this.position.y + this.position.height || this.player.position.y + this.player.position.height + 50 > this.position.y)) {
                    this.player.update(this);
                }
                this.draw_object();
                setTimeout(this.animateFrame, 5);
            } else {
                setTimeout(this.animateFrame, 100);
            }
        }
        this.animateFrame();
    }

    set_positions() {
        let offset = ((1000 / 6) - this.position.width) / 2;
        this.position.x = (1000 / 6) * this.lane + offset;
    }

}