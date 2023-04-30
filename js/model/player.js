var canvas = document.getElementById("main_canvas");
var ctx = canvas.getContext("2d");

class Player {
    constructor(image_path) {
        this.image = new Image();
        this.image.src = image_path;
        this.position = {
            "x": ((1000/6) * 2) - 100,
            "y": 400,
            "width": 100,
            "height": 180
        }
        this.image.onload = () => {
            this.position.height = this.image.height * 1.8;
            this.position.width = this.image.width * 1.8;
            this.draw_player_to_canvas();
        };
        this.speed = 10;
        this.rotation = 0;
        this.rotationSpeed = 2;
        this.moveInterval = null;
    }

    draw_player_to_canvas() {
        // const [clearX, clearY, clearWidth, clearHeight] = this.get_clear_rect();
        // ctx.clearRect(clearX - 10, clearY - 10, clearWidth + 20, clearHeight + 20);
        ctx.clearRect(this.position.x - 10 - (this.rotation * 0.85), this.position.y - (this.rotation * 0.5), this.position.width + 20 + (this.rotation * 0.8), this.position.height + (this.rotation));
        ctx.save();
        ctx.translate(this.position.x + this.position.width / 2, this.position.y + this.position.height / 2);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.drawImage(this.image, -this.position.width / 2, -this.position.height / 2, this.position.width, this.position.height);
        ctx.restore();
    }

    check_collision(cars) {
        for (let i = 0; i < cars.length; i++) {
            var car = cars[i];
            let y_bottom = this.position.y + this.position.height;
            let x_opposite_side = this.position.x + this.position.width;
            let car_y_bottom = car.position.y + car.position.height;
            let car_x_opposite_side = car.position.x + car.position.width
            if ((
                (car.position.x < this.position.x && car_x_opposite_side > this.position.x) || (x_opposite_side > car.position.x && x_opposite_side < car_x_opposite_side)
                )&&(
                (this.position.y > car.position.y && this.position.y < car_y_bottom) || (y_bottom < car_y_bottom && y_bottom > car.position.y))) {
                return true;
            }
        }
        return false;
    }

    update(cars) {
        if(this.check_collision(cars)){
            alert("coliziaa!!!");
        }
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

    calculate_line(){
        let line_width = 1000/6;
        let temporary_id = 0;
        let line_id = 0;
        while (this.position.x + (this.position.width/2) > temporary_id) {
            temporary_id += line_width;
            line_id++; 
        }
        return line_id;
    }
}