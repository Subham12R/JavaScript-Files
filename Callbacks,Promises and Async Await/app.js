// console.log("one");

// setTimeout(() => {
//     console.log("hello");
// }, 2000)  //timeout ;


// console.log("two");
// console.log("three");


// function sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a, b,  sumCallback) {
//     sumCallback(a, b);
// }

// calculator(1, 2, sum);


// const hello = () => {
//     console.log ("hello");
// }

// setTimeout(hello, 3000);


//nesting
// # 1
// let age = 86;
// if(age >= 18) {
//     if (age >=  60) {
//         console.log("senior");
//     }else {
//         console.log("adult");
//     }
// }else {
//     console.log("junior");
// }

// // # 2
// for (let i = 0 ; i < 5; i++) {
//     let str = "";
//     for (let j=0; j < 5; j++) {
//         str = str + j;
//     }
//     console.log(i, str);
// }

//callbacks


// function getData( dataId,  getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000) };

//     //Callback Hell 
// getData (1 , () => {
//     console.log("getting data 2");
//     getData(2, () => {
//         console.log("getting data 3");
//         getData(3);
//     });
// });


// Promises 

// let promise = new Promise((resolve,  reject) => {
//     console.log("I am a promise");
// });

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     })
// }

// function asyncFunc() {
//     return new Promise((resolve,reject) => {
//         setTimeout(()=> {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve,reject) => {
//         setTimeout(()=> {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log("fetching data1.... ");
// let p1= asyncFunc();
// p1.then((res) => {
//     console.log(res);
// });

// console.log("fetching data2.... ");
// let p2= asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// });


///CHAINING

// console.log("fetching data1.... ");
// let p1= asyncFunc();
// p1.then((res) => {
//     console.log(res);
//     console.log("fetching data2 ....");
//     let p2 = asyncFunc2();
//     p2.then((res)=>{
//         console.log(res);
//     });
// });

//alt way

// console.log("fetching data1.... ");
// asyncFunc().then((res) => {
//     console.log(res);
//     console.log("fetching data2 ....");
//     asyncFunc2().then((res)=>{
//         console.log(res);
//     });
// });


//solving callback hell with promise chaining

// function getData( dataId,  getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
//         },2000);
//     });
// }
    // setTimeout(() => {
    //     console.log("data", dataId);
    //     if (getNextData) {
    //         getNextData();
    //     }
    // }, 2000) };

    //Callback Hell 
// getData (1 , () => {
//     console.log("getting data 2");
//     getData(2, () => {
//         console.log("getting data 3");
//         getData(3);
//     });
// });

// let p1 = getData(1);
// p1.then((res) => {
//     console.log(res);
//     let p2 = getData(2);
//     p2.then((res) => {
//         console.log(res);
//         let p3 = getData(3);
//         p3.then((res) => {
//             console.log(res);
//         });
//     });
// });


// Shorter way(actual Promise chaining)

// getData(1).then((res) => {
//     return getData(2);
// })
// .then((res) => {
//     return getData(3);
// })
// .then((res) => {
//     console.log(res);
// });

//async await 
// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     });
// }

// async function getWeatherData() {
//     await api();
// }


function api(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}

//async await

(async function getAllData() {
    console.log("getting data 1....");
    await api(1);
    console.log("getting data 2....");
    await api(2);
    console.log("getting data 3....");
    await api(3);
    console.log("getting data 4....");
    await api(4);
    console.log("getting data 5....");
    await api(5);
    console.log("getting data 6....");
    await api(6);
}) ();



