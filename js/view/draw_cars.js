var canvas = document.getElementById("main_canvas");
var ctx = canvas.getContext("2d");

class Cars extends Object_parent {
    constructor(speed, lane, pos_y, src, player) {
        super(speed, lane, pos_y, "car", player);
        this.image = new Image();
        this.image.src = src;
        this.new_x_pos = null;
        this.image.onload = () => {
            this.set_positions();
            this.position.width = this.image.width;
            this.position.height = this.image.height;
            this.draw_object();
        };

    }

    draw_object() {
        ctx.clearRect(this.position.x - 5, this.position.y - 5, this.position.width + 10, this.position.height + 5);
        ctx.drawImage(this.image, this.position.x, this.position.y, this.position.width, this.position.height);
    }

    move_back() {
        this.animateFrame = () => {
            if (this.position.y > canvas.clientHeight) {
                this.delete_object()
            } else if (this.animate === true) {
                this.position.y += this.speed;
                if (this.player.calculate_line() - 1 == this.lane && (this.player.position.y + 50 < this.position.y + this.position.height || this.player.position.y + this.player.position.height + 50 > this.position.y)) {
                    this.player.update(this);
                }
                this.draw_object();
                setTimeout(this.animateFrame, 5);
            } else {
                setTimeout(this.animateFrame, 100);
            }
        }
        this.animateFrame();
    }

    set_positions() {
        let offset = ((1000 / 6) - this.position.width) / 2;
        this.position.x = (1000 / 6) * this.lane + offset;
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