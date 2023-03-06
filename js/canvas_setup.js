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

function background_animation() {
    y_pos += 0.5;
    if (y_pos > canvas.height) {
        y_pos = 0;
    }
    ctx.drawImage(backgroundImage, 0, y_pos - canvas.height, canvas.width, canvas.height);
    ctx.drawImage(backgroundImage, 0, y_pos, canvas.width, canvas.height);
    requestAnimationFrame(background_animation);
}
background_animation();



//Creating main page
function create_main_page() {
    remove_buttons();
    let class_name = "main_menu_buttons";
    let look_for_buttons = check_for_existing_elements(class_name);
    if (look_for_buttons == false) {
        console.log("buttons were created")
        draw_button("Hrať", 60, 30, test, class_name);
        draw_button("Skiny", 80, 30, test, class_name);
        draw_button("Odmeny", 80, 70, test, class_name);
        draw_button("Nastavenia", 60, 70 , create_setting , class_name);
        return
    }
    console.log("buttons were set to block")

}


function create_setting(){
    remove_buttons();
    let class_name = "settings_buttons";
    let look_for_buttons = check_for_existing_elements(class_name);
    if (look_for_buttons == false) {
        console.log("buttons were created")
        draw_button("Pohyb vľavo", 20, 30, test, class_name);
        draw_button("Pohyb vpravo", 40, 30, test, class_name);
        draw_button("Zvuk", 60, 30, test, class_name);
        draw_button("Mute", 80, 30, test, class_name);
        return
    }
    console.log("buttons were set to block")
}

function test() {
    alert("testtttt");
}

create_main_page()