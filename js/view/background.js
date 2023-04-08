var backgroundImage = new Image();
backgroundImage.src = "/static/images/infinite_road.png";
var canvas = document.getElementById("main_canvas");
var ctx = canvas.getContext("2d");

class Canvas_background {
    constructor(speed, img) {

        this.image = new Image();
        this.image.src = img;

        this.y_pos = 0;
        this.speed = speed;
        this.animationID = null;
        this.image.onload = this.loop
    }

    changeSpeed(newSpeed) {
        this.speed = newSpeed;
    };

    loop() {
        this.y_pos += this.speed;
        if (this.y_pos > canvas.height) {
            this.y_pos = this.speed;
        }
        ctx.drawImage(backgroundImage, 0, this.y_pos - canvas.height, canvas.width, canvas.height);
        ctx.drawImage(backgroundImage, 0, this.y_pos, canvas.width, canvas.height);
        this.animationID = requestAnimationFrame(this.loop.bind(this));
    }

    startLoop() {
        this.animationID = requestAnimationFrame(this.loop.bind(this));
    }

    stopLoop() {
        cancelAnimationFrame(this.animationID);
    }
}