
class Player extends Player_parent {
    constructor(image_path) {
        super(image_path);
    }

    draw_player_to_canvas() {
        ctx.clearRect(this.position_to_remove.x_begin, this.position_to_remove.y_begin, this.position_to_remove.width, this.position_to_remove.height);
        ctx.save();
        ctx.translate(this.position.x + this.position.width / 2, this.position.y + this.position.height / 2);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.drawImage(this.image, -this.position.width / 2, -this.position.height / 2, this.position.width, this.position.height);
        ctx.restore();
        var new_positions_clear = calculate_new_positions([this.position.x, this.position.y, this.position.width, this.position.height, this.rotation]);
        this.position_to_remove.x_begin = new_positions_clear[4][0];
        this.position_to_remove.y_begin = new_positions_clear[4][1];
        this.position_to_remove.width = new_positions_clear[4][2];
        this.position_to_remove.height = new_positions_clear[4][3];

        // ctx.fillStyle = "red";
        // ctx.fillRect(new_positions_clear[4][0],  new_positions_clear[4][1] ,5,5);
        // ctx.fillRect(new_positions_clear[4][2], new_positions_clear[4][3] ,5,5);
        // let collision_points = this.calculate_collision_points(this.rotated_position.top_left[0], this.rotated_position.top_left[1], this.rotated_position.bottom_left[0], this.rotated_position.bottom_left[1]);
        // for (let i = 0; i < collision_points[0].length; i++) {
        //         ctx.fillStyle = "red";
        //         ctx.fillRect(collision_points[0][i], collision_points[1][i],5,5)

        // }
    }

    start_move_right() {
        if (this.moveInterval === null) {
            this.moveInterval = setInterval(() => {
                if (this.position.x + this.speed + (this.position.width) < canvas.width) {
                    this.position.x += this.speed;
                    if (this.rotation + this.rotationSpeed < 26) {
                        this.rotation += this.rotationSpeed;
                    }
                    this.draw_player_to_canvas();
                }
            }, 20);
        }
    }

    stop_move_right() {
        if (this.moveInterval !== null) {
            clearInterval(this.moveInterval);
            this.moveInterval = null;
        }
    }

    start_move_left() {
        if (this.moveInterval === null) {
            this.moveInterval = setInterval(() => {
                if (this.position.x - this.speed - 10 > 0) {
                    this.position.x -= this.speed;
                    if (this.rotation - this.rotationSpeed > -26) {
                        this.rotation -= this.rotationSpeed;
                    }
                    this.draw_player_to_canvas();
                }
            }, 20);
        }
    }

    stop_move_left() {
        if (this.moveInterval !== null) {
            clearInterval(this.moveInterval);
            this.moveInterval = null;
        }
    }

    reset_rotation() {
        if (this.rotationAnimating) {
            return;
        }

        this.rotationAnimating = true;

        const animateFrame = () => {
            if (this.rotation !== 0) {
                this.rotation -= Math.sign(this.rotation);
                this.draw_player_to_canvas();
                setTimeout(animateFrame, 10);
            } else {
                this.rotationAnimating = false;
            }
        };

        animateFrame();
        setTimeout(() => { this.rotationAnimating = false; }, 10);
    }
}