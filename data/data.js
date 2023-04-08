
function load_setting_vlues(){
    fetch('/data/settings.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById("movement_left").value = data.button_left.toUpperCase();
            document.getElementById("movement_right").value = data.button_right.toUpperCase();
            document.getElementById("volume_bar").value = data.volume;
        })
}

// function set_setting_values() {
    // fetch('/data/settings.json')
    //     .then(response => response.json())
    //     .then(data => {
    //         data.button_left = document.getElementById("movement_left").value;
    //         data.button_right = document.getElementById("movement_right").value;
    //         data.volume = document.getElementById("volume_bar").value;

    //         console.log(fetch('/data/settings.json', {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         }))
    // });

    // var xhttp = new XMLHttpRequest();

    // xhttp.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         console.log(this.responseText);
    //     }
    // };
    // xhttp.open("GET", "data/test.php?data=" + JSON.stringify(data), true)
    // xhttp.open("POST", "/data/test.php", true);
    // // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // var data = {
    //     button_left: document.getElementById("movement_left").value.toUpperCase(),
    //     button_right: document.getElementById("movement_right").value.toUpperCase(),
    //     volume: document.getElementById("volume_bar").value
    // };

    // xhttp.send("data=" + JSON.stringify(data));
// }

// console.log(load_setting_vlues());