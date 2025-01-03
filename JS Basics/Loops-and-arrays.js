//console.log("Loops And Arrays");

//for loop 
//Multiplication Table
// let num = prompt("please type a number");

// console.log ("The table for", num, "is");

// for(let i=1; i<=10; i++) {
//     console.log(num, "x", i, "=", num * i);
// }

//squares ,cubes 
// let num = prompt("please type a number");

// console.log ("The table for", num, "is");

// for(let i=1; i<=10; i++) {
//     console.log(num, "^", i, "=", num ** i);
// }


//while loop 

// let num = prompt("Type a Number");

// let i = 1;

// while (i <= 10) {
//     console.log ("multiple of", num, "is", num, "x", i,"=", num * i);
//     i++;
// }


// do while loop


// let num = prompt("Type a Number");

// let i = 1;

// do {
//     console.log ("multiple of", num, "is", num, "x", i,"=", num * i);
//     i++;
// } while (i <= 10);


//for-of loop (for strings and arrays only).

// let str = "SCRIPT";

// let length = 0;

// for (let val of str) { //iterator
//     console.log ("val =", val);
//     length++;
// }

// console.log("string length =", length);

//for in loop

let student = {
    name: "Subham",
    age: "20",
    cgpa: "7.5",
    isPass: true,
};

for (let key in student) {
    console.log (key, student[key]);
}

//print all even and odd no. from 0 to 100;


// for ( let num = 0; num <= 100; num++) {
//     if (num%2 === 0) {
//         console.log( num ,"is even");
//     }
//     else {
//         console.log (num ,"is odd");
//     }
// }


// Random Number Guesser

// let gameNum = 25;

// let userNum= prompt("Guess The Number");

// while( userNum != gameNum) {
//     userNum= prompt("The Number you guessed was wrong, Guess Again");
// }

// alert("Congrats! You guessed it Right");


//Strings

/* 
let str = "random"; (create string)

str.length (string length)

str[0], str[1], str[3] (string indices) */

// let str = "Subham";
// console.log (str[0]);

//Template Literals
// let sentence = `This is a template literal`;
// console.log (sentence);
// console.log (typeof sentence);

// let obj = {
//     item: "chips",
//     price: 5,
// };

// let output = `the cost of ${obj.item} is ${obj.price}`;
// console.log (output);

/*string interpolation
`string text ${expression} string text`*/

/* escape character------->

\n ---> breaks line in a String
\t ---> tab space between string */


//string methods in js
/*  str.length  , str.toUpperCase, str.toLowerCase, str.trim() -- remove whitespaces . 
str.slice(start, end?) // returns part of string
str1.concat(str2) // joins str2 with str1
str.replace (searchVal, newVal)
str.charAt( idx )
*/

// let str = "subham";
// str = str.toUpperCase();
// console.log(str);


// lecture - arrays 
//what arrays - linear form of storring collection of datas 
// arrays are mutable hence values can be changed but strings are immutable.
// let marks = [ 97 , 83, 23, 56, 59];
// console.log(marks);
// console.log(marks.length); //property

// let heroes =[ "shaktiman hi gangadhar hai", "antman", "captain america"];
// console.log(heroes);


// for(let i=0; i<marks.length; i++) {
//     console.log(marks[i]);
// }

// for(let hero of heroes) {
//     console.log(hero.toUpperCase());
// }

//question 1
let marks = [89, 89, 98, 99 ,100 ,83];

let sum = 0;
 
for (let val of marks) {
    sum += val;
}

let avg = sum / marks.length;
console.log (`avg marks of the class = ${avg}`);


// //Question 2
// let items = [250, 645, 300, 900, 50];
// // let i = 0;
// // for (let val of items) {
// //     // console.log(`value at index ${i} = ${val}`);
// //     let offer = val / 10;
// //     items[i] = items[i] - offer ;
// //     console.log (`value after offer = ${items[i]}`);
// //     i++;
// // }

// for (let i = 0 ; i< items.length; i++){
//     let offer= items[i] / 10 ;
//     items[i] -= offer;
// }

// console.log (items);

// array methods 
/* Push() : add to end
Pop() : delete from end & return
toString() : converts array to string */

// let veggies = [ "potato", "cabbage", "tomato", "onion" ];

// veggies.push ("banana","grapes");

// console.log(veggies);


// let foodItems = ["chicken", "paneer", "apple" , "protein"];
// console.log(foodItems);
// let deletedItems = foodItems.pop();
// console.log(foodItems);
// console.log("deleted", deletedItems);
// console.log(foodItems.toString());

/* Concat(): joins multiple arrays and return result
unshift() : add to start
shift() : delete from start and return
slice() : returns a piece of the array
splice() : change original array (add, remove, replace)
*/

// let marvelHeroes = [ "spiderman", "captain america", "ironman", "antman", "blackpanther"];
// let dcHeroes = ["batman", "superman", "flash"];
// let heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes);

// let marvel = [ "spiderman", "captain america", "ironman", "antman", "blackpanther"];
// console.log (marvel);
// console.log (marvel.slice(1,3));


let arr = [ 1,2 ,3 ,4 ,5 ,6 ,7, 8, 9];
arr.splice (2, 2 , 101, 102);
console.log (arr);