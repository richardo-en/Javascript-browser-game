//Getting elements from document
var canvas = document.getElementById("main_canvas");
var y_pos = 0;

//Setting up canvas
var ctx = canvas.getContext("2d");

var backgroundImage = new Image();
backgroundImage.src = "/static/images/infinite_road.png";

// Make sure the image is loaded first otherwise nothing will draw.
backgroundImage.onload = function () {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
};

//Creating main page
function create_main_page() {
    remove_buttons();
    let identifier = "main_menu_view";
    let look_for_buttons = check_for_existing_elements(identifier);
    if (look_for_buttons == false) {
        background_animation();
        draw_button("Hrať", 50, 30, test, identifier);
        draw_button("Skiny", 70, 30, create_skins, identifier);
        draw_button("Odmeny", 70, 70, create_rewards, identifier);
        draw_button("Nastavenia", 50, 70, create_setting, identifier);
        draw_image(20 , 38.5 , identifier , "/static/images/game_logo.png");
    };
}


function create_setting() {
    remove_buttons();
    let identifier = "settings_view";
    let look_for_buttons = check_for_existing_elements(identifier);
    if (look_for_buttons == false) {
        draw_image(10 , 15 , identifier , "/static/images/movement_left_settings.png");
        draw_image(30 , 15 , identifier , "/static/images/movement_right_settings.png");
        draw_image(50 , 15 , identifier , "/static/images/volume_settings.png");
        draw_button("Späť", 80, 51, create_main_page, identifier);
        draw_image_button(5 , 103 , identifier , "/static/images/volume_on.svg" , "volume" , switch_mute_image);
        draw_input_button(10 , 60 , identifier , "input_key" );
        draw_input_button(30 , 60 , identifier , "input_key" );
        draw_volume_slider(50 , 50 , identifier , "input_key" );
    };
}

function create_skins() {
    remove_buttons();
    let identifier = "skins_view";
    let look_for_buttons = check_for_existing_elements(identifier);
    if (look_for_buttons == false) {

        draw_button("Späť", 80, 51, create_main_page, identifier);
        draw_input_skin_button(20, 30, identifier , "skin_1");
        draw_input_skin_button(55, 30, identifier , "skin_2");
        draw_input_skin_button(20, 80, identifier , "skin_3");
        draw_input_skin_button(55, 80, identifier , "skin_4");
    };
}

function create_rewards() {
    remove_buttons();
    let identifier = "rewards_view";
    let look_for_buttons = check_for_existing_elements(identifier);
    if (look_for_buttons == false) {

        draw_button("Späť", 80, 51, create_main_page, identifier);
        draw_reward_buttons(20, 30, identifier);
        draw_reward_buttons(40, 30, identifier);
        draw_reward_buttons(60, 30, identifier);
    };
}

function test(){
    alert("testiiiiing!!!");
}

create_main_page()