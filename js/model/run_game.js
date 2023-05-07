var player;
var created_cars = [], created_aditionals = [];
var stop_generating = false;
var stop = false;
let timeoutId;
var timer, time_value, power_up_called = false, level, active_game = false, animated_car, index;
var level_maker;

function game_run() {
    return active_game
}


function increase_level() {
    if (level < 3) {
        var levelsCookie = getCookie("levels");
        var levels = JSON.parse(levelsCookie);
        levels[0].current_level++;
        upload_to_cookie_simple_form("levels", levels);
        load_levels(level)
    }
}

function stop_all_elements() {
    active_game = false;
    for (let i = 0; i < created_cars.length; i++) {
        created_cars[i].animate = false;
    }
    for (let a = 0; a < created_aditionals.length; a++) {
        created_aditionals[a].animate = false;
    }
    level_maker.animate = false;
}

function resume_all_elements() {
    for (let i = 0; i < created_cars.length; i++) {
        created_cars[i].animate = true;
    }
    for (let a = 0; a < created_aditionals.length; a++) {
        created_aditionals[a].animate = true;
    }
    active_game = true;
    level_maker.animate = true;
}



function unsubscribe(object, type) {
    if (type == "car") {
        let index_of_object = created_cars.indexOf(object);
        created_cars.splice(index_of_object, 1);
    } else if (type == "additional") {
        let index_of_object = created_aditionals.indexOf(object);
        created_aditionals.splice(index_of_object, 1);
    }
    delete object;
}

function set_time() {
    time_value = ((2 * ((document.getElementById("main_canvas").clientHeight) - 200) / level_maker.speed) * 5)
}

function power_up() {
    for (let i = 0; i < created_cars.length; i++) {
        created_cars[i].speed = 2;
    }
    for (let a = 0; a < created_aditionals.length; a++) {
        created_aditionals[a].speed = 2;
    }
    set_time();

    setTimeout(function () {
        for (let i = 0; i < created_cars.length; i++) {
            created_cars[i].speed = 2.5;
        }
        for (let a = 0; a < created_aditionals.length; a++) {
            created_aditionals[a].speed = 2.5;
        }
    }, 2000);
    set_time();
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
        }
    }, 100);
    reset();
}

function winning_animation(level_object) {
    level_object.move_back(player);
    increase_level();
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

function start_game() {
    remove_all_elements();
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
                        level_maker.easy_algorythm_1(player, created_cars, created_aditionals, 2.5);
                    } else if (line == 2 || line == 5) {
                        level_maker.easy_algorythm_2(player, created_cars, created_aditionals, 2.5);
                    } else if (line == 3 || line == 4) {
                        level_maker.easy_algorythm_3(player, created_cars, created_aditionals, 2.5);
                    }
                } else if (level == 2) {
                    if (line == 1 || line == 6) {
                        level_maker.medium_algorythm_1(player, created_cars, created_aditionals), 3.5;
                    } else if (line == 2 || line == 5) {
                        level_maker.medium_algorythm_2(player, created_aditionals, 3.5);
                    } else if (line == 3 || line == 4) {
                        level_maker.medium_algorythm_3(player, created_cars, created_aditionals, 3.5);
                    }
                } else {
                    const functionName = `hard_algorythm_${line}`;
                    level_maker[functionName](player, created_cars, created_aditionals, 3.5);
                }
            }
            timeoutId = setTimeout(runLevels, time_value);
        }
    }
    var timer_element = document.createElement("div");
    var timer_text = document.createElement("p");
    timer_text.id = "timer_text";
    timer_element.appendChild(timer_text);
    timer_element.id = "timer";
    document.body.appendChild(timer_element);

    countdown(2, level_maker, level);
    runLevels();
    set_time();
};

function reset() {
    created_cars = [];
    stop = false;
    stop_generating = false;
}

function get_stop_value() {
    return stop;
}
