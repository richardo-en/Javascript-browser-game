var canvas = document.getElementById("main_canvas");
var ctx = canvas.getContext("2d");
var canvas_screen = null;
var positions = null;

function return_to_main_menu(){
    let background_object = get_object("background");
    new Canvas_screens().clear_screen();
    background_object.startLoop();
    new Section().create_main_page();
    canvas.className = "not_touchable"
}

canvas.addEventListener('click', function(event) {
    canvas_screen = get_screen();
    positions = canvas_screen.get_positions();
    let mouseX = event.clientX - canvas.offsetLeft;
    let mouseY = event.clientY - canvas.offsetTop;

    if (canvas.className == "touchable") {
        for (let i = 0; i < positions.length; i++) {
            if (mouseX >= positions[i][0] && mouseX <= positions[i][2] &&
                mouseY >= positions[i][1] && mouseY <= positions[i][3]) {
                if (canvas_screen.get_type() == "lose") {
                    if (i == 0) {
                        return_to_main_menu();
                    }else if(i == 1){
                        alert("clicked reapet");
                    }
                }else if (canvas_screen.get_type() == "win") {
                    if (i == 0) {
                        alert("clicked next level");
                    }else if(i == 1){
                        return_to_main_menu();
                    }else if(i == 2){
                        alert("clicked reapet");
                    }
                }else if (canvas_screen.get_type() == "break") {
                    if (i == 0) {
                        alert("clicked continue");
                    }else if(i == 1){
                        return_to_main_menu();
                    }
                }
            }
        }
    }


});