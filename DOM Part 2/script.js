// let div= document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log (id);


// DOM Manipulation

// let para = document.querySelector("p");
// console.log(para.getAttribute("class")); //get attribute
// console.log(para.setAttribute("class","123")); // change attr value

//Style  -- node.style

// let div = document.querySelector("div");
// console.log(div.style);

// div.style.backgroundColor = "green";

// div.style.backgroundColor = "purple";
// div.style.fontSize = "40px";
// div.innerText = "Hello!";


//Insert Elements 

//node.append(el) //adds at the end of node (inside)
//node.prepend(el) //adds at the start of the node (inside)
//node.before(el) // adds before the node (outside)
//node.after(el) //adds after the node(outside)

let newBtn = document.createElement("button");
newBtn.innerText = "click me";
console.log(newBtn);


let div = document.querySelector("div");
div.append(newBtn);

//Delete Elements
//node.remove() //removes the node


//appendChild()
//removeChild()


