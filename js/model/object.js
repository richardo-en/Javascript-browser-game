var canvas = document.getElementById("main_canvas");
var ctx = canvas.getContext("2d");

class Object_parent{
    constructor(speed, lane, pos_y, name, player) {
        this.speed = speed;
        this.lane = lane;
        this.position = {
            "x": 0,
            "y": pos_y - canvas.clientHeight,
            "width": 50,
            "height": 50
        };
        this.name = name;
        this.animateFrame = null;
        this.animate = true;
        this.player = player
    }

    stop(){
        if (this.animate == true) {
            this.animate = false
        }
    }

    start(){
        if (this.animate == false) {
            this.animate = true
        }
    }

    delete_object() {
        this.player.unsubscribe(this);
        this.stop_animation();
        delete this;
    }
    
    stop_animation() {
        this.animate = false;
        setTimeout(() => {
            ctx.clearRect(this.position.x - 5, this.position.y - 5, this.position.width + 10, this.position.height + 10);
        }, 11);
    }

    set_positions() {
        let offset = ((1000 / 6) - this.position.width) / 2;
        this.position.x = (1000 / 6) * this.lane + offset;
    }

    powerup(){
        this.speed -= 2;
        setTimeout(function () {
            this.speed += 2
        }, 2000);
    }
}