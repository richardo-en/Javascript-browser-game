var canvas = document.getElementById("main_canvas");
var ctx = canvas.getContext("2d");

class Player_parent extends Observer {
    constructor(image_path) {
        super();
        this.image = new Image();
        this.image.src = image_path;
        this.position = {
            "x": ((1000 / 6) * 6) - 100,
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
        this.rotated_position = [
            {
                "top_left": null,
                "top_right": null,
                "bottom_left": null,
                "bottom_right": null
            }
        ]
        this.position_to_remove = [
            {
                "x_begin": this.position.x,
                "y_begin": this.position.y,
                "width": this.position.width,
                "height": this.position.height
            }
        ]
    }

    change_image(link) {
        this.image.src = link
    }

    check_collision(car) {
        var new_positions_clear = calculate_new_positions([this.position.x, this.position.y, this.position.width, this.position.height, this.rotation]);
        this.position_to_remove.x_begin = new_positions_clear[4][0];
        this.position_to_remove.y_begin = new_positions_clear[4][1];
        this.position_to_remove.width = new_positions_clear[4][2];
        this.position_to_remove.height = new_positions_clear[4][3];

        this.rotated_position.top_left = new_positions_clear[0];
        this.rotated_position.top_right = new_positions_clear[1];
        this.rotated_position.bottom_left = new_positions_clear[2];
        this.rotated_position.bottom_right = new_positions_clear[3];

        var collision_points = [], is_from_left = false, is_from_right = false, is_from_above = false, is_from_under = false, temporary_lowest_y = null, index;
        var lowest_y = Number.MAX_VALUE;

        if (car.position.x + car.position.width > this.position_to_remove.x_begin && car.position.x + car.position.width < this.position_to_remove.x_begin + this.position_to_remove.width) {
            collision_points = this.calculate_collision_points(this.rotated_position.top_left[0], this.rotated_position.top_left[1], this.rotated_position.bottom_left[0], this.rotated_position.bottom_left[1]);
            is_from_left = true;
        } else if ((car.position.x < this.position_to_remove.x_begin + this.position_to_remove.width) && (car.position.x > this.position_to_remove.x_begin)) {
            collision_points = this.calculate_collision_points(this.rotated_position.top_right[0], this.rotated_position.top_right[1], this.rotated_position.bottom_right[0], this.rotated_position.bottom_right[1]);
            is_from_right = true;
        }

        if (car.position.y > this.position_to_remove.y_begin && car.position.y < this.position_to_remove.y_begin + this.position_to_remove.height) {
            is_from_under = true;
        } else if (car.position.y + car.position.height > this.position_to_remove.y_begin && car.position.y + car.position.height < this.position_to_remove.y_begin + this.position_to_remove.height) {
            is_from_above = true;
        }

        if ((is_from_left == true || is_from_right == true) && (is_from_under == true || is_from_above == true)) {
            for (let a = 0; a < collision_points[0].length; a++) {
                if (is_from_under == true) {
                    temporary_lowest_y = collision_points[1][a] - car.position.y;
                } else {
                    temporary_lowest_y = collision_points[1][a] - car.position.y + car.position.height;
                }


                if (temporary_lowest_y < 0) {
                    temporary_lowest_y *= (-1);
                }

                if (temporary_lowest_y == null) {
                    lowest_y = temporary_lowest_y;
                } else if (temporary_lowest_y < lowest_y) {
                    lowest_y = temporary_lowest_y;
                    index = a;
                }
            }

            if (is_from_left == true) {
                if (car.position.x + car.position.width - 5 > collision_points[0][index]) {
                    return true
                }
            } else if (is_from_right == true) {
                if (car.position.x + 5 < collision_points[0][index]) {
                    return true
                }
            };
            collision_points = [];
        }
    }

    calculate_collision_points(first_point_x, first_point_y, second_point_x, second_point_y) {
        var collision_points_x = [first_point_x, second_point_x]
        var collision_points_y = [first_point_y, second_point_y]
        for (let i = 1; i < 4; i++) {
            collision_points_y.push(collision_points_y[i] + ((collision_points_y[0] - collision_points_y[i]) / 2))
            collision_points_x.push(collision_points_x[i] + ((collision_points_x[0] - collision_points_x[i]) / 2))
        }

        collision_points_y.push(collision_points_y[2] + ((collision_points_y[3] - collision_points_y[2]) / 2))
        collision_points_x.push(collision_points_x[2] + ((collision_points_x[3] - collision_points_x[2]) / 2))

        collision_points_y.push(collision_points_y[1] + ((collision_points_y[0] - collision_points_y[2]) / 2))
        collision_points_x.push(collision_points_x[1] + ((collision_points_x[0] - collision_points_x[2]) / 2))

        collision_points_y.push(collision_points_y[1] + ((collision_points_y[0] - collision_points_y[3]) / 2))
        collision_points_x.push(collision_points_x[1] + ((collision_points_x[0] - collision_points_x[3]) / 2))


        collision_points_y.push(collision_points_y[6] + ((collision_points_y[0] - collision_points_y[3]) / 2))
        collision_points_x.push(collision_points_x[6] + ((collision_points_x[0] - collision_points_x[3]) / 2))

        return [collision_points_x, collision_points_y]
    }

    update(object) {
        if (this.check_collision(object)) {
            if (object.name == "car") {
                stop_animation("lose");
                play_sound("/static/sounds/car_crash.mp3");
                increase_status(0);
            } else if (object.name == "coin") {
                play_sound("/static/sounds/coin.wav")
                increase_coins(1);
                object.delete_object();
            } else if (object.name == "boost") {
                play_sound("/static/sounds/coin.wav")
                power_up();
                object.delete_object();
            }
        }
    }

    calculate_line() {
        let line_width = 1000 / 6;
        let temporary_id = 0;
        let line_id = 0;
        while (this.position.x + (this.position.width / 2) > temporary_id) {
            temporary_id += line_width;
            line_id++;
        }
        return line_id;
    }
}