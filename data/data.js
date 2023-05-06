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
    "current_status": 2,
    "reward_goal": 2
  }
]

var basic_settings = ['A', 'D', 50];
var coin = 10;
var levels = [{
  "unlocked_level": 1,
  "current_level": 1
}];

if (!checkCookieExistence()) {
  var expiration_date = new Date();
  expiration_date.setFullYear(expiration_date.getFullYear() + 1);
  document.cookie = "quests=" + JSON.stringify(quests) + "; expires=" + expiration_date.toUTCString() + "; path=/";
  document.cookie = "basic_settings=" + JSON.stringify(basic_settings) + "; expires=" + expiration_date.toUTCString() + "; path=/";
  document.cookie = "coin=" + coin + "; expires=" + expiration_date.toUTCString() + "; path=/";
  document.cookie = "levels=" + JSON.stringify(levels) + "; expires=" + expiration_date.toUTCString() + "; path=/";
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
  var parsed_data = JSON.parse(getCookie('basic_settings'));;

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
  basic_settings[2] = document.getElementById("my_audio").volume;
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
    } else if (i == 2) {
      reward_button.innerHTML = "Own " + quests[2].reward_goal + " cars and earn " + quests[2].reward + " coins!";
    }
  }
}

function increase_reward(index) {
  var quests = JSON.parse(getCookie('quests'));
  quests[index].reward *= 1.5;
  if (index > 0) {
    quests[index].reward_goal++;
  } else {
    quests[index].reward_goal *= 2;
  }
  upload_to_cokiee("quests", quests);
  set_rewards_text();
}

function checkCookieExistence() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.startsWith("basic_settings=")) {
      return true;
    }
  }
  return false;
}

function increase_status(index) {
  var quests = JSON.parse(getCookie('quests'));
  quests[index].current_status++;
  upload_to_cokiee("quests", quests);
  var quests = JSON.parse(getCookie('quests'));
  console.log(quests[0].current_status);
}