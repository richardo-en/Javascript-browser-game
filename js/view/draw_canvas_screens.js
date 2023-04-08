var canvas = document.getElementById("main_canvas");
var ctx = canvas.getContext("2d");
var screen = null;
var button_positions = null;

class Canvas_parent {
    constructor(position_x, position_y, width, height) {
        this.position_x = position_x
        this.position_y = position_y
        this.width = width
        this.height = height
        this.positions = [];
        this.button_height = 40;
    }

    draw_button(button_text) {
        ctx.beginPath();
        ctx.roundRect(this.position_x + 50, this.position_y + this.button_height, this.width - 100, this.button_height, [10]);
        ctx.fillStyle = "#8CF20F";
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        ctx.closePath();
        ctx.font = "20pt Kremlin Pro Web";
        ctx.fillStyle = "#000000";
        ctx.textAlign = "center";
        ctx.fillText(button_text, (this.position_x) + (this.width / 2), this.position_y + (1.7 * this.button_height), this.width);
        this.positions.push([this.position_x + 50, (this.position_y + this.button_height), this.position_x + this.width - 50, (this.position_y + (2 * this.button_height))]);
        this.position_y += 60;
    }

    draw_background() {
        ctx.beginPath();
        ctx.roundRect(this.position_x, this.position_y, this.width, this.height, [5]);
        ctx.strokeStyle = "#CFBA42";
        ctx.fillStyle = "#FAF1A2";
        ctx.lineWidth = 5;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    clear_screen() {
        ctx.clearRect(0, 0, 1000, 600);
    }

    get_positions() {
        return this.positions
    }

}

class Canvas_screens extends Canvas_parent {
    constructor() {
        super(((canvas.width) / 4), ((canvas.height) / 4), ((canvas.width) / 2), ((canvas.height) / 2));
        this.type = null;
    }

    losing_screen() {
        this.type = "lose"
        this.draw_background()
        this.draw_button("Main Menu")
        this.draw_button("Try again")
    }

    winning_screen() {
        this.type = "win"
        this.draw_background()
        this.draw_button("Next level")
        this.draw_button("Main Menu")
        this.draw_button("Repeat level")
    }

    break_screen(){
        this.type = "break"
        this.draw_background()
        this.draw_button("Continue")
        this.draw_button("Main Menu")
    }

    get_type() {
        return this.type
    }
}

function draw_game_screen(screen_type){
    let background = get_background_object()
    remove_all_elements();
    background.stopLoop();
    if (screen_type == "lose") {
        screen = new Canvas_screens();
        screen.losing_screen();
    }else if(screen_type == "win"){
        screen = new Canvas_screens();
        screen.winning_screen();
    }else if(screen_type == "break"){
        screen = new Canvas_screens();
        screen.break_screen();
    }
}

function get_screen(){
    return screen;
}