function remove_buttons() {
    var sections = document.getElementsByTagName("section");
    for (let index = 0; index < sections.length; index++) {
        var buttons = sections[index].querySelectorAll("*")
        for (let index = 0; index < buttons.length; index++) {
            buttons[index].style.display = "none";   
        }
    }
}

function check_for_existing_elements(identifier) {
    let section = document.getElementById(identifier);

    if (section) {
        var buttons = section.querySelectorAll("*")
        for (let index = 0; index < buttons.length; index++) {
            buttons[index].style.display = "block";   
        }
        return true
    }
    return false
}

function calculate_canvas_position(x_percentage) {
    x_percentage = ((window.innerWidth - 1000) / 2) + (1000 * (x_percentage / 100)) - 100;
    x_percentage = "" + x_percentage + "px";
    return x_percentage;
}

function switch_mute_image(){
    var mute_button = document.getElementById("volume");
    if (mute_button.src == "http://127.0.0.1:5500/static/images/volume_on.svg"){
        mute_button.src = "http://127.0.0.1:5500/static/images/volume_off.svg";
    }else{
        mute_button.src = "http://127.0.0.1:5500/static/images/volume_on.svg";
    }
}

function check_section(section_id){
    var section = document.getElementById(section_id);
    if (!section) {
        section = document.createElement("section");
        section.id = section_id;
        canvas.parentNode.insertBefore(section, canvas.nextSibling);
    }
    return section;
}

function draw_element_position(object, positon_top, position_left){
    object.style.position = "absolute";
    object.style.left = calculate_canvas_position(position_left);
    object.style.top = positon_top = "" + (600 * (positon_top / 100)) + "px";
    return object;
}

exports = { remove_buttons, check_for_existing_elements, calculate_canvas_position, switch_mute_image , check_section }
