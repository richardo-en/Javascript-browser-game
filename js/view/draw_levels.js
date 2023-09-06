var canvas = document.getElementById("main_canvas");

class Levels {
    constructor(line) {
        this.line = line
        this.animate = true;
        this.animateFrame;
        this.y_pos = 0;
        this.size = 10;
        this.bottom;
        this.additionals = [];
        this.speed;
    }

    easy_algorythm_1(player, list, created_aditionals, speed) {
        var new_cars = [];
        this.speed = speed
        new_cars.push(new Cars(this.speed, 0, 0, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 1, 180, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 5, 0, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 4, 180, this.get_car(), player));

        if (this.line == 1) {
            new_cars.push(new Cars(this.speed, 4, 0, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 3, 200, this.get_car(), player));
        }
        else if (this.line == 6) {
            new_cars.push(new Cars(this.speed, 1, 0, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 2, 200, this.get_car(), player));
        }
        this.append_and_subscribe(player, new_cars);
    }

    easy_algorythm_2(player, list, created_aditionals, speed) {
        var new_cars = [];
        this.speed = speed
        new_cars.push(new Cars(this.speed, 0, 300, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 0, 450, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 1, 0, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 4, 0, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 5, 300, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 5, 450, this.get_car(), player));

        if (this.line == 2) {
            new_cars.push(new Cars(this.speed, 41, 200, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 2, 300, this.get_car(), player));
        }
        else if (this.line == 5) {
            new_cars.push(new Cars(this.speed, 1, 200, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 3, 300, this.get_car(), player));
        }
        this.append_and_subscribe(player, new_cars);
    }

    easy_algorythm_3(player, list, created_aditionals, speed) {
        var new_cars = [];
        this.speed = speed
        new_cars.push(new Cars(this.speed, 0, 300, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 2, 0, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 3, 0, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 5, 300, this.get_car(), player));


        if (this.line == 3) {
            new_cars.push(new Cars(this.speed, 1, 0, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 2, 200, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 4, 400, this.get_car(), player));
        }
        else if (this.line == 4) {
            new_cars.push(new Cars(this.speed, 4, 0, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 3, 200, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 1, 400, this.get_car(), player));
        }
        this.append_and_subscribe(player, new_cars);
    }

    medium_algorythm_1(player, list, created_aditionals, speed) {
        var new_cars = [];
        this.speed = speed
        new_cars.push(new Cars(this.speed, 0, 300, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 2, 450, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 3, 450, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 5, 300, this.get_car(), player));

        if (this.line == 1) {
            new_cars.push(new Cars(this.speed, 1, 100, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 3, 100, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 5, 0, this.get_car(), player));
        }
        else if (this.line == 6) {
            new_cars.push(new Cars(this.speed, 4, 100, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 2, 100, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 0, 0, this.get_car(), player));
        }
        this.append_and_subscribe(player, new_cars);
    }

    medium_algorythm_2(player, list, created_aditionals, speed) {
        var new_cars = [];
        this.speed = speed
        new_cars.push(new Cars(this.speed, 0, 450, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 5, 450, this.get_car(), player));

        if (this.line == 2) {
            new_cars.push(new Cars(this.speed, 0, 300, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 1, 0, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 2, 450, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 2, 0, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 3, 350, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 4, 0, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 4, 200, this.get_car(), player));
        }
        else if (this.line == 5) {
            new_cars.push(new Cars(this.speed, 5, 300, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 4, 0, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 3, 450, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 3, 0, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 2, 350, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 1, 0, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 1, 200, this.get_car(), player));
        }
        this.append_and_subscribe(player, new_cars);
    }

