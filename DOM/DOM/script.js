console.log("hello");

//DOM Manipulation
/* Selecting with ID
document.getElementById("myid");

Selecting with Class
document.getELementsByClassName("myClass");

Selecting with Tag
document.getElementsByTagName("p");

*/

// let header = document.getElementById("heading");
// console.log(header);
// console.dir(header);

// let firstEL = document.querySelectorAll(".myclass");
// let allEL = document.querySelectorAll(".myclass"); //all elements for id #myID
//console.dir(allEl);


//Properties
/*
tagName : Returns Tag for element Nodes
innerText : returns text content of the element and all it children
innerHTML : returns the plain text or HTML contents in the element
textContent : returns textual Content even for hidden elements
*/


//Question 1
// let header = document.getElementById("heading");
// console.dir(header);

// header.innerText = header.innerText + "from AC students";

//question 2
let divs = document.getElementsByClassName("box");

let idx = 1 ;

for( div of divs) {
    console.log(divs);
    div.innerText = `new value ${idx}`;
    idx++;
}
// divs[0].innerText ="new value 1";
// divs[1].innerText ="new value 2";
// divs[2].innerText ="new value 3";
