var canvas = document.getElementById("main_canvas");
var ctx = canvas.getContext("2d");

class Additionals_parent extends Observer {
    constructor(speed, lane, pos_y, src) {
        super();
        this.speed = speed;
        this.image = new Image();
        this.lane = lane;
        this.image.src = src;
        this.new_x_pos = null;
        this.cars = [];
        this.position = {
            "x": 0,
            "y": pos_y - canvas.clientHeight,
            "width": 100,
            "height": 100
        }
        this.image.onload = () => {
            this.position.width = this.image.width;
            this.position.height = this.image.height;
            this.draw_object();
            this.cars.push(this);
        };
        this.animateFrame = null;
        this.animate = true;
    }
}