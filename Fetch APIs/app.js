const URL = "https://cat-fact.herokuapp.com";

// let promise = fetch(URL);

// console.log(promise);

console.log("getting data...");
const getFacts = async () => {
    let response = await fetch(URL);
    console.log(response.status);
    console.log(response);  //JSON FORMAT
};

getFacts();
