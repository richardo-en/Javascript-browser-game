function start_music() {
    audio = document.getElementById("my_audio");
    // audio.play();
    audio.addEventListener("ended", function () {
        audio.currentTime = 0;
        audio.play();
    });
}

function check_skin(event) {
    var price = parseInt(event.target.textContent);
    let buttons = document.querySelectorAll(".skin_button");
    var index = Array.prototype.indexOf.call(buttons, event.target);
    if (price) {
        var current_amount = getCookie("coin");
        if (current_amount >= price) {
            increase_coins(-price);
            var skins = JSON.parse(getCookie('skins'));
            skins[index].unlocked = true;
            upload_to_cokiee("skins", skins);
            buttons[index].textContent = "";
            setTimeout(function () { load_skins(index); }, 0);;
        }
    } else {
        load_skins(index);
    }
}

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



function save_settings_button() {
    set_settings_values();
    new Section().create_main_page();
}

function draw_help_screen() {
    document.getElementById("background_image").style.animation = "none"
    remove_all_elements();
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

document.addEventListener("keydown", (event) => {
    if (game_run()) {
        if (event.key.toUpperCase() === document.getElementById("movement_right").value) {
            player.start_move_right();
        }
        else if (event.key.toUpperCase() === document.getElementById("movement_left").value) {
            player.start_move_left();
        }
    }
});

document.addEventListener("keyup", (event) => {
    if (game_run()) {
        if (event.key.toUpperCase() === document.getElementById("movement_right").value) {
            player.stop_move_right();
            player.reset_rotation();
        }
        else if (event.key.toUpperCase() === document.getElementById("movement_left").value) {
            player.stop_move_left();
            player.reset_rotation();
        }
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'p' && game_run()) {
        stop_all_elements();
        setTimeout(function () {
            draw_game_screen("break");
        }, 100)
    }
});

function check_for_rewards(event) {
    var element_id = event.target.id;
    var ids = ["played_games", "reached_level", "owned_cars"]
    const box = document.createElement('div');
    box.className = "message";
    var quests = JSON.parse(getCookie('quests'));

    for (let i = 0; i < ids.length; i++) {
        if (element_id === ids[i]) {
            if (quests[i].current_status >= quests[i].reward_goal) {
                box.textContent = 'Coins were added!';
                box.style.background = "green";
                increase_coins(quests[i].reward);
                increase_reward(i)
            } else {
                box.textContent = 'Coins weren\'t added! Your current count for task number ';
                box.style.background = "red"
            }
            document.body.appendChild(box);
            box.style.opacity = '1';
            setTimeout(() => {
                box.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(box);
                }, 500);
            }, 3000);
            break;
        }
    }
}

function start_game_controller(event) {
    var unlocked_levels = JSON.parse(getCookie("levels"));
    var curr_level = parseInt(unlocked_levels[0].current_level, 10)
    var level_id = parseInt(event.target.textContent);
    if (curr_level >= level_id) {
        load_levels(level_id);
    } else {
        load_levels(0);
    }
}
