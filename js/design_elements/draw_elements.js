//Create new button
function draw_button(input_text, positon_top, position_left, function_to_execute , button_class) {
    let new_button = document.createElement("button");
    new_button.innerHTML = input_text;
    new_button.classList.add("btn" , button_class);    
    if (window.innerWidth > 1000) {
    }
    position_left = ((window.innerWidth-1000) / 2) + (1000*(position_left/100)) - 100
    positon_top = "" + (600 * (positon_top/100) )+ "px"
    position_left = "" + position_left + "px"
    
    new_button.style.top = positon_top;
    new_button.style.left = position_left;
    
    canvas.parentNode.insertBefore(new_button, canvas.nextSibling);
    new_button.addEventListener("click" , function_to_execute);
}

function remove_buttons() {
    var buttons = document.getElementsByClassName("btn");
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].style.display = "none";
        console.log(buttons[index].innerHTML)
    }
}

function check_for_existing_elements(class_name){
    var existing_buttons = document.getElementsByClassName(class_name);
    if (existing_buttons.length > 0) {
        for (let index = 0; index < array.length; index++) {
            existing_buttons[index].style.display = "block";
        }
        return true
    }
    return false
}
exports = { draw_button , remove_buttons , check_for_existing_elements}