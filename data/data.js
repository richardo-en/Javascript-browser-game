
function load_setting_vlues() {
    let mute_button = document.getElementById("button_container");
    let audio = document.getElementById("volume_bar");
    fetch('/data/settings.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById("movement_left").value = data.button_left.toUpperCase();
            document.getElementById("movement_right").value = data.button_right.toUpperCase();
            audio.value = data.volume;
            if (data.volume == 0 && mute_button.className == "on") {
                switch_mute_image()
                audio.currentTime = 0;
            }
            document.getElementById("my_audio").volume = data.volume / 100;
        })
}

function set_settings_values() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            
            // modify the data as needed
            let audio = document.getElementById("volume_bar");
            let movement_left = document.getElementById("movement_left").value.toUpperCase();
            let movement_right = document.getElementById("movement_right").value.toUpperCase();
            let volume = audio.volume;
            let newData = Object.entries(data).map(([key, value]) => ({ [key]: value }));
            newData.push({ button_left: movement_left, button_right: movement_right, volume: volume });

            // write the modified data back to the file using AJAX
            const xhr2 = new XMLHttpRequest();
            xhr2.onreadystatechange = function () {
                if (xhr2.readyState === 4 && xhr2.status === 200) {
                    console.log("Data saved successfully");
                }
            };
            xhr2.open("POST", "data/save.php"); // replace "save.php" with the URL of your server-side script that handles saving the data
            xhr2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr2.send(JSON.stringify(newData));
        }
    };
    xhr.open("GET", "data/settings.json"); // replace "data.json" with the name of your JSON file
    xhr.send();
}