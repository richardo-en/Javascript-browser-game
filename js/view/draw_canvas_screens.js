var screen = null;
var canvas = document.getElementById("main_canvas");
var canvas = document.getElementById("main_canvas");
var ctx = canvas.getContext("2d");

// var button_positions = null;

class Canvas_parent {
    constructor() {
        this.positions = [];
        this.button_height = 40;
        this.canvas_controller = document.getElementById("main_canvas");
        this.ctx = this.canvas_controller.getContext("2d");
        this.position_x = this.canvas_controller.width / 4
        this.width = this.canvas_controller.width / 2
        this.position_y = this.canvas_controller.height / 4
        this.height = this.canvas_controller.height / 2
    }

    draw_button(button_text) {
        this.ctx.beginPath();
        this.ctx.roundRect(this.position_x + 50, this.position_y + this.button_height, this.width - 100, this.button_height, [10]);
        this.ctx.fillStyle = "#FAF1A2";
        this.ctx.fill();
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "#000000";
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.font = "20pt Kremlin Pro Web";
        this.ctx.fillStyle = "#000000";
        this.ctx.textAlign = "center";
        this.ctx.fillText(button_text, (this.position_x) + (this.width / 2), this.position_y + (1.7 * this.button_height), this.width);
        this.positions.push([this.position_x + 50, (this.position_y + this.button_height), this.position_x + this.width - 50, (this.position_y + (2 * this.button_height))]);
        this.position_y += 60;
    }
    
    draw_button_with_custom_positions(button_text, xpos, ypos, width, height){
        this.ctx.beginPath();
        this.ctx.roundRect(xpos, ypos, width, height, [15]);
        this.ctx.fillStyle = "#FAF1A2";
        this.ctx.fill();
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = "#202020";
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.font = "20pt Kremlin Pro Web";
        this.ctx.fillStyle = "#202020";
        this.ctx.textAlign = "center";
        this.ctx.fillText(button_text, xpos + width/2, ypos + height/1.5, width);
    }



    draw_background(image) {
        this.ctx.beginPath();
        this.ctx.roundRect(this.position_x, this.position_y, this.width, this.height, [5]);
        this.ctx.strokeStyle = "#CFBA42";
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.lineWidth = 5;
        this.ctx.fill();
        this.ctx.drawImage(image , this.position_x , this.position_y + (this.height/3), this.width , this.height - (this.height/3));
        this.ctx.stroke();
        this.ctx.closePath();
    }
    
    draw_canvas_title(image){
        let x_pos = ((this.width - image.width)/2) +this.position_x; 
        this.ctx.drawImage(image, x_pos, this.position_y + 20);
        this.position_y += image.height;
    }

    clear_screen() {
        this.ctx.clearRect(0, 0, 1000, 600);
    }

    get_positions() {
        return this.positions
    }

}

class Canvas_screens extends Canvas_parent {
    constructor() {
        super();
        this.type = null;
        this.image = new Image();
        this.background_image = new Image();
        this.background_image.src = "/static/images/screen_background.jpg";
    }
    
    losing_screen() {
        this.canvas_controller.className = "touchable"
        this.type = "lose"
        this.image.src = "/static/images/lose_screen_image.png";
        this.background_image.addEventListener("load" , () => {
            this.draw_background(this.background_image);
        })
        this.image.addEventListener('load' , () => {
            this.draw_canvas_title(this.image);
            this.draw_button("Main Menu")
            this.draw_button("Try again")
        });
    }

    winning_screen() {
        this.canvas_controller.className = "touchable"
        this.type = "win";
        this.image.src = "/static/images/win_screen_image.png";
        this.background_image.addEventListener("load" , () => {
            this.draw_background(this.background_image);
        })
        this.image.addEventListener('load' , () => {
            this.draw_canvas_title(this.image)
            this.draw_button("Next level")
            this.draw_button("Main Menu")
            this.draw_button("Repeat level")
        });
    }

    break_screen(){
        this.canvas_controller.className = "touchable"
        this.type = "break"
        this.image.src = "/static/images/pause_screen_image.png";
        this.background_image.addEventListener("load" , () => {
            this.draw_background(this.background_image);
        })
        this.image.addEventListener('load' , () => {
            this.draw_canvas_title(this.image);
            this.draw_button("Continue")
            this.draw_button("Main Menu")
        });
    }

    help_screen(){
        canvas.className = "help_screen";
        let x_position = 100;
        let y_position = 100;
        let image_list = [new Image(), new Image(), new Image(), new Image()];

        image_list[0].src = "/static/images/movement_left_settings.png"
        image_list[1].src = "/static/images/movement_right_settings.png"
        image_list[2].src = "/static/images/Keyboard_left.png"
        image_list[3].src = "/static/images/Keyboard_right.png"

        image_list[3].addEventListener("load" , () => {
            this.clear_screen()
            this.ctx.beginPath();
            this.ctx.roundRect(20, 20, canvas.width - 40, canvas.height - 40 , [25]);
            this.ctx.fillStyle = "#596a85";
            this.ctx.fill();
            this.draw_button_with_custom_positions("Back to main menu", (canvas.width/2) - 120, canvas.height - 100, 240, 45);
            for (let i = 0; i < 2; i++) {
                ctx.drawImage(image_list[i] , x_position , y_position, image_list[i].width, image_list[i].height);
                ctx.drawImage(image_list[i+2] , x_position + 50 + image_list[i].width , y_position , image_list[i].height , image_list[i].height);
                y_position += image_list[i].height + 20;
            }
            this.ctx.closePath();
            
        })
    }

    get_type() {
        return this.type
    }
}

function draw_game_screen(screen_type){
    let background = get_object("background")
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