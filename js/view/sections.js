var canvas = document.getElementById("main_canvas");
var ctx = canvas.getContext("2d");
class Section {
    constructor() {
    }

    create_skins() {
        let identifier = "skin_view";
        let look_for_buttons = check_for_existing_elements(identifier);
        if (look_for_buttons == false) {
            new Button(80, 51, identifier, this.create_main_page).draw_button("Back");
            new Button(20, 30, identifier, check_skin).draw_input_skin_button("skin_1");
            new Button(55, 30, identifier, check_skin).draw_input_skin_button("skin_2");
            new Button(20, 80, identifier, check_skin).draw_input_skin_button("skin_3");
            new Button(55, 80, identifier, check_skin).draw_input_skin_button("skin_4");
            load_skins(0);
        }else{
            play_sound("/static/sounds/button_click.mp3");
        };
    }
    
    create_main_page() {
        let identifier = "main_menu_view";
        let look_for_buttons = check_for_existing_elements(identifier);
        if (look_for_buttons == false) {
            new Button(40, 30, identifier, start_game).draw_button('Play');
            new Button(60, 30, identifier, this.create_skins).draw_button('Skins');
            new Button(60, 70, identifier, this.create_rewards).draw_button('Rewards');
            new Button(40, 70, identifier, this.create_setting).draw_button('Options');
            new Button(20, 38.5, identifier).draw_image("/static/images/game_logo.webp");
            new Button(80, 50, identifier, draw_help_screen).draw_button('Help');
            new Button(80, 15, identifier, start_game_controller).draw_level_button('1');
            new Button(80, 21, identifier, start_game_controller).draw_level_button('2');
            new Button(80, 27, identifier, start_game_controller).draw_level_button('3');
            new Button(5, 100, identifier, start_game_controller).draw_coin_button();
            load_levels(1)
        }else{
            play_sound("/static/sounds/button_click.mp3");
        };
    }
    
    create_rewards() {
        let identifier = "rewards_view";
        let look_for_buttons = check_for_existing_elements(identifier);
        if (look_for_buttons == false) {
            new Button(80, 51, identifier, this.create_main_page).draw_button("Back");
            new Button(20, 30, identifier, check_for_rewards).draw_reward_buttons("played_games");
            new Button(40, 30, identifier, check_for_rewards).draw_reward_buttons("reached_level");
            new Button(60, 30, identifier, check_for_rewards).draw_reward_buttons("owned_cars"); 
        }else{
            play_sound("/static/sounds/button_click.mp3");
        };
        set_rewards_text();
    }
    
    create_setting() {
        let identifier = "settings_view";
        let look_for_buttons = check_for_existing_elements(identifier);
        if (look_for_buttons == false) {
            new Button(10, 15, identifier, this.test).draw_image("/static/images/movement_left_settings.webp");
            new Button(30, 15, identifier, this.test).draw_image("/static/images/movement_right_settings.webp");
            new Button(50, 15, identifier, switch_mute_image).draw_image("/static/images/volume_settings.webp");
            new Button(80, 51, identifier, save_settings_button).draw_button("Back");
            new Button(5, 103, identifier, switch_mute_image).draw_volume("/static/images/volume_on.svg", "volume");
            new Button(10, 60, identifier, this.test).draw_input_button("movement_left");
            new Button(30, 60, identifier, this.test).draw_input_button("movement_right");
            new Button(50, 50, identifier, set_volume).draw_volume_slider("volume_bar");
        }else{
            play_sound("/static/sounds/button_click.mp3");
        };
        load_setting_vlues();
    }
}