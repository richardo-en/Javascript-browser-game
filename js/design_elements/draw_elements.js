//Create new button
class Button_parent{
    constructor(position_from_top, position_from_left, section_id,  button_function){
        this.positon_top = position_from_top;
        this.position_left = position_from_left;
        this.function_to_execute = button_function;
        this.section_identifier = section_id;
    }
}



//add to one class
function draw_button(input_text, positon_top, position_left, function_to_execute , section_identifier) {
    let new_button = document.createElement("button");
    let section = check_section(section_identifier);
    new_button.innerHTML = input_text;
    new_button.className = "btn";    
    section.appendChild(draw_element_position(new_button, positon_top, position_left));
    new_button.addEventListener("click" , function_to_execute);
}

function background_animation() {
    y_pos += 0.5;
    if (y_pos > canvas.height) {
        y_pos = 0;
    }
    ctx.drawImage(backgroundImage, 0, y_pos - canvas.height, canvas.width, canvas.height);
    ctx.drawImage(backgroundImage, 0, y_pos, canvas.width, canvas.height);
    requestAnimationFrame(background_animation);
}

function draw_image(positon_top, position_left , section_identifier , image_path , image_identifier){
    let section = check_section(section_identifier);
    let image = document.createElement("img");
    image.src = image_path;
    image.id = image_identifier;
    section.appendChild(draw_element_position(image, positon_top, position_left));
}

//add to one class
function draw_image_button(positon_top, position_left , section_identifier , image_path , image_identifier , button_function){
    var section = check_section(section_identifier);
    var button_container = document.createElement("button");
    button_container.id = "button_container";
    button_container.addEventListener("click" , button_function);
    var image = document.createElement("img");
    button_container.appendChild(image);
    image.src = image_path;
    image.id = image_identifier;
    section.appendChild(draw_element_position(button_container, positon_top, position_left))
}

//add to one class
function draw_input_button(positon_top, position_left , section_identifier , input_class){
    var section = document.getElementById(section_identifier);
    var input_button = document.createElement("input");
    input_button.className = input_class;
    input_button.addEventListener("click" , function(){
        input_button.focus();
    });
    input_button.addEventListener("keydown", function(event) {
        console.log("Key pressed:", event.key);
        input_button.value = (event.key).toUpperCase();
        input_button.blur();
      });
    section.appendChild(draw_element_position(input_button, positon_top, position_left));

}

//add to one class
function draw_volume_slider(positon_top, position_left, section_identifier, input_identifier){
    var section = check_section(section_identifier);
    var input_button = document.createElement("input");
    input_button.type = "range";
    input_button.id = input_identifier;
    section.appendChild(draw_element_position(input_button, positon_top, position_left));
}

//add to one class
function draw_input_skin_button(positon_top, position_left, section_identifier, button_identifier){ 
    var section = check_section(section_identifier);
    var skin_button = document.createElement("button");
    skin_button.id = button_identifier;
    skin_button.className = "skin_button";

    //additional functions
    section.appendChild(draw_element_position(skin_button, positon_top, position_left));
}

//add to one class
function draw_reward_buttons(positon_top, position_left, section_identifier){
    var section = check_section(section_identifier);
    var skin_button = document.createElement("button");
    skin_button.className = "reward_button";


    section.appendChild(draw_element_position(skin_button, positon_top, position_left));
}
exports = { draw_button , background_animation , draw_image , draw_input_button}