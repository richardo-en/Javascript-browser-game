var audio = document.getElementById("my_audio");
audio.pause();
var player;
function set_volume() {
    let mute_button = document.getElementById("button_container");
    let new_volume_value = document.getElementById("volume_bar").value / 100;
    if (new_volume_value == 0 && audio.volume != 0) {
        audio.pause();
        audio.currentTime = 0;
        if (mute_button.className == "on") {
            switch_mute_image();
        }
    } else if (audio.volume == 0 && new_volume_value > 0) {
        audio.currentTime = 0;
        audio.play();
        if (mute_button.className == "off") {
            switch_mute_image();
        }
    }
    audio.volume = new_volume_value;
}

audio.addEventListener("ended", function () {
    audio.currentTime = 0;
    audio.play();
});


function save_settings_button() {
    set_settings_values();
    new Section().create_main_page();
}
function draw_help_screen() {
    let background = get_object("background")
    remove_all_elements();
    background.stopLoop();
    new Canvas_screens().clear_screen();
    new Canvas_screens().help_screen();
};

function remove_all_elements() {
    var sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        var elements = section.querySelectorAll('*');
        elements.forEach((element) => {
            element.style.display = 'none';
        });
    });
};


//Settings
function switch_mute_image() {
    let button_image = document.getElementById("volume");
    let mute_button = document.getElementById("button_container");
    let new_volume_value = document.getElementById("volume_bar");
    if (mute_button.className == "on") {
        button_image.src = "/static/images/volume_off.svg";
        mute_button.className = "off"
        audio.volume = 0;
        new_volume_value.value = 0;
        audio.pause();
        audio.currentTime = 0;

    } else {
        button_image.src = "/static/images/volume_on.svg";
        mute_button.className = "on"
        if (new_volume_value.value == 0) {
            new_volume_value.value = 50;
        }
        audio.volume = 0.5;
        audio.currentTime = 0;
        audio.play();
    }
};

function check_for_existing_elements(identifier) {
    remove_all_elements();
    let section = document.getElementById(identifier);
    if (section) {
        var buttons = section.querySelectorAll("*")
        for (let index = 0; index < buttons.length; index++) {
            buttons[index].style.display = "block";
        }
        return true
    }
    return false
};

function start_game() {
    remove_all_elements();
    document.getElementById("background_image").style.animationDuration = "2s";
    player = new Player("/static/images/cars/police/german_police_car.png");

    function runLevels() {
    let line = player.calculate_line();
    if (line == 1 || line == 6) {
        new Levels(line).easy_algorythm_1(player);
        console.log("module 1 bol vykresleny")
    } else if (line == 2 || line == 5) {
        new Levels(line).easy_algorythm_2(player);
        console.log("module 2 bol vykresleny")
    } else {
        new Levels(line).easy_algorythm_3(player);
        console.log("module 3 bol vykresleny")
    }
    level_maker = null;
    setTimeout(runLevels, 2000);
    }

    runLevels();
};

// document.addEventListener("keydown", (event) => {
//     if (event.key === "d") {
//         player.start_move_right();
//     }
//     else if (event.key === "a") {
//         player.start_move_left();
//     }
// });

// document.addEventListener("keyup", (event) => {
//     if (event.key === "d") {
//         player.stop_move_right();
//         player.reset_rotation();
//     }
//     else if (event.key === "a") {
//         player.stop_move_left();
//         player.reset_rotation();
//     }
// });