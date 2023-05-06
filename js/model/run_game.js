var player;
var created_cars = []
var stop_generating = false;
var stop = false;
let timeoutId;
var timer;

function stop_animation(type) {
    for (let i = 0; i < created_cars.length; i++) {
        created_cars[i].animate = false;
    }
    stop = true;
    clearTimeout(timeoutId)
    clearInterval(timer);
    setTimeout(function () {
        if (type == "lose") {
            draw_game_screen(type);
        } else if (type == "win") {
            draw_game_screen(type);
        }
    }, 100);
    reset();
}

function winning_animation(level_object) {
    level_object.move_back(player);
}

function countdown(preset_time, level_maker) {
    var timer_element = document.getElementById("timer_text");
    timer = setInterval(function () {
        timer_element.textContent = preset_time;
        preset_time--;
        if (preset_time == 0) {
            clearInterval(timer);
            setTimeout(function () {
                winning_animation(level_maker);
            }, 2000)
        } else if (preset_time == 2) {
            stop_generating = true;
        }
    }, 1000);
}

function start_game(level) {
    remove_all_elements();
    document.getElementById("background_image").style.animationDuration = "2s";
    player = new Player("/static/images/cars/police/german_police_car.png");
    var level_maker = new Levels(0);
    function runLevels() {
        let line = player.calculate_line();
        if (stop_generating == false) {
            level_maker.line = line;
            if (level == 1) {
                if (line == 1 || line == 6) {
                    level_maker.easy_algorythm_1(player, created_cars);
                } else if (line == 2 || line == 5) {
                    level_maker.easy_algorythm_2(player, created_cars);
                } else if (line == 3 || line == 4) {
                    level_maker.easy_algorythm_3(player, created_cars);
                }
            } else if (level == 2) {
                if (line == 1 || line == 6) {
                    level_maker.medium_algorythm_1(player, created_cars);
                } else if (line == 2 || line == 5) {
                    level_maker.medium_algorythm_2(player, created_cars);
                } else if (line == 3 || line == 4) {
                    level_maker.medium_algorythm_3(player, created_cars);
                }
            } else {
                const functionName = `hard_algorythm_${line}`;
                level_maker[functionName](player, created_cars);
            }
            timeoutId = setTimeout(runLevels, 2400);
        }
    }
    var timer_element = document.createElement("div");
    var timer_text = document.createElement("p");
    timer_text.id = "timer_text";
    timer_element.appendChild(timer_text);
    timer_element.id = "timer";
    document.body.appendChild(timer_element);

    // countdown(15, level_maker);
    runLevels();
};

function reset() {
    created_cars = [];
    stop = false;
    stop_generating = false;
}

function get_stop_value() {
    return stop;
}
