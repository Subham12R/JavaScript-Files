// const student = {
//     fullName : "Subham Karmakar",
//     marks : 94.4,
//     printMarks : function() {
//         console.log("marks = ",this.marks);
//     },
// };

// const employee = {
//     calcTax() { ;
//         console.log("tax rate is 10 % ");
//     },
// };

// const Karan = {
//     salary : 50000,
// };

// Karan.__proto__ = employee;

// class MercCar {
//     constructor() {
//         console.log("created new obj");
//     }
//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");
//     }

//     setBrand(brand) {
//         this.brandName = brand;
//     }
// }

// let Mercedes =  new  MercCar;
// Mercedes.setBrand("Mercedes");


// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent {
    
// } // child inherits parents property

// let obj = new Child();


// class Person {
//     constructor() {
//        this.species = "homo sapiens";
//     }
//     eat() {
//         console.log("eat");
//     }

//     sleep() {
//         console.log("sleep");
//     }

//     work() {
//         console.log("do nothing");
//     }

// }

// class Engineer extends Person {
//     work() {
//         console.log("work");
//     }
// }

// let obj = new Engineer;



// Super arg

class Person {
    constructor() {
       this.species = "homo sapiens";
    }
    eat() {
        console.log("eat");
    }
}

class Engineer extends Person {
    constructor(branch) {
        super(); // to invoke parent class constructor
        this.branch = branch;
    }
    work() {
        super.eat();
        console.log("work");
    }
}

let engObj = new Engineer("cs engineer");
