// Functions in Js are a block of code that performs a specific task , can be invoked whenever needed.
/* Function definition 
function functionName() {
    //do some work
}

function functionName(param1, param2) {
    //do some work
}
*/

/* Function Call
functionName();
*/


// function myFunction() {
//     console.log("We are learning JS");
// }

// myFunction();


// function myFunction(msg, n) {
//     console.log(msg*n);
// }

// myFunction(100 , 20);

// Function -> 2 numbers , sum
// function sum(x, y) {
//     s = x + y;
//     return s;
// }

// let val = sum(3, 4);
// console.log(val);

// function abc() {
//     console.log("hello");
// }


// Arrow Functions - compact way of writing a function;

/*
const functionName = (param1, param2, ...) => {
    //do some work
}
*/


//sum arrow func
// const arrowSum = (a, b) => {
//     console.log(a + b);
// };

// arrowSum (9,19);

// //multiplication arrowfunc
// const arrowMultiply = (a, b) => {
//     console.log(a * b);
// };

// arrowMultiply (3,5);

// Question 1 
// Create a func that takes string as an argument and returns the number of vowels in the string.

// function countVowels(str) {
//     let count = 0;
//     for(const char of str) {
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }
 
// const countVow = (str) => {
//     let count = 0;
//     for(const char of str) {
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }

//forEach loop in Arrays.

// arr.forEach(callBackFunction)

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function printVal(val){ // value at each index
//   console.log(val);
// });

//arrow function

// let array = [1, 2, 3, 4, 5];
// array.forEach((val) => { // value at each index
//   console.log(val);
// });



// let arr = ["pune", "mumbai", "kolkata", "delhi"];

// arr.forEach((val, idx, arr) => { 
//   console.log(val.toUpperCase(), idx, arr);
// });


// let nums = [1, 2, 3 ,4 ,5 ,6 ,7];
// nums.forEach((num) => {
//     console.log(num * num); //num**2
// });

// let nums = [1, 2, 3 ,4 ,5 ,6 ,7];

// let calcSquare = (num) => {
//     console.log (num * num);
// };

// nums.forEach(calcSquare);

// Map Method

// let nums = [1, 2, 3 ,4 ,5 ,6 ,7];

// nums.map((val) => {
//    console.log(val);
// });

// let calcSquare = (num) => {
//     console.log (num * num);
// };

// let nums = [1, 2, 3 ,4 ,5 ,6 ,7];

// let newArr = nums.map((val) => {
//    return val * val;
// });

// console.log(newArr);

// Filter

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let evenArr = arr.filter((val) =>{
//     return val % 2 === 0;
// });
 
// console.log(evenArr);

// Reduce
// let arr = [1, 2, 3, 4, 5];

// const output = arr.reduce((res, curr) => { // res -- accumulator // curr - currentValue
//     return res + curr;
// });

// console.log(output);



//Question 1

// let marks = [97, 98, 86, 76, 60, 90, 99, 100];

// let highArr = marks.filter((val) => {
//     return val >= 90;
// });

// console.log(highArr);

//Question 27
// let n = prompt("enter a number : ");

// let arr = [];

// for(let i=1; i<=n; i++) {
//     arr[i-1] = i;
// }

// const output = arr.reduce((res,curr) => {
//     return res + curr ;
// });

// console.log (arr,output);
