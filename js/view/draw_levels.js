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
    }

    easy_algorythm_1(player, list) {
        var new_cars = [];
        new_cars.push(new Cars(2.5, 0, 0, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 1, 180, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 5, 0, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 4, 180, "/static/images/cars/blue_car.png"));

        if (this.line == 1) {
            new_cars.push(new Cars(2.5, 4, 0, "/static/images/cars/yellow_car.png"));
            new_cars.push(new Cars(2.5, 3, 200, "/static/images/cars/yellow_car.png"));
        }
        else if (this.line == 6) {
            new_cars.push(new Cars(2.5, 1, 0, "/static/images/cars/red_car.png"));
            new_cars.push(new Cars(2.5, 2, 200, "/static/images/cars/red_car.png"));
        }
        this.append_and_subscribe(player, list, new_cars);
    }

    easy_algorythm_2(player, list) {
        var new_cars = [];
        new_cars.push(new Cars(2.5, 0, 300, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 0, 450, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 1, 0, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 4, 0, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 5, 300, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 5, 450, "/static/images/cars/blue_car.png"));

        if (this.line == 2) {
            new_cars.push(new Cars(2.5, 41, 200, "/static/images/cars/red_car.png"));
            new_cars.push(new Cars(2.5, 2, 300, "/static/images/cars/red_car.png"));
        }
        else if (this.line == 5) {
            new_cars.push(new Cars(2.5, 1, 200, "/static/images/cars/yellow_car.png"));
            new_cars.push(new Cars(2.5, 3, 300, "/static/images/cars/yellow_car.png"));
        }
        this.append_and_subscribe(player, list, new_cars);
    }

    easy_algorythm_3(player, list) {
        var new_cars = [];
        new_cars.push(new Cars(2.5, 0, 300, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 2, 0, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 3, 0, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 5, 300, "/static/images/cars/blue_car.png"));


        if (this.line == 3) {
            new_cars.push(new Cars(2.5, 1, 0, "/static/images/cars/red_car.png")); 4
            new_cars.push(new Cars(2.5, 2, 200, "/static/images/cars/red_car.png")); 3
            new_cars.push(new Cars(2.5, 4, 400, "/static/images/cars/red_car.png")); 1
        }
        else if (this.line == 4) {
            new_cars.push(new Cars(2.5, 4, 0, "/static/images/cars/yellow_car.png"));
            new_cars.push(new Cars(2.5, 3, 200, "/static/images/cars/yellow_car.png"));
            new_cars.push(new Cars(2.5, 1, 400, "/static/images/cars/yellow_car.png"));
        }
        this.append_and_subscribe(player, list, new_cars);
    }

    medium_algorythm_1(player, list) {
        var new_cars = [];
        new_cars.push(new Cars(4, 0, 300, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(4, 2, 450, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(4, 3, 450, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(4, 5, 300, "/static/images/cars/blue_car.png"));

        if (this.line == 1) {
            new_cars.push(new Cars(4, 1, 100, "/static/images/cars/yellow_car.png"));
            new_cars.push(new Cars(4, 3, 100, "/static/images/cars/yellow_car.png"));
            new_cars.push(new Cars(4, 5, 0, "/static/images/cars/yellow_car.png"));
        }
        else if (this.line == 6) {
            new_cars.push(new Cars(4, 4, 100, "/static/images/cars/red_car.png"));
            new_cars.push(new Cars(4, 2, 100, "/static/images/cars/red_car.png"));
            new_cars.push(new Cars(4, 0, 0, "/static/images/cars/red_car.png"));
        }
        this.append_and_subscribe(player, list, new_cars);
    }

    medium_algorythm_2(player, list) {
        var new_cars = [];
        new_cars.push(new Cars(4, 0, 450, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(4, 5, 450, "/static/images/cars/blue_car.png"));

        if (this.line == 2) {
            new_cars.push(new Cars(4, 0, 300, "/static/images/cars/yellow_car.png"));
            new_cars.push(new Cars(4, 1, 0, "/static/images/cars/yellow_car.png"));
            new_cars.push(new Cars(4, 2, 450, "/static/images/cars/yellow_car.png"));
            new_cars.push(new Cars(4, 2, 0, "/static/images/cars/yellow_car.png"));
            new_cars.push(new Cars(4, 3, 350, "/static/images/cars/yellow_car.png"));
            new_cars.push(new Cars(4, 4, 0, "/static/images/cars/yellow_car.png"));
            new_cars.push(new Cars(4, 4, 200, "/static/images/cars/yellow_car.png"));
        }
        else if (this.line == 5) {
            new_cars.push(new Cars(4, 5, 300, "/static/images/cars/red_car.png"));
            new_cars.push(new Cars(4, 4, 0, "/static/images/cars/red_car.png"));
            new_cars.push(new Cars(4, 3, 450, "/static/images/cars/red_car.png"));
            new_cars.push(new Cars(4, 3, 0, "/static/images/cars/red_car.png"));
            new_cars.push(new Cars(4, 2, 350, "/static/images/cars/red_car.png"));
            new_cars.push(new Cars(4, 1, 0, "/static/images/cars/red_car.png"));
            new_cars.push(new Cars(4, 1, 200, "/static/images/cars/red_car.png"));
        }
        this.append_and_subscribe(player, list, new_cars);
    }

    medium_algorythm_3(player, list) {
        var new_cars = [];
        new_cars.push(new Cars(4, 0, 450, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(4, 5, 450, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(4, 2, 50, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(4, 3, 50, "/static/images/cars/blue_car.png"));

        if (this.line == 3) {
            new_cars.push(new Cars(4, 1, 200, "/static/images/cars/yellow_car.png"));
            new_cars.push(new Cars(4, 5, 0, "/static/images/cars/yellow_car.png"));
            new_cars.push(new Cars(4, 4, 350, "/static/images/cars/yellow_car.png"));
            new_cars.push(new Cars(4, 3, 400, "/static/images/cars/yellow_car.png"));

        }
        else if (this.line == 4) {
            new_cars.push(new Cars(4, 4, 200, "/static/images/cars/red_car.png"));
            new_cars.push(new Cars(4, 0, 0, "/static/images/cars/red_car.png"));
            new_cars.push(new Cars(4, 1, 350, "/static/images/cars/red_car.png"));
            new_cars.push(new Cars(4, 2, 400, "/static/images/cars/red_car.png"));
        }
        this.append_and_subscribe(player, list, new_cars);
    }

    hard_algorythm_1(player, list) {
        var new_cars = [];
        new_cars.push(new Cars(2.5, 0, 50, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 1, 250, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 2, 50, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 3, 300, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 4, 50, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 4, 350, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 5, 150, "/static/images/cars/blue_car.png"));
        this.append_and_subscribe(player, list, new_cars);
    }

    hard_algorythm_2(player, list) {
        var new_cars = [];
        new_cars.push(new Cars(2.5, 0, 50, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 0, 350, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 1, 100, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 2, 250, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 3, 0, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 4, 50, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 4, 480, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 5, 430, "/static/images/cars/blue_car.png"));
        this.append_and_subscribe(player, list, new_cars);
    }

    hard_algorythm_3(player, list) {
        var new_cars = [];
        new_cars.push(new Cars(2.5, 0, 380, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 1, 50, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 1, 450, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 2, 0, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 2, 150, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 3, 50, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 3, 200, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 5, 200, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 5, 400, "/static/images/cars/blue_car.png"));
        this.append_and_subscribe(player, list, new_cars);
    }

    hard_algorythm_4(player, list) {
        var new_cars = [];
        new_cars.push(new Cars(2.5, 0, 50, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 0, 300, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 1, 0, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 2, 200, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 3, 50, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 3, 250, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 4, 250, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 5, 50, "/static/images/cars/blue_car.png"));
        this.append_and_subscribe(player, list, new_cars);
    }

    hard_algorythm_5(player, list) {
        var new_cars = [];
        new_cars.push(new Cars(2.5, 0, 500, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 1, 150, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 2, 50, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 2, 200, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 3, 250, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 4, 0, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 5, 150, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 5, 450, "/static/images/cars/blue_car.png"));
        this.append_and_subscribe(player, list, new_cars);
    }

    hard_algorythm_6(player, list) {
        var new_cars = [];
        new_cars.push(new Cars(2.5, 0, 50, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 0, 300, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 1, 500, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 2, 0, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 2, 450, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 3, 0, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 4, 100, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(2.5, 5, 300, "/static/images/cars/blue_car.png"));
        this.append_and_subscribe(player, list, new_cars);
    }

    
    append_and_subscribe(player, list, new_cars) {
        for (let i = 0; i < new_cars.length; i++) {
            new_cars[i].subscribe(player);
            new_cars[i].move_back();
            list.push(new_cars[i]);
        }
        this.generate_additionals(new_cars);
    }

    generate_additionals(new_cars) {
        var index = 0, was_added=false,was_moved=false;
        var added_count = Math.floor(Math.random() * (5) + 1), count = 0, step = 50;
        while (count != added_count) {
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
                        if (y_pos + 2*step < skip_y_positions[index].position.y + canvas.clientHeight || y_pos > skip_y_positions[index].position.y + skip_y_positions[index].position.height + canvas.clientHeight + step) {
                            let coin = new Additionals(2.5, random_line, y_pos, "/static/images/cars/blue_car.png");
                            coin.move_back();
                            count++;
                            was_added = true;
                        }else if(y_pos + 2* step >= skip_y_positions[index].position.y + canvas.clientHeight){
                            y_pos += skip_y_positions[index].position.height + canvas.clientHeight
                            was_moved = true;
                        }
                    }
                    if(was_moved == true){
                        y_pos += 25;
                        was_moved = false;
                    }
                }
                else{
                    y_pos = Math.floor(Math.random() * (canvas.clientHeight));
                    let coin = new Additionals(2.5, random_line, y_pos, "/static/images/cars/blue_car.png");
                    coin.move_back();
                    count++;
                    break
                }
            }
            was_added = false;
            skip_y_positions = [];
            index = 0;
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
            ctx.clearRect(0, this.y_pos - this.size, canvas.clientWidth, lines * this.size)
            this.draw_finish_line(this.size, x_pos, this.y_pos, lines);
            this.check_collision(player);
            setTimeout(this.animateFrame, 50);
            this.y_pos += this.size;
            this.bottom = this.y_pos + (lines * this.size);
        }
        this.animateFrame();
    }

    check_collision(player) {
        if (this.bottom >= player.position.y) {
            cancelAnimationFrame(this.animateFrame);
            this.animateFrame = null;
            stop_animation("win")
        }
    }
}

//Vytvorit novu classu  --> Akoze funcguje to aleeeee treba fixnut mazanie z listo a unsubscribe observera
    //coiny
    //powerup
//Optimalizacia
//Vyriesit kolizie
//Aj trackovanie hodnot

//Zmena casovania
//skiny
//rewards

//positioning
//Lockovanie levlov
//Controller canvas tlacidiel
//pause