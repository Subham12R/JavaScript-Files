/* EVENTS IN JS 
The change in the state of an object is known as an Event 

Events are fired to notify interesting changes that may affect code execution

1. Mouse Events 
2. Keyboard Events 
3. Form Events 
4. Print event 
etc more in Event.mdn website
*/
// Event Handling in JSON ( As it is bulky to inline handle events in html so event handlers in JS is used)

// node.event = () => {
//     //handle here
// }


let btn1 = document.querySelector("#btn1");

btn1.onclick = (evt) => {
    // console.log("btn1 was clicked");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}

let box = document.querySelector("div");

box.onmouseover = () => {
    console.log("div was checked");
}


//Event Object 

/*
It is a special object that has details about the event

All event handlers have access to the Event Object's properties and
methods

node.event = (e) => {
    //handle here
}

e.target, e.type, e.clientX, e.clientY
*/

//Event Listeners

// node.addEventListener( event, callback)

// node.removeEventListener( event, callback)

// event is the function and callback is the handler


// *Note : the callback reference should be same to remove