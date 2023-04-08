// var backgroundImage = new Image();
// backgroundImage.src = "/static/images/infinite_road.png";

class Canvas_background {
    constructor(speed, img) {
        
        this.image = new Image();
        this.image.src = img;
        this.backgroundImage = new Image();
        this.backgroundImage.src = "/static/images/infinite_road.png";

        this.y_pos = 0;
        this.speed = speed;

        this.animationID = null;
        this.image.onload = this.loop;
        this.canvas = document.getElementById("main_canvas");
        this.ctx = this.canvas.getContext("2d");
    }
    
    changeSpeed(newSpeed) {
        this.speed = newSpeed;
    };
    
    loop() {
        this.y_pos += this.speed;
        if (this.y_pos > this.canvas.height) {
            this.y_pos = this.speed;
        }
        this.ctx.drawImage(this.backgroundImage, 0, this.y_pos - this.canvas.height, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.backgroundImage, 0, this.y_pos, this.canvas.width, this.canvas.height);
        this.animationID = requestAnimationFrame(this.loop.bind(this));
    }
    
    startLoop() {
        this.animationID = requestAnimationFrame(this.loop.bind(this));
    }
    
    stopLoop() {
        cancelAnimationFrame(this.animationID);
    }
}