    medium_algorythm_3(player, list, created_aditionals, speed) {
        var new_cars = [];
        this.speed = speed
        new_cars.push(new Cars(this.speed, 0, 450, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 5, 450, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 2, 50, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 3, 50, this.get_car(), player));

        if (this.line == 3) {
            new_cars.push(new Cars(this.speed, 1, 200, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 5, 0, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 4, 350, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 3, 400, this.get_car(), player));

        }
        else if (this.line == 4) {
            new_cars.push(new Cars(this.speed, 4, 200, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 0, 0, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 1, 350, this.get_car(), player));
            new_cars.push(new Cars(this.speed, 2, 400, this.get_car(), player));
        }
        this.append_and_subscribe(player, new_cars);
    }

    hard_algorythm_1(player, list, created_aditionals, speed) {
        var new_cars = [];
        this.speed = speed
        new_cars.push(new Cars(this.speed, 0, 50, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 1, 250, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 2, 50, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 3, 300, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 4, 50, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 4, 350, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 5, 150, this.get_car(), player));
        this.append_and_subscribe(player, new_cars);
    }

    hard_algorythm_2(player, list, created_aditionals, speed) {
        var new_cars = [];
        this.speed = speed
        new_cars.push(new Cars(this.speed, 0, 50, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 0, 350, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 1, 100, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 2, 250, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 3, 0, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 4, 50, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 4, 480, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 5, 430, this.get_car(), player));
        this.append_and_subscribe(player, new_cars);
    }

    hard_algorythm_3(player, list, created_aditionals, speed) {
        var new_cars = [];
        this.speed = speed
        new_cars.push(new Cars(this.speed, 0, 380, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 1, 50, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 1, 450, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 2, 0, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 2, 150, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 3, 50, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 3, 200, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 5, 200, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 5, 400, this.get_car(), player));
        this.append_and_subscribe(player, new_cars);
    }

    hard_algorythm_4(player, list, created_aditionals, speed) {
        var new_cars = [];
        this.speed = speed
        new_cars.push(new Cars(this.speed, 0, 50, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 0, 300, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 1, 0, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 2, 200, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 3, 50, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 3, 250, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 4, 250, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 5, 50, this.get_car(), player));
        this.append_and_subscribe(player, new_cars);
    }

    hard_algorythm_5(player, list, created_aditionals, speed) {
        var new_cars = [];
        this.speed = speed
        new_cars.push(new Cars(this.speed, 0, 500, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 1, 150, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 2, 50, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 2, 200, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 3, 250, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 4, 0, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 5, 150, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 5, 450, this.get_car(), player));
        this.append_and_subscribe(player, new_cars);
    }

    hard_algorythm_6(player, list, created_aditionals, speed) {
        var new_cars = [];
        this.speed = speed
        new_cars.push(new Cars(this.speed, 0, 50, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 0, 300, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 1, 500, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 2, 0, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 2, 450, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 3, 0, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 4, 100, this.get_car(), player));
        new_cars.push(new Cars(this.speed, 5, 300, this.get_car(), player));
        this.append_and_subscribe(player, new_cars);
    }

    get_car() {
        var cars = ["blue", "green", "purple", "red", "yellow"]
        return "/static/images/cars/" + cars[Math.floor(Math.random() * (5))] + "_car.webp";
    }


    append_and_subscribe(player, new_cars) {
        this.generate_additionals(new_cars, player);
        for (let i = 0; i < new_cars.length; i++) {
            new_cars[i].move_back();
            player.subscribe(new_cars[i]);
        }
    }

    create_additionals(random_line, y_pos, player, new_additionals) {
        var make_power_up = Math.floor(Math.random() * (6))
        if (make_power_up < 1) {
            var new_object = new Additionals(this.speed, random_line, y_pos, "boost", player);
            new_additionals.push(new_object);
            player.subscribe(new_object);
        } else {
            var new_object = new Additionals(this.speed, random_line, y_pos, "coin", player);
            new_additionals.push(new_object);
            player.subscribe(new_object);
        }
    }

    generate_additionals(new_cars, player) {
        var was_added = false, was_moved = false, can_be_added = true;
        var added_count = Math.floor(Math.random() * (5) + 1), step = 50;
        var new_additionals = []
        for (let random_number = 0; random_number < added_count; random_number++) {
            var random_line = Math.floor(Math.random() * (5));
            var y_pos = 0;
            var skip_y_positions = []
            for (let i = 0; i < new_cars.length; i++) {
                var new_car = new_cars[i];
                if (new_car.lane == random_line) {
                    skip_y_positions.push(new_car);
                }
            }
            while (was_added == false) {
                if (skip_y_positions.length > 0) {
                    for (let a = 0; a < skip_y_positions.length; a++) {
                        let s_pos = y_pos + step;
                        let car_1 = skip_y_positions[a].position.y + canvas.clientHeight;
                        let car_2 = skip_y_positions[a].position.y +120 + canvas.clientHeight;
                        if (((y_pos <= car_1) && (s_pos >= car_1)) || ((y_pos >= car_1) && (s_pos <= car_2)) || ((y_pos <= car_2) && (s_pos >= car_2)) || (y_pos == car_1 || s_pos == car_2)) {
                            y_pos += step;
                            can_be_added = false;
                            was_moved = true;
                            break;
                        }
                    }

                    if (new_additionals.length > 0 && was_moved == false) {
                        for (let c = 0; c < new_additionals.length; c++) {
                            if (((y_pos + 2 * step >= new_additionals[c].position.y + canvas.clientHeight) && (y_pos <= new_additionals[c].position.y + canvas.clientHeight)) 
                            || ((y_pos <= new_additionals[c].position.y + canvas.clientHeight + 2 * step) && (y_pos >= new_additionals[c].position.y + canvas.clientHeight))) {
                                can_be_added = false;
                                was_moved = true;
                                y_pos += step;
                                break;
                            }
                        }
                    }

                    if (was_moved == true) {
                        if (y_pos > canvas.clientHeight - 150) {
                            break;
                        }
                        was_moved = false;
                        can_be_added = true;
                        continue;
                    } else if (can_be_added == true && was_moved == false) {
                        this.create_additionals(random_line, y_pos, player, new_additionals);
                        was_added = true;
                    } else {
                        y_pos += 25;
                        was_moved = false;
                        can_be_added = true;
                    }

                    if (y_pos > canvas.clientHeight) {
                        break;
                    }

                }
                else if (skip_y_positions.length == 0) {
                    this.create_additionals(random_line, y_pos, player, new_additionals);
                    was_added = true;
                }
            }
            was_added = false;
            skip_y_positions = [];
        }
    }

    draw_finish_line(size, x, y, lines) {
        ctx.beginPath();
        var color = "black", first_square_color;
        for (let a = 0; a < lines; a++) {
            for (let i = 0; i < canvas.clientWidth / size; i++) {
                if (i == 0) {
                    first_square_color = color;
                }
                if (color == "black") {
                    ctx.fillStyle = color;
                    color = "white"
                } else {
                    ctx.fillStyle = color;
                    color = "black"
                }
                ctx.fillRect(x + i * size, y + a * size, size, size);
            }
            if (first_square_color == "black") {
                color = "white";
            } else {
                color = "black";
            }
        }
    }

    move_back(player) {
        var x_pos = 0, lines = 8;
        this.y_pos = 0;

        this.animateFrame = () => {
            if (this.animate) {                
                ctx.clearRect(0, this.y_pos - this.size, canvas.clientWidth, lines * this.size)
                this.draw_finish_line(this.size, x_pos, this.y_pos, lines);
                this.check_collision(player);
                setTimeout(this.animateFrame, 50);
                this.y_pos += this.size;
                this.bottom = this.y_pos + (lines * this.size);
            }else if (game_run() == false) {
                setTimeout(this.animateFrame, 5);
            }
        }
        this.animateFrame();
    }

    check_collision(player) {
        if (this.bottom >= player.position.y) {
            cancelAnimationFrame(this.animateFrame);
            this.animateFrame = null;
            ctx.clearRect(0,0,canvas.clientWidth, canvas.clientHeight);
            stop_animation("win")
            play_sound("/static/sounds/win_level.wav")
        }
    }
}