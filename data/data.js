function load_setting_vlues(){
    fetch('/data/settings.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById("movement_left").value = data.button_left.toUpperCase();
            document.getElementById("movement_right").value = data.button_right.toUpperCase();
            document.getElementById("volume_bar").value = data.volume;
        })
}

function set_setting_values(){
    fetch('/data/settings.json')
        .then(response => response.json())
        .then(data => {
            data.button_left = document.getElementById("movement_left").value;
            data.button_right = document.getElementById("movement_right").value;
            data.volume = document.getElementById("volume_bar").value;

            fetch('/data/settings.json', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
    });
    
}