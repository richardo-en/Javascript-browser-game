var player;
var stop_generating = false;
var stop = false;
let timeoutId;
var timer, time_value, power_up_called = false, level, active_game = false, animated_car, index;
var level_maker;

function game_run() {
    return active_game
}

function stop_all_elements() {
    player.notify("stop");
    active_game = false;
    level_maker.animate = false;
    document.getElementById("background_image").style.animation = "none"
}

function resume_all_elements() {
    player.notify("continue")
    active_game = true;
    level_maker.animate = true;
    document.getElementById("background_image").style.animation = "moveBackground 4s linear infinite"
}

function set_time(speed) {

    return ((2 * ((document.getElementById("main_canvas").clientHeight) - 75) / speed) * 5)
}

function power_up() {
    player.notify("powerup")
}

function stop_animation(type) {
    stop_all_elements()
    document.getElementById("background_image").style.animation = "none"
    player.stop_move_right();
    player.stop_move_left();
    if (index == 3) {
        clearInterval(animated_car);
    }
    delete player;
    clearTimeout(timeoutId)
    clearInterval(timer);
    setTimeout(function () {
        if (type == "lose") {
            draw_game_screen(type);
        } else if (type == "win") {
            draw_game_screen(type);
            if (level < 3) {
                increase_level(level);
                load_levels(level);
            }
        }
        close_level();
    }, 100);
}

function countdown(level) {
    var preset_time = 60;
    if (level == 1) {
        preset_time = 15
    }else if(level == 2){
        preset_time = 30
    }
    var timer_element = document.getElementById("timer_text");
    timer = setInterval(function () {
        timer_element.textContent = preset_time;
        if (active_game) {
            preset_time--;
        }
        if (preset_time == 0) {
            clearInterval(timer);
            setTimeout(function () {
                level_maker.move_back(player);
            }, 2000)
        } else if (preset_time == 2) {
            stop_generating = true;
        }
    }, 1000);
}

function car_sound(){
    const car_sound = document.createElement("audio");
    car_sound.id = "car_sound";
    car_sound.src = "/static/sounds/car_sound.mp3";
    car_sound.volume = (get_volume()/100);
    car_sound.loop = true;
    document.body.appendChild(car_sound);
    car_sound.play();
}

function start_game() {
    remove_all_elements();
    play_sound("/static/sounds/button_click.mp3");
    car_sound()
    document.getElementById("my_audio").pause();
    time_value = 2400;
    active_game = true;
    document.getElementById("background_image").style.animation = "moveBackground 2s linear infinite";

    var skins = JSON.parse(getCookie('skins'));
    var buttons = document.querySelectorAll(".skin_button");
    var selected_button = document.getElementById("selected_skin");
    index = Array.prototype.indexOf.call(buttons, selected_button);
    var switch_index = 0;
    if (index < 3) {
        player = new Player("/static/images/cars/police/" + skins[index].link[0]);
    } else {
        player = new Player("/static/images/cars/police/" + skins[index].link[switch_index]);
        animated_car = setInterval(function () {
            if(active_game == true){
                if (switch_index == 0) {
                    switch_index++;
                } else {
                    switch_index--
                }
                player.change_image("/static/images/cars/police/" + skins[index].link[switch_index]);
            }
        }, 350);
    }
    level_maker = new Levels(0);
    var buttons = document.getElementsByClassName('lvl_button');
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id == "selected") {
            level = parseInt(buttons[i].textContent, 10)
            break;
        }
    }
    function runLevels() {
        let line = player.calculate_line();
        if (stop_generating == false) {
            if (active_game) {
                level_maker.line = line;
                if (level == 1) {
                    if (line == 1 || line == 6) {
                        level_maker.easy_algorythm_1(player, 2.5);
                    } else if (line == 2 || line == 5) {
                        level_maker.easy_algorythm_2(player, 2.5);
                    } else if (line == 3 || line == 4) {
                        level_maker.easy_algorythm_3(player, 2.5);
                    }
                } else if (level == 2) {
                    if (line == 1 || line == 6) {
                        level_maker.medium_algorythm_1(player, 3.5);
                    } else if (line == 2 || line == 5) {
                        level_maker.medium_algorythm_2(player, 3.5);
                    } else if (line == 3 || line == 4) {
                        level_maker.medium_algorythm_3(player, 3.5);
                    }
                } else {
                    const functionName = `hard_algorythm_${line}`;
                    level_maker[functionName](player, 3.5);
                }
            }
            timeoutId = setTimeout(runLevels, time_value);
            time_value = set_time(level_maker.speed);
        }
    }
    var timer_element = document.createElement("div");
    var timer_text = document.createElement("p");
    timer_text.id = "timer_text";
    timer_element.appendChild(timer_text);
    timer_element.id = "timer";
    document.body.appendChild(timer_element);
    countdown(level);
    runLevels();
    set_time();
};

function reset() {
    stop_generating = false;
}

function close_level(){
    active_game = false;
    stop_generating = false;
    document.getElementById("car_sound").remove();
    document.getElementById("timer").remove();
}

function get_stop_value() {
    return stop;
}
