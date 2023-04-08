var canvas = document.getElementById("main_canvas");
var ctx = canvas.getContext("2d");

function check_section(section_id){
    var section = document.getElementById(section_id);
    if (!section) {
        section = document.createElement("section");
        section.id = section_id;
        canvas.parentNode.insertBefore(section, canvas.nextSibling);
    }
    return section;
}

function draw_image(positon_top, position_left , section_identifier , image_path , image_identifier){
    let section = check_section(section_identifier);
    let image = document.createElement("img");
    image.src = image_path;
    image.id = image_identifier;
    section.appendChild(this.draw_element_position(image, positon_top, position_left));
}


var movingImage = new Canvas_background(0.5 , "/static/images/infinite_road.png");
movingImage.startLoop();


function get_object(type){
    if (type == "background") {
        return movingImage;
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === "l") {
        draw_game_screen("lose");
    }else if (event.key === "w"){
        draw_game_screen("win");
    }else if (event.key === "p"){
        draw_game_screen("break");
    }
}, false);

new Section().create_skins();
new Section().create_rewards();
new Section().create_setting();
new Section().create_main_page();