var canvas = document.getElementById("main_canvas");
var ctx = canvas.getContext("2d");
var canvas_screen = null;
var positions = null;

canvas.addEventListener('click', function(event) {
    canvas_screen = get_screen();
    positions = canvas_screen.get_positions();
    let mouseX = event.clientX - canvas.offsetLeft;
    let mouseY = event.clientY - canvas.offsetTop;

    for (let i = 0; i < positions.length; i++) {
        if (mouseX >= positions[i][0] && mouseX <= positions[i][2] &&
            mouseY >= positions[i][1] && mouseY <= positions[i][3]) {
            if (canvas_screen.get_type() == "lose") {
                if (i == 0) {
                    new Canvas_screens().clear_screen();
                    get_background_object().startLoop();
                    new Section().create_main_page();
                    positions = null;
                }else if(i == 1){
                    alert("clicked reapet");
                }
            }else if (canvas_screen.get_type() == "win") {
                if (i == 0) {
                    alert("clicked next level");
                }else if(i == 1){
                    new Canvas_screens().clear_screen();
                    get_background_object().startLoop();
                    new Section().create_main_page();
                    positions = null;
                }else if(i == 2){
                    alert("clicked reapet");
                }
            }else if (canvas_screen.get_type() == "break") {
                if (i == 0) {
                    alert("clicked continue");
                }else if(i == 1){
                    new Canvas_screens().clear_screen();
                    get_background_object().startLoop();
                    new Section().create_main_page();
                    positions = null;
                }
            }
        }
    }

});