class car {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    drive() {
        console.log(this.brand + "is running");

    }
}


let obj = new car("BMW ", "black");
let obj1 = new car("GLI ", "white");
obj.drive();
obj1.drive();


