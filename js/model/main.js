function calculate_new_positions(array) {
    var prev_width = array[2], prev_height = array[3], rotation = array[4] * Math.PI / 180, temporary_positions = [], positions_for_remove = [];
    var new_postions = [], middle_point_x = array[0] + (prev_width/2) , middle_point_y = array[1] + (prev_height/2);
    var lowest_x = null, heighest_x, lowest_y, heighest_y = false;
    var prev_positions = [  [-prev_width/2, -prev_height/2],
    [prev_width/2, -prev_height/2],
    [-prev_width/2, prev_height/2],
    [prev_width/2, prev_height/2]]
    
    for (let i = 0; i < prev_positions.length; i++) {
        let new_x_position = prev_positions[i][0] * Math.cos(rotation) - prev_positions[i][1] * Math.sin(rotation);
        let new_y_position = prev_positions[i][0] * Math.sin(rotation) + prev_positions[i][1] * Math.cos(rotation);
        if (lowest_x == null) {
            lowest_x = new_x_position;
            heighest_x = new_x_position;
            lowest_y = new_y_position;
            heighest_y = new_y_position;
        } else {
            if (new_x_position < lowest_x) {
                lowest_x = new_x_position;
            } else if (new_x_position > heighest_x) {
                heighest_x = new_x_position
            }

            if (new_y_position > lowest_y) {
                lowest_y = new_y_position;
            } else if (new_y_position < heighest_y) {
                heighest_y = new_y_position
            }
        }
        temporary_positions.push(array[0] + (prev_width/2) + new_x_position);
        temporary_positions.push(array[1] + (prev_height/2) + new_y_position);
        new_postions.push(temporary_positions);
        temporary_positions = []
    }

    positions_for_remove.push(lowest_x + middle_point_x);
    positions_for_remove.push(heighest_y + middle_point_y);
    positions_for_remove.push(heighest_x - lowest_x);
    positions_for_remove.push(lowest_y - heighest_y);
    new_postions.push(positions_for_remove);
    return new_postions;
}

function check_section(section_id) {
    var section = document.getElementById(section_id);
    if (!section) {
        section = document.createElement("section");
        section.id = section_id;
        document.getElementById("main_canvas").parentNode.insertBefore(section, canvas.nextSibling);
    }
    return section;
}

function draw_image(positon_top, position_left, section_identifier, image_path, image_identifier) {
    let section = check_section(section_identifier);
    let image = document.createElement("img");
    image.src = image_path;
    image.id = image_identifier;
    section.appendChild(this.draw_element_position(image, positon_top, position_left));
}

window.onload = function() {
    var scripts = [
      "/data/data.js",
      "/js/observer/observer.js",
      "/js/model/level_rewards.js",
      "/js/view/additionals.js",
      "/js/view/draw_cars.js",
      "/js/view/draw_levels.js",
      "/js/view/draw_canvas_screens.js",
      "/js/view/buttons.js",
      "/js/view/sections.js",
      "/js/controller/button_controllers.js",
      "/js/controller/canvas_buttons.js",
      "/js/model/run_game.js",
      "/js/model/player.js"
    ];
  
    scripts.forEach(function(script) {
      var scriptElement = document.createElement("script");
      scriptElement.src = script;
      document.head.appendChild(scriptElement);
    });
    setTimeout(function(){
        new Section().create_skins();
        new Section().create_rewards();
        new Section().create_setting();
        new Section().create_main_page();
        start_music();
    }, 100)
}