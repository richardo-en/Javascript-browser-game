var canvas = document.getElementById("main_canvas");
var ctx = canvas.getContext("2d");
class Section {
    constructor() {
    }

    create_skins() {
        let identifier = "skin_view";
        let look_for_buttons = check_for_existing_elements(identifier);
        if (look_for_buttons == false) {
            new Button(80, 51, identifier, this.create_main_page).draw_button("Späť");
            new Button(20, 30, identifier, this.test).draw_input_skin_button("skin_1");
            new Button(55, 30, identifier, this.test).draw_input_skin_button("skin_2");
            new Button(20, 80, identifier, this.test).draw_input_skin_button("skin_3");
            new Button(55, 80, identifier, this.test).draw_input_skin_button("skin_4");
        };
    }
    
    create_main_page() {
        let identifier = "main_menu_view";
        let look_for_buttons = check_for_existing_elements(identifier);
        if (look_for_buttons == false) {
            new Button(40, 30, identifier, start_game).draw_button('Hrať');
            new Button(60, 30, identifier, this.create_skins).draw_button('Skiny');
            new Button(60, 70, identifier, this.create_rewards).draw_button('Odmeny');
            new Button(40, 70, identifier, this.create_setting).draw_button('Nastavenia');
            new Button(20, 38.5, identifier).draw_image("/static/images/game_logo.png");
            new Button(80, 50, identifier, draw_help_screen).draw_button('Help');
        };
    }
    
    create_rewards() {
        let identifier = "rewards_view";
        let look_for_buttons = check_for_existing_elements(identifier);
        if (look_for_buttons == false) {
            new Button(80, 51, identifier, this.create_main_page).draw_button("Späť");
            new Button(20, 30, identifier, this.test).draw_reward_buttons();
            new Button(40, 30, identifier, this.test).draw_reward_buttons();
            new Button(60, 30, identifier, this.test).draw_reward_buttons();
        };
    }
    
    create_setting() {
        let identifier = "settings_view";
        let look_for_buttons = check_for_existing_elements(identifier);
        if (look_for_buttons == false) {
            new Button(10, 15, identifier, this.test).draw_image("/static/images/movement_left_settings.png");
            new Button(30, 15, identifier, this.test).draw_image("/static/images/movement_right_settings.png");
            new Button(50, 15, identifier, this.test).draw_image("/static/images/volume_settings.png");
            new Button(80, 51, identifier, this.create_main_page).draw_button("Späť");
            new Button(5, 103, identifier, switch_mute_image).draw_volume("/static/images/volume_on.svg", "volume");
            new Button(10, 60, identifier, this.test).draw_input_button("movement_left");
            new Button(30, 60, identifier, this.test).draw_input_button("movement_right");
            new Button(50, 50, identifier, set_volume).draw_volume_slider("volume_bar");
            load_setting_vlues();
        };
    }
    
    test() {
        alert("Test");
    }
}