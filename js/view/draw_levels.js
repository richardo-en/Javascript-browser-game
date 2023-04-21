var canvas = document.getElementById("main_canvas");
var ctx = canvas.getContext("2d");

class Levels{
    constructor(){}

    easy_algorythm_1(){
        new Cars(2, 0, 0, 100, 166, "/static/images/cars/blue_car.png");
        new Cars(2, 1, 200, 100, 166, "/static/images/cars/blue_car.png");
        /*
        if (hrac je na lavej casti obrazovky) {
            new Cars(2, 1, 0, 100, 166, "/static/images/cars/yellow_car.png");
            new Cars(2, 2, 200, 100, 166, "/static/images/cars/yellow_car.png");
        }
        else if (hrac je na lavej casti obrazovky) {
            new Cars(2, 4, 0, 100, 166, "/static/images/cars/red_car.png");
            new Cars(2, 3, 200, 100, 166, "/static/images/cars/red_car.png");
        }
            
        */
        new Cars(2, 5, 0, 100, 166, "/static/images/cars/blue_car.png");
        new Cars(2, 4, 200, 100, 166, "/static/images/cars/blue_car.png");
    }   

    easy_algorythm_2(){
        new Cars(2, 0, 300, 100, 166, "/static/images/cars/blue_car.png");
        new Cars(2, 1, 0, 100, 166, "/static/images/cars/blue_car.png");
        /*
        if (hrac je v 2 pruhu) {
            new Cars(2, 4, 200, 100, 166, "/static/images/cars/red_car.png");
            new Cars(2, 2, 300, 100, 166, "/static/images/cars/red_car.png");
        }
        else if (hrac je v 5 pruhu) {
            new Cars(2, 1, 200, 100, 166, "/static/images/cars/yellow_car.png");
            new Cars(2, 3, 300, 100, 166, "/static/images/cars/yellow_car.png");
        }
        
        */
       new Cars(2, 4, 0, 100, 166, "/static/images/cars/blue_car.png");
       new Cars(2, 5, 300, 100, 166, "/static/images/cars/blue_car.png");
    }  

    easy_algorythm_3(){
        new Cars(2, 0, 400, 100, 166, "/static/images/cars/blue_car.png");
        new Cars(2, 2, 0, 100, 166, "/static/images/cars/blue_car.png");

        /*
        if (hrac je v 3 pruhu) {
            new Cars(2, 4, 0, 100, 166, "/static/images/cars/red_car.png");
            new Cars(2, 3, 200, 100, 166, "/static/images/cars/red_car.png");
            new Cars(2, 1, 400, 100, 166, "/static/images/cars/red_car.png");
        }
        else if (hrac je na lavej casti obrazovky) {
            new Cars(2, 1, 0, 100, 166, "/static/images/cars/yellow_car.png");
            new Cars(2, 2, 200, 100, 166, "/static/images/cars/yellow_car.png");
            new Cars(2, 4, 400, 100, 166, "/static/images/cars/yellow_car.png");
        }
        
        */
       new Cars(2, 3, 0, 100, 166, "/static/images/cars/blue_car.png");
       new Cars(2, 5, 300, 100, 166, "/static/images/cars/blue_car.png");
    }  


}