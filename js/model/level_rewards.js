var canvas = document.getElementById("main_canvas");
var ctx = canvas.getContext("2d");

class Additionals_parent extends Observer {
    constructor(speed, lane, pos_y , object) {
        super(object);
        this.speed = speed;
        this.lane = lane;
        this.position = {
            "x": 0,
            "y": pos_y - canvas.clientHeight,
            "width": 50,
            "height": 50
        }
        this.animateFrame = null;
        this.animate = true;
    }
}