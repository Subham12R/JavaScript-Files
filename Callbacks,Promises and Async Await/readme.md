async await >> promise chains >> callback hell

1. Understanding callbacks , promises and async /await in JS.

i. Sync in JS
# Synchronous 
Synchronous means the code runs in particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.

# Asynchronous 
Due to synchronous programming , sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next inst immediately and doesn't block the flow.

# Callback Hell
Callback Hell : Nested callbacks stacked below one another forming a pyramid structures (pyramid of doom)

This style of programming becomes diffcult to understand and manage

2. Promises 

Promise is for "eventual" completion of task. It is an object in JS.
It is a solution to callback hell. 

# let promise = new Promise((resolve, reject) => {....})  (Function with 2 handlers)

*resolve & reject are callbacks provided by JS.

# .then() & catch()

promise.then((res) => {....})

promise.catch((err) => {....})



3. Async-Await

async func always returns a promise.

async function myFunc() {....}

await pauses the execution of its surrounding async fucntion untill the promise is settled.


4. IIFE : Immediately invoked Function Expression


IIFE is a func that is called immediately as soon as it  is defined.

#

(function () {
    // ...
}) ();

#

(() => {
    // ...
}) ();

#

(async () => {
    // ..
}) ();

