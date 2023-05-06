//Create new button
class Button_parent{
    constructor(position_from_top, position_from_left, section_id,  button_function){
        this.positon_top = position_from_top;
        this.position_left = position_from_left;
        this.function_to_execute = button_function;
        this.section_identifier = section_id;
    }

    calculate_canvas_position(percentage) {
        percentage = ((window.innerWidth - 1000) / 2) + (1000 * (percentage / 100)) - 100;
        percentage = "" + percentage + "px";
        return percentage;
    }

    set_element_position(object, positon_top, position_left){
        object.style.position = "absolute";
        object.style.left = this.calculate_canvas_position(position_left);
        object.style.top = "" + (600 * (positon_top / 100)) + "px";
        return object
    }

    check_section(){
        var section = document.getElementById(this.section_identifier);
        if (!section) {
            section = document.createElement("section");
            section.id = this.section_identifier;
            canvas.parentNode.insertBefore(section, canvas.nextSibling);
        }
        return section;
    }
}

class Button extends Button_parent{
    constructor(position_from_top, position_from_left, section_id,  button_function){
        super(position_from_top, position_from_left, section_id,  button_function);
    }

    draw_button(input_text){
        let new_button = document.createElement("button");
        let section = this.check_section();
        new_button.innerHTML = input_text;
        new_button.className = "btn";
        section.appendChild(this.set_element_position(new_button, this.positon_top, this.position_left));
        new_button.addEventListener("click" , this.function_to_execute);
    }
    
    draw_level_button(level){
        let new_button = document.createElement("button");
        let section = this.check_section();
        new_button.innerHTML = level;
        new_button.className = "lvl_button";
        section.appendChild(this.set_element_position(new_button, this.positon_top, this.position_left));
        new_button.addEventListener("click" , this.function_to_execute);
    }

    draw_image(image_source){
        var section = this.check_section();
        var image = document.createElement("img");
        image.src = image_source;
        section.appendChild(this.set_element_position(image, this.positon_top, this.position_left))
    }

    draw_volume(image_source, image_id){
        var section = this.check_section();
        var new_button = document.createElement("button");
        new_button.id = "button_container";
        new_button.className = "on";
        new_button.addEventListener("click" , this.function_to_execute);
        var image = document.createElement("img");
        new_button.appendChild(image);
        image.src = image_source;
        image.id = image_id;
        section.appendChild(this.set_element_position(new_button, this.positon_top, this.position_left))
    }
    
    draw_input_button(button_id){
        var section = document.getElementById(this.section_identifier);
        var input_button = document.createElement("input");
        input_button.id = button_id;
        input_button.className = "input_key"
        //controller
        input_button.addEventListener("click" , function(){
            input_button.focus();
        });
        input_button.addEventListener("keydown", function(event) {
            input_button.value = (event.key).toUpperCase();
            // set_setting_values();
            input_button.blur();
        });
        //
        section.appendChild(this.set_element_position(input_button, this.positon_top, this.position_left));
    }
    
    draw_volume_slider(input_identifier){
        var section = this.check_section();
        var input_button = document.createElement("input");
        input_button.type = "range";
        input_button.id = input_identifier;
        input_button.addEventListener("input", this.function_to_execute)
        section.appendChild(this.set_element_position(input_button, this.positon_top, this.position_left));
    }
    
    draw_input_skin_button(button_identifier){ 
        var section = this.check_section();
        var skin_button = document.createElement("button");
        skin_button.id = button_identifier;
        skin_button.className = "skin_button";
        //input_button.addEventListener("input", this.function_to_execute)
        section.appendChild(this.set_element_position(skin_button, this.positon_top, this.position_left));
    }

    draw_reward_buttons(identifier){
        var section = this.check_section();
        var reward_button = document.createElement("button");
        reward_button.className = "reward_button";
        reward_button.id = identifier;
        section.appendChild(this.set_element_position(reward_button, this.positon_top, this.position_left));
        reward_button.addEventListener("click" , this.function_to_execute);
    }
};