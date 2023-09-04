var canvas = document.getElementById("main_canvas");
var ctx = canvas.getContext("2d");

class Additionals extends Object_parent {
    constructor(speed, lane, pos_y, type, player) {
        super(speed, lane, pos_y, type, player)
        this.image = new Image();
        this.image.src = "/static/images/" + type + ".png";
        this.image.onload = () => {
            this.coin_sprite_width = [100, 90, 60, 100, 50, 100];
            this.coin_sprite_position = [0, 0]
            this.coin_sprite_height = 100;
            this.coin_sprite_index = 0;
            this.set_positions();
            this.move_back();
            this.draw_object();
        };
        this.add = false;
        if (type == "coin") {
            this.spriteInterval = setInterval(() => {
                this.next_sprite();
            }, 200);
        }
    }

    draw_object() {
        ctx.clearRect(this.position.x - 5, this.position.y - 5, this.position.width + 10, this.position.height + 10);
        if (this.name == "coin") {
            ctx.drawImage(this.image, this.coin_sprite_position[0], this.coin_sprite_position[1], this.coin_sprite_width[this.coin_sprite_index], this.coin_sprite_height, this.position.x, this.position.y, this.position.width, this.position.height);
        } else {
            ctx.drawImage(this.image, this.position.x, this.position.y, this.position.width, this.position.height)
        }
    }

    next_sprite() {
        this.coin_sprite_index++;
        this.coin_sprite_position[0] += this.coin_sprite_width[this.coin_sprite_index - 1];
        if (this.coin_sprite_index == 3) {
            this.coin_sprite_position[0] = 0;
            this.coin_sprite_position[1] = this.coin_sprite_height;
        } else if (this.coin_sprite_index == 6) {
            this.coin_sprite_position[0] = 0;
            this.coin_sprite_position[1] = 0;
            this.coin_sprite_index = 0;
        }

    }

    move_back() {
        this.animateFrame = () => {
            if (this.position.y >= canvas.clientHeight) {
                this.delete_object()
            } else if (this.animate && this.position.y < canvas.clientHeight) {
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
}