var canvas = document.getElementById("main_canvas");
var ctx = canvas.getContext("2d");

function remove_all_elements(){
    var sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        var elements = section.querySelectorAll('*');
        elements.forEach((element) => {
            element.style.display = 'none';
        });
    });
}

function switch_mute_image(){
    let button_image = document.getElementById("volume");
    let background_music = document.getElementById("main_music");
    if (!background_music) {
        background_music = document.createElement("src");
        background_music.id = "main_music";
        //background_music.src = ;
    }
    let mute_button = document.getElementById("button_container");
    if (mute_button.className == "on"){
        background_music.pause();
        background_music.currentTime = 0;
        button_image.src = "/static/images/volume_off.svg";
        mute_button.className = "off"
    }else{
        background_music.play();
        button_image.src = "/static/images/volume_on.svg";
        mute_button.className = "on"
    }
}

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
}

function start_game(){
    remove_all_elements();
}