var canvas = document.getElementById("main_canvas");
var ctx = canvas.getContext("2d");

class Cars {
    constructor(speed, lane, pos_y, w, h, src) {
        this.speed = speed;
        this.image = new Image();
        this.lane = lane;
        this.image.src = src;
        this.new_x_pos = null;
        this.position = {
            "x": 0,
            "y": pos_y,
            "width": w,
            "height": h
        }
        this.image.onload = () => {
            this.draw_object();
        };
    }
    
    draw_object() {
        this.set_positions();
        ctx.clearRect(this.position.x, this.position.y - 5, this.position.width, this.position.height);
        ctx.drawImage(this.image, this.position.x, this.position.y, this.position.width, this.position.height);
    }
    
    move_back() {
        let animateFrame = () => {
            if (this.position.y - this.position.height < canvas.height) {
                this.position.y += this.speed;
                this.draw_object();
                setTimeout(animateFrame, 10);
            }
        }
        animateFrame();
    }
    
    move_back_right() {
        if (this.new_x_pos == null) {
            if (this.position.x == 0) {
                this.set_positions();
            }
            this.new_x_pos = this.position.x + (1000/6);
        }
        let animateFrame = () => {
            if (this.position.y < canvas.height) {
                this.position.y += this.speed;
                if (this.new_x_pos > this.position.x && this.position.y > canvas.height/8) {
                    this.position.x += this.speed;
                }
                this.draw_object();
                setTimeout(animateFrame, 10);
            }else{
                this.new_x_pos = null;
            }
        }
        animateFrame();
    }

    move_back_left() {
        if (this.new_x_pos == null) {
            this.new_x_pos = this.position.x + (1000/6);
            console.log(this.new_x_pos);
        }
        let animateFrame = () => {
            if (this.position.y - this.position.height < canvas.height) {
                this.position.y += this.speed;
                if (this.new_x_pos > this.position.x && this.position.y > canvas.height/8) {
                    this.position.x -= this.speed;
                }
                this.draw_object();
                setTimeout(animateFrame, 10);
            }else{
                this.new_x_pos = null;
            }
        }
        animateFrame();
    }

    set_positions(){
        let offset = ((1000/6) - this.position.width)/2;
        this.position.x = (1000/6) * this.lane + offset;
    }

}

/*
min - 40 bod
6 - dokumentacia a implementacia, 
opis objektov v dokumentacii - 2
opis zaujimavych casti implementacie - mvc, observer - 2
zhodnotenie a porovnanie navrhov - 2 (kb - 1, kb - 2) co sa zmenilo v kb4 oproti kb1 , kb2
5b - prezentacia, 
    2b audio prvky + zvuky
    3b graficke prvky (to co je v dokumentacii)

architektura - 12b
    mvc - 5b
    observer - 7b

implementacia 10b
    3b - scena kde sa panacik hybe
    3b - vytvaranie ojektov pomocou konstruktorov
    1b - rozdelenie do precinkov etc.
    1b - pouzitie script elementov len v head casti
    2b - oddeleny hlavny cyklus od logiky

8b herna volaco interakcia
    4b - kolizia minimum 4 kolizia s roznymi objektami
        2b ze su tam
        2 ze su spravne spravene

3b proceduralne riadenie animacie objektov - sprite

1b ovladanie pomocou klavesnice alebo myse

10b hra
    4b dokoncena a fungujuca herna logika
    2b hra je hratelna a ma pointu
    4b stupnovanie obtiaznosti, zvysenie levelu

5b hodnotenie komplexnosti a praca na projekte

2b zapracovane pripomienky ????

1 zaujimavy obrazok z hry
1 kratke video z hry v dokumentacii
*/ 