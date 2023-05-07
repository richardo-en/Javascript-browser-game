var canvas = document.getElementById("main_canvas");
var ctx = canvas.getContext("2d");

class Additionals extends Additionals_parent {
    constructor(speed, lane, pos_y, type, player) {
        super(speed, lane, pos_y, player);
        this.image = new Image();
        this.name = type;
        this.image.src = "/static/images/" + type + ".png";
        this.image.onload = () => {
            this.coin_sprite_width = [100,90,60,100,50,100];
            this.coin_sprite_position = [0,0]
            this.coin_sprite_height = 100;
            this.coin_sprite_index = 0;
            this.move_back();
        };
        this.add = false;
        if (type == "coin") {
            this.spriteInterval = setInterval(() => {
                this.next_sprite();
            }, 200);
        }
    }

    draw_object() {
        this.set_positions();
        ctx.clearRect(this.position.x - 5, this.position.y - 5, this.position.width + 10, this.position.height + 10);
        if (this.name == "coin") {
            ctx.drawImage(this.image, this.coin_sprite_position[0] , this.coin_sprite_position[1], this.coin_sprite_width[this.coin_sprite_index] , this.coin_sprite_height, this.position.x, this.position.y, this.position.width, this.position.height);
        }else{
            ctx.drawImage(this.image, this.position.x, this.position.y, this.position.width, this.position.height)
        }
    }

    next_sprite(){
        this.coin_sprite_index++;
        this.coin_sprite_position[0] += this.coin_sprite_width[this.coin_sprite_index - 1];
        if (this.coin_sprite_index == 3) {
            this.coin_sprite_position[0] = 0;
            this.coin_sprite_position[1] = this.coin_sprite_height;
        }else if (this.coin_sprite_index == 6) {
            this.coin_sprite_position[0] = 0;
            this.coin_sprite_position[1] = 0;
            this.coin_sprite_index = 0;
        }

    }
    
    move_back() {
        this.animateFrame = () => {
            if (this.animate && this.position.y < canvas.clientHeight) {
                this.position.y += this.speed;
                if (this.observer.calculate_line() - 1 == this.lane && (this.observer.position.y +50 < this.position.y + this.position.height || this.observer.position.y + this.observer.position.height + 50 > this.position.y)) {
                    this.notify(this);
                }
                this.draw_object();
                setTimeout(this.animateFrame, 5);
            } else {
                this.delete_object()
            }
        }
        
        this.animateFrame();
    }
    
    set_positions() {
        let offset = ((1000 / 6) - this.position.width) / 2;
        this.position.x = (1000 / 6) * this.lane + offset;
    }
    
    delete_object() {
        this.unsubscribe(this);
        this.stop_animation();
        delete this;
        unsubscribe(this, "additional");
    }
    
    stop_animation() {
        this.animate = false;
        setTimeout(() => {
            ctx.clearRect(this.position.x - 5, this.position.y - 5, this.position.width + 10, this.position.height + 10);
        }, 11);
    }
}