var canvas = document.getElementById("main_canvas");
var ctx = canvas.getContext("2d");
var canvas_screen = null;
var positions = null;

function return_to_main_menu() {
    new Canvas_screens().clear_screen();
    new Section().create_main_page();
    canvas.className = "not_touchable"
    document.getElementById("background_image").style.animation = "moveBackground 4s linear infinite"
    start_music();
    reset();
}

function next_level() {
    var buttons = document.getElementsByClassName("lvl_button"), index;

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id != "coin") {            
            if (buttons[i].id === "selected") {
                index = (i+1)            
                buttons[i].removeAttribute("id");
            } 
            buttons[i].removeAttribute("id");
        }
    }
    buttons[index].id = "selected"
    start_game();
}

function continue_game(){
    play_sound("/static/sounds/button_click.mp3");
    ctx.clearRect(0,0,canvas.clientWidth, canvas.clientHeight);
    document.getElementById("car_sound").play();
    resume_all_elements();
}

canvas.addEventListener('click', function (event) {
    canvas_screen = get_screen();
    let mouseX = event.clientX - canvas.offsetLeft;
    let mouseY = event.clientY - canvas.offsetTop;

    if (canvas.className == "touchable") {
        positions = canvas_screen.get_positions();
        for (let i = 0; i < positions.length; i++) {
            if (mouseX >= positions[i][0] && mouseX <= positions[i][2] &&
                mouseY >= positions[i][1] && mouseY <= positions[i][3]) {
                if (canvas_screen.get_type() == "lose") {
                    if (i == 0) {
                        return_to_main_menu();
                    } else if (i == 1) {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        reset();
                        start_game();
                    }
                } else if (canvas_screen.get_type() == "win") {
                    if (i == 0) {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        next_level();
                    } else if (i == 1) {
                        return_to_main_menu();
                    } else if (i == 2) {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        reset();
                        start_game();
                    }
                } else if (canvas_screen.get_type() == "break") {
                    if (i == 0) {
                        continue_game();
                    } else if (i == 1) {
                        return_to_main_menu();
                    }
                }
            }
        }
    } else if (canvas.className == "help_screen") {
        if (mouseX >= (canvas.width / 2) - 120 && mouseX <= (canvas.width / 2) + 120 &&
            mouseY >= canvas.height - 100 && mouseY <= canvas.height - 55) {
            new Canvas_screens().clear_screen()
            canvas.className = "not_touchable";
            return_to_main_menu();
        }
    }
});