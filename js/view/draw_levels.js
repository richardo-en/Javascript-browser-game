var canvas = document.getElementById("main_canvas");

class Levels {
    constructor(line){
        this.line = line
    }

    easy_algorythm_1(player) {
        var new_cars = [];
        new_cars.push(new Cars(4, 0, 0 - canvas.clientHeight, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(4, 1, 200 - canvas.clientHeight, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(4, 5, 0 - canvas.clientHeight, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(4, 4, 200 - canvas.clientHeight, "/static/images/cars/blue_car.png"));

        if (this.line == 1) {
            new_cars.push(new Cars(4, 1, 0 - canvas.clientHeight, "/static/images/cars/yellow_car.png"));
            new_cars.push(new Cars(4, 2, 200 - canvas.clientHeight, "/static/images/cars/yellow_car.png"));
        }
        else if (this.line == 6) {
            new_cars.push(new Cars(4, 4, 0 - canvas.clientHeight, "/static/images/cars/red_car.png"));
            new_cars.push(new Cars(4, 3, 200 - canvas.clientHeight, "/static/images/cars/red_car.png"));
        }

        for (let i = 0; i < new_cars.length; i++) {
            new_cars[i].subscribe(player);
            new_cars[i].move_back();
        }
    }

    easy_algorythm_2(player) {
        var new_cars = [];
        new_cars.push(new Cars(4, 0, 300 - canvas.clientHeight, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(4, 1, 0 - canvas.clientHeight, "/static/images/cars/blue_car.png"));   
        new_cars.push(new Cars(4, 4, 0 - canvas.clientHeight, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(4, 5, 300 - canvas.clientHeight, "/static/images/cars/blue_car.png"));

        if (this.line == 2) {
            new_cars.push(new Cars(4, 4, 200 - canvas.clientHeight, "/static/images/cars/red_car.png"));
            new_cars.push(new Cars(4, 2, 300 - canvas.clientHeight, "/static/images/cars/red_car.png"));
        }
        else if (this.line == 5) {
            new_cars.push(new Cars(4, 1, 200 - canvas.clientHeight, "/static/images/cars/yellow_car.png"));
            new_cars.push(new Cars(4, 3, 300 - canvas.clientHeight, "/static/images/cars/yellow_car.png"));
        }

        for (let i = 0; i < new_cars.length; i++) {
            new_cars[i].subscribe(player);
            new_cars[i].move_back();
        }
    }

    easy_algorythm_3(player) {
        var new_cars = [];
        new_cars.push(new Cars(4, 0, 400 - canvas.clientHeight, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(4, 2, 0 - canvas.clientHeight, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(4, 3, 0 - canvas.clientHeight, "/static/images/cars/blue_car.png"));
        new_cars.push(new Cars(4, 5, 300 - canvas.clientHeight, "/static/images/cars/blue_car.png"));

        
        if (this.line == 3) {
            new_cars.push(new Cars(4, 4, 0 - canvas.clientHeight, "/static/images/cars/red_car.png"));
            new_cars.push(new Cars(4, 3, 200 - canvas.clientHeight, "/static/images/cars/red_car.png"));
            new_cars.push(new Cars(4, 1, 400 - canvas.clientHeight, "/static/images/cars/red_car.png"));
        }
        else if (this.line == 4){
            new_cars.push(new Cars(4, 1, 0 - canvas.clientHeight, "/static/images/cars/yellow_car.png"));
            new_cars.push(new Cars(4, 2, 200 - canvas.clientHeight, "/static/images/cars/yellow_car.png"));
            new_cars.push(new Cars(4, 4, 400 - canvas.clientHeight, "/static/images/cars/yellow_car.png"));
        }

        for (let i = 0; i < new_cars.length; i++) {
            new_cars[i].subscribe(player);
            new_cars[i].move_back();
        }
    }

}

//footer - biele pozadia
// menu cierne
// hentu picovinu a nejaky gradient