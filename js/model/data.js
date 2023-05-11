var quests = [
  {
    "reward": 20,
    "current_status": 0,
    "reward_goal": 10
  },
  {
    "reward": 50,
    "current_status": 0,
    "reward_goal": 1
  },
  {
    "reward": 20,
    "current_status": 0,
    "reward_goal": 1
  }
]

var skins = [{
  "link" : ["german_police_car.png"],
  "unlocked" : true,
  "cost" : 0
},
{
  "link" : ["police_car.png"],
  "unlocked" : false,
  "cost" : 50
},
{
  "link" : ["police_car_black.png"],
  "unlocked" : false,
  "cost" : 100
},
{
  "link" : ["police-car-siren-blue.png" , "police-car-siren-red.png"],
  "unlocked" : false,
  "cost" : 100
}
]

var basic_settings = ['A', 'D', 50];
var coin = 10;
var levels = [{  "unlocked_level": 1,  "current_level": 1}];

function load_levels(index) {
  var unlocked_levels = JSON.parse(getCookie("levels"));
  var level_buttons = document.getElementsByClassName("lvl_button");
  var unlocked_level = parseInt(unlocked_levels[0].unlocked_level,10)
  for (let i = 0; i < level_buttons.length; i++) {
    if (level_buttons[i].id != "coin") {
      if (unlocked_level - 1 >= i) {
        level_buttons[i].className = "lvl_button unlocked";
        level_buttons[i].removeAttribute("id");
        if (i == index-1) {
          level_buttons[i].className = "lvl_button";
          level_buttons[i].id = "selected";
        }
      } else {
        level_buttons[i].className = "lvl_button locked";
        level_buttons[i].removeAttribute("id");
      }
    }
  }
}

function get_volume(){
  var parsed_data = JSON.parse(getCookie('basic_settings'));
  return parsed_data[2];
}

function upload_to_cookie_simple_form(name, object){
  var expiration_date = new Date();
  expiration_date.setFullYear(expiration_date.getFullYear() + 1);
  document.cookie = name + "=" + JSON.stringify(object) + "; expires=" + expiration_date.toUTCString() + "; path=/";

}

function checkAndSaveCookies() {
  var expiration_date = new Date();
  expiration_date.setFullYear(expiration_date.getFullYear() + 1);

  if (!getCookie('quests')) {
    document.cookie = "quests=" + JSON.stringify(quests) + "; expires=" + expiration_date.toUTCString() + "; path=/";
  }

  if (!getCookie('basic_settings')) {
    document.cookie = "basic_settings=" + JSON.stringify(basic_settings) + "; expires=" + expiration_date.toUTCString() + "; path=/";
  }

  if (!getCookie('coin')) {
    document.cookie = "coin=" + coin + "; expires=" + expiration_date.toUTCString() + "; path=/";
  }

  if (!getCookie('levels')) {
    document.cookie = "levels=" + JSON.stringify(levels) + "; expires=" + expiration_date.toUTCString() + "; path=/";
  }

  if (!getCookie('skins')) {
    document.cookie = "skins=" + JSON.stringify(skins) + "; expires=" + expiration_date.toUTCString() + "; path=/";
  }
}

function load_skins(index){
  var buttons = document.getElementsByClassName("skin_button");
  var parsed_data = JSON.parse(getCookie('skins'));
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.add("unlocked");
    buttons[i].removeAttribute("id");
    if (parsed_data[i].unlocked == false) {
      buttons[i].textContent = parsed_data[i].cost + " C"
    }
    if (i == index) {
      buttons[i].id = "selected_skin"
    }
  }
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) {
    return parts.pop().split(";").shift();
  }
}

function upload_to_cokiee(name, object) {
  var expiration_date = new Date();
  expiration_date.setFullYear(expiration_date.getFullYear() + 1);
  document.cookie = name + "=" + JSON.stringify(object) + "; expires=" + expiration_date.toUTCString() + "; path=/";
}


function load_setting_vlues() {
  var parsed_data = JSON.parse(getCookie('basic_settings'));

  document.getElementById("movement_left").value = parsed_data[0];
  let mute_button = document.getElementById("button_container");
  let audio = document.getElementById("volume_bar");
  document.getElementById("movement_right").value = parsed_data[1];
  audio.value = parsed_data[2];
  if (parsed_data[2] == 0 && mute_button.className == "on") {
    switch_mute_image();
    audio.currentTime = 0;
  }
  document.getElementById("my_audio").volume = parsed_data[2] / 100;
};

function set_settings_values() {
  basic_settings[0] = document.getElementById("movement_left").value;
  basic_settings[1] = document.getElementById("movement_right").value;
  basic_settings[2] = document.getElementById("volume_bar").value;
  upload_to_cokiee("basic_settings", basic_settings);
};

function set_rewards_text() {
  var ids = ["played_games", "reached_level", "owned_cars"];
  var quests = JSON.parse(getCookie('quests'));
  for (let i = 0; i < ids.length; i++) {
    let reward_button = document.getElementById(ids[i]);
    if (i == 0) {
      reward_button.innerHTML = "Play " + quests[0].reward_goal + " games and earn " + quests[0].reward + " coins!";
    } else if (i == 1) {
      reward_button.innerHTML = "Reach level " + quests[1].reward_goal + " and earn " + quests[1].reward + " coins!";
      if (parseInt(quests[i].current_status,10) == 3) {
        reward_button.innerHTML = "This mission has been completed"
      }
    } else if (i == 2) {
      reward_button.innerHTML = "Own " + quests[2].reward_goal + " cars and earn " + quests[2].reward + " coins!";
      if (parseInt(quests[i].current_status,10) == 4) {
        reward_button.innerHTML = "This mission has been completed"
      }
    }
  }
}

function increase_reward(index) {
  var quests = JSON.parse(getCookie('quests'));
  var current_status = parseInt(quests[index].current_status,10)
  var reward_goal = parseInt(quests[index].reward_goal,10)
  var reward = parseInt(quests[index].reward,10)
  if ((index == 1 && current_status == 4) || (index == 2 && current_status == 4)) {
    set_rewards_text();
    upload_to_cokiee("quests", quests);
  }else{
    reward *= 1.5;
    if (index > 0) {
      reward_goal++;
    } else {
      reward_goal *= 2;
    }
    quests[index].reward = reward;
    quests[index].reward_goal = reward_goal;
    upload_to_cokiee("quests", quests);
    set_rewards_text();
  }
}

function increase_status(index) {
  var quests = JSON.parse(getCookie('quests'));
  let status = parseInt(quests[index].current_status,10);
  status ++;
  quests[index].current_status = status;
  upload_to_cokiee("quests", quests);
  var quests = JSON.parse(getCookie('quests'));
}

function get_from_cookies(type) {
  let searched_value = type + "="
  var cookieArray = document.cookie.split("; ");
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];

    if (cookie.indexOf(searched_value) == 0) {
      return cookie.substring(searched_value.length, cookie.length);
    }
  }
  return null
}

function increase_coins(amount){
  var coin = parseInt(get_from_cookies("coin"), 10);
  coin += amount;
  document.getElementById("coin").textContent = coin;
  upload_to_cookie_simple_form("coin" , coin);
}

function increase_level(level) {
  var levels = JSON.parse(getCookie('levels'));
  var unlocked = parseInt(levels[0].unlocked_level)
  if (unlocked <= 2 && level <= 2) {
    unlocked++;
    levels[0].unlocked_level = unlocked;
    upload_to_cokiee("levels" , levels)
  }
}

checkAndSaveCookies